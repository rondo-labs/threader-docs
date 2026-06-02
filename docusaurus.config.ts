import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Threader',
  tagline: 'Documentation for the football video analysis workspace',
  favicon: 'img/logo.svg',

  future: {
    v4: true,
  },

  url: 'https://rondo-labs.github.io',
  baseUrl: '/threader-docs/',

  organizationName: 'rondo-labs',
  projectName: 'threader-docs',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh', 'es'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
      },
      zh: {
        label: '中文',
        direction: 'ltr',
        htmlLang: 'zh-CN',
      },
      es: {
        label: 'Español',
        direction: 'ltr',
        htmlLang: 'es',
      },
    },
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
    image: 'img/threader-icon-transparent.png',
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
        {to: '/docs/start/quick-start', label: 'Start', position: 'left'},
        {to: '/docs/workflows/timeline-basics', label: 'Workflows', position: 'left'},
        {to: '/docs/keyboard/command-palette', label: 'Keyboard', position: 'left'},
        {to: '/blog', label: 'Release Notes', position: 'left'},
        {
          type: 'localeDropdown',
          position: 'right',
        },
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
              label: 'Quick Start',
              to: '/docs/start/quick-start',
            },
            {
              label: 'Create First Clip',
              to: '/docs/start/create-first-clip',
            },
            {
              label: 'Timeline Basics',
              to: '/docs/workflows/timeline-basics',
            },
          ],
        },
        {
          title: 'Reference',
          items: [
            {
              label: 'Command Palette',
              to: '/docs/keyboard/command-palette',
            },
            {
              label: 'CDF Overview',
              to: '/docs/reference/cdf-overview',
            },
            {
              label: 'Troubleshooting',
              to: '/docs/troubleshooting/video-import-issues',
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
