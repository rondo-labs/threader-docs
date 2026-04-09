const required = ['SOURCE_OWNER', 'SOURCE_REPO', 'SOURCE_TOKEN', 'TARGET_OWNER', 'TARGET_REPO', 'TARGET_TOKEN'];

for (const key of required) {
  if (!process.env[key]) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
}

const sourceOwner = process.env.SOURCE_OWNER;
const sourceRepo = process.env.SOURCE_REPO;
const sourceTag = process.env.SOURCE_TAG;
const sourceToken = process.env.SOURCE_TOKEN;
const targetOwner = process.env.TARGET_OWNER;
const targetRepo = process.env.TARGET_REPO;
const targetToken = process.env.TARGET_TOKEN;

const sourceBaseUrl = `https://api.github.com/repos/${sourceOwner}/${sourceRepo}`;
const targetBaseUrl = `https://api.github.com/repos/${targetOwner}/${targetRepo}`;

async function githubRequest(url, token, options = {}) {
  const headers = {
    Accept: 'application/vnd.github+json',
    Authorization: `Bearer ${token}`,
    'User-Agent': 'threader-release-sync',
    'X-GitHub-Api-Version': '2022-11-28',
    ...options.headers,
  };

  const response = await fetch(url, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`GitHub API request failed (${response.status} ${response.statusText}) for ${url}\n${body}`);
  }

  if (response.status === 204) {
    return null;
  }

  return response.json();
}

async function githubRequestAllow404(url, token, options = {}) {
  const headers = {
    Accept: 'application/vnd.github+json',
    Authorization: `Bearer ${token}`,
    'User-Agent': 'threader-release-sync',
    'X-GitHub-Api-Version': '2022-11-28',
    ...options.headers,
  };

  const response = await fetch(url, {
    ...options,
    headers,
  });

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`GitHub API request failed (${response.status} ${response.statusText}) for ${url}\n${body}`);
  }

  if (response.status === 204) {
    return null;
  }

  return response.json();
}

async function downloadAsset(asset) {
  const response = await fetch(asset.url, {
    headers: {
      Accept: 'application/octet-stream',
      Authorization: `Bearer ${sourceToken}`,
      'User-Agent': 'threader-release-sync',
      'X-GitHub-Api-Version': '2022-11-28',
    },
    redirect: 'follow',
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Failed to download asset ${asset.name} (${response.status} ${response.statusText})\n${body}`);
  }

  return Buffer.from(await response.arrayBuffer());
}

function buildMirroredBody(release) {
  const sourceUrl = release.html_url;
  const originalBody = release.body?.trim() || 'No release notes were provided.';

  return [
    'This release is mirrored automatically from the private `rondo-labs/threader` repository.',
    '',
    `Source release: ${sourceUrl}`,
    '',
    '---',
    '',
    originalBody,
  ].join('\n');
}

function releasePayload(release) {
  return {
    tag_name: release.tag_name,
    name: release.name || release.tag_name,
    body: buildMirroredBody(release),
    draft: false,
    prerelease: release.prerelease,
  };
}

async function getSourceRelease() {
  if (sourceTag) {
    return githubRequest(`${sourceBaseUrl}/releases/tags/${encodeURIComponent(sourceTag)}`, sourceToken);
  }

  return githubRequest(`${sourceBaseUrl}/releases/latest`, sourceToken);
}

async function ensureTargetRelease(sourceRelease) {
  const existing = await githubRequestAllow404(
    `${targetBaseUrl}/releases/tags/${encodeURIComponent(sourceRelease.tag_name)}`,
    targetToken,
  );

  if (existing) {
    return githubRequest(`${targetBaseUrl}/releases/${existing.id}`, targetToken, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(releasePayload(sourceRelease)),
    });
  }

  return githubRequest(`${targetBaseUrl}/releases`, targetToken, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(releasePayload(sourceRelease)),
  });
}

async function deleteAsset(assetId) {
  await githubRequest(`${targetBaseUrl}/releases/assets/${assetId}`, targetToken, {
    method: 'DELETE',
  });
}

async function uploadAsset(uploadUrlTemplate, asset, binary) {
  const uploadUrl = new URL(uploadUrlTemplate.replace('{?name,label}', ''));
  uploadUrl.searchParams.set('name', asset.name);

  const response = await fetch(uploadUrl, {
    method: 'POST',
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${targetToken}`,
      'Content-Type': asset.content_type || 'application/octet-stream',
      'Content-Length': String(binary.length),
      'User-Agent': 'threader-release-sync',
      'X-GitHub-Api-Version': '2022-11-28',
    },
    body: binary,
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Failed to upload asset ${asset.name} (${response.status} ${response.statusText})\n${body}`);
  }

  return response.json();
}

async function syncAssets(sourceRelease, targetRelease) {
  const existingAssets = new Map(targetRelease.assets.map((asset) => [asset.name, asset]));

  for (const asset of sourceRelease.assets) {
    const existing = existingAssets.get(asset.name);

    if (existing && existing.size === asset.size) {
      console.log(`Skipping ${asset.name}; matching asset already exists in target release.`);
      continue;
    }

    if (existing) {
      console.log(`Deleting stale asset ${asset.name} from target release.`);
      await deleteAsset(existing.id);
    }

    console.log(`Downloading ${asset.name} from ${sourceOwner}/${sourceRepo}.`);
    const binary = await downloadAsset(asset);

    console.log(`Uploading ${asset.name} to ${targetOwner}/${targetRepo}.`);
    await uploadAsset(targetRelease.upload_url, asset, binary);
  }
}

async function main() {
  const sourceRelease = await getSourceRelease();
  console.log(`Syncing release ${sourceRelease.tag_name} from ${sourceOwner}/${sourceRepo}.`);

  const targetRelease = await ensureTargetRelease(sourceRelease);
  console.log(`Target release ready: ${targetRelease.html_url}`);

  await syncAssets(sourceRelease, targetRelease);

  console.log('Release sync completed successfully.');
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
