import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const downloadUrl = 'https://github.com/rondo-labs/threader-docs/releases/latest';

const learningPaths = [
  {
    title: 'Start a match project',
    description: 'Install Threader, create a project, import footage, and prepare your first analysis session.',
    to: '/docs/getting-started/quick-start',
    label: 'Open quick start',
  },
  {
    title: 'Annotate with speed',
    description: 'Use keyboard-first event tagging, timeline review, player links, and validation checks.',
    to: '/docs/workflows/annotate-events',
    label: 'Learn annotation',
  },
  {
    title: 'Export analysis data',
    description: 'Set up match time, validate records, and export CDF-ready football event data.',
    to: '/docs/workflows/export-cdf',
    label: 'Prepare export',
  },
];

const referenceLinks = [
  ['Projects', '/docs/core-concepts/projects'],
  ['Video and time', '/docs/core-concepts/video-and-time'],
  ['Events and CDF', '/docs/core-concepts/events-and-cdf'],
  ['Clips and playlists', '/docs/core-concepts/clips-and-playlists'],
  ['Import providers', '/docs/reference/import-providers'],
  ['Troubleshooting', '/docs/reference/troubleshooting'],
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
          Learn the football analysis workspace.
        </Heading>
        <p className={styles.subtitle}>{siteConfig.tagline}. Move from match footage to CDF data, clips, tactical notes, and review material.</p>
        <div className={styles.actions}>
          <Link className={styles.primaryButton} to="/docs/getting-started/quick-start">
            Start learning
          </Link>
          <Link className={styles.secondaryButton} href={downloadUrl}>
            Download latest release
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
            <strong>Annotation</strong>
            <span>Pass</span>
            <span>Player 8</span>
            <span>CDF ready</span>
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
            <Heading as="h2">Choose the next job to do</Heading>
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
