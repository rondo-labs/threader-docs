import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const learningPaths = [
  {
    title: 'Start match analysis',
    description: 'Create a project, import match video, bring in events when available, and save your first clip.',
    to: '/docs/start/quick-start',
    label: 'Open quick start',
  },
  {
    title: 'Build review material',
    description: 'Create clips from time ranges or events, add tactical meaning, and organize playlists for review.',
    to: '/docs/workflows/build-review-playlists',
    label: 'Build playlists',
  },
  {
    title: 'Share with staff',
    description: 'Understand workspaces and feed so local analysis becomes clear team discussion when it is ready.',
    to: '/docs/workflows/publish-to-feed',
    label: 'Publish to feed',
  },
];

const referenceLinks = [
  ['Projects', '/docs/concepts/projects'],
  ['Video and match time', '/docs/concepts/video-and-match-time'],
  ['Events and CDF', '/docs/concepts/events-and-cdf'],
  ['Clips', '/docs/concepts/clips'],
  ['Tactical annotations', '/docs/concepts/tactical-annotations'],
  ['Workspace and feed', '/docs/concepts/workspace-and-feed'],
  ['Import providers', '/docs/reference/import-providers'],
  ['Troubleshooting', '/docs/troubleshooting/video-import-issues'],
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.hero}>
      <div className={styles.heroCopy}>
        <div className={styles.logoLine}>
          <img src="/img/logo.svg" alt="" className={styles.logoMark} />
          <span>Threader Docs</span>
        </div>
        <Heading as="h1" className={styles.title}>
          Start real football analysis faster.
        </Heading>
        <p className={styles.subtitle}>{siteConfig.tagline}. Move from project to video, clips, tactical annotations, review playlists, and feed discussion.</p>
        <div className={styles.actions}>
          <Link className={styles.primaryButton} to="/docs/start/quick-start">
            Start learning
          </Link>
          <Link className={styles.secondaryButton} to="/docs/keyboard/command-palette">
            Open help map
          </Link>
        </div>
        <p className={styles.meta}>macOS 12+ and Windows 10+ (64-bit)</p>
      </div>

      <div className={styles.workspacePreview} aria-label="Threader workspace map">
        <div className={styles.previewTopBar}>
          <span>{siteConfig.title}</span>
          <span>00:24:18</span>
        </div>
        <div className={styles.previewBody}>
          <div className={styles.activityRail}>
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className={styles.videoPane}>
            <div className={styles.pitchLine} />
            <div className={styles.playhead}>Match video</div>
          </div>
          <div className={styles.sidePane}>
            <strong>Review flow</strong>
            <span>Clip</span>
            <span>Tactical meaning</span>
            <span>Playlist</span>
          </div>
        </div>
        <div className={styles.timeline}>
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Home"
      description="Threader documentation for football video annotation, CDF export, clips, and analysis workflows.">
      <HomepageHeader />
      <main>
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Learning paths</p>
            <Heading as="h2">Choose the job you need to do</Heading>
          </div>
          <div className={styles.pathGrid}>
            {learningPaths.map((path) => (
              <Link className={styles.pathCard} to={path.to} key={path.title}>
                <h3>{path.title}</h3>
                <p>{path.description}</p>
                <span>{path.label}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.referenceBand}>
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Reference map</p>
            <Heading as="h2">Find the moving parts</Heading>
          </div>
          <div className={styles.referenceGrid}>
            {referenceLinks.map(([label, to]) => (
              <Link to={to} key={to}>
                {label}
              </Link>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
