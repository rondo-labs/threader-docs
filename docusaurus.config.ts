import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Threader',
  tagline: 'Documentation for the football video analysis workspace',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://threader-docs.vercel.app',
  baseUrl: '/',

  organizationName: 'rondo-labs',
  projectName: 'threader-docs',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/rondo-labs/threader-docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/rondo-labs/threader-docs/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Threader',
      logo: {
        alt: 'Threader logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {to: '/docs/workflows/annotate-events', label: 'Workflows', position: 'left'},
        {to: '/docs/reference/keyboard-shortcuts', label: 'Reference', position: 'left'},
        {to: '/blog', label: 'Release Notes', position: 'left'},
        {
          href: 'https://github.com/rondo-labs/threader-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/getting-started/quick-start',
            },
            {
              label: 'Core Concepts',
              to: '/docs/category/core-concepts',
            },
            {
              label: 'Workflows',
              to: '/docs/workflows/annotate-events',
            },
          ],
        },
        {
          title: 'Reference',
          items: [
            {
              label: 'Keyboard Shortcuts',
              to: '/docs/reference/keyboard-shortcuts',
            },
            {
              label: 'CDF Overview',
              to: '/docs/reference/cdf-overview',
            },
            {
              label: 'Troubleshooting',
              to: '/docs/reference/troubleshooting',
            },
          ],
        },
        {
          title: 'Project',
          items: [
            {
              label: 'Release Notes',
              to: '/blog',
            },
            {
              label: 'Download',
              href: 'https://github.com/rondo-labs/threader-docs/releases/latest',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Rondo Labs.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
