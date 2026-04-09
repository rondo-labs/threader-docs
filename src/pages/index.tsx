import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const downloadUrl = 'https://github.com/rondo-labs/threader-docs/releases/latest';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroInner}>
        <p className={styles.eyebrow}>Desktop app for modern football analysis</p>
        <Heading as="h1" className={styles.title}>
          {siteConfig.title}
        </Heading>
        <p className={styles.subtitle}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className={styles.primaryButton}
            href={downloadUrl}>
            Download Latest Release
          </Link>
          <Link
            className={styles.secondaryButton}
            to="/docs/getting-started/installation">
            Installation Guide
          </Link>
        </div>
        <p className={styles.meta}>macOS 12+ available now. Windows support is coming soon.</p>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Home"
      description="Threader — Football video annotation tool for coaches and analysts">
      <HomepageHeader />
    </Layout>
  );
}
