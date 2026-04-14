import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Get Started',
      link: {type: 'generated-index', title: 'Get Started with Threader'},
      items: [
        'getting-started/installation',
        'getting-started/quick-start',
      ],
    },
    {
      type: 'category',
      label: 'Core Concepts',
      link: {type: 'generated-index', title: 'Core Concepts'},
      items: [
        'core-concepts/projects',
        'core-concepts/video-and-time',
        'core-concepts/events-and-cdf',
        'core-concepts/rosters-and-players',
        'core-concepts/clips-and-playlists',
      ],
    },
    {
      type: 'category',
      label: 'Workflows',
      link: {type: 'generated-index', title: 'Threader Workflows'},
      items: [
        'workflows/import-video',
        'workflows/sync-match-time',
        'workflows/annotate-events',
        'workflows/draw-tactical-notes',
        'workflows/build-clips',
        'workflows/import-match-data',
        'workflows/export-cdf',
      ],
    },
    {
      type: 'category',
      label: 'Features',
      link: {type: 'generated-index', title: 'Feature Guides'},
      items: [
        'features/video-player',
        'features/timeline',
        'features/command-palette',
        'features/roster-management',
        'features/notebook',
        'features/workspaces-and-feed',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      link: {type: 'generated-index', title: 'Reference'},
      items: [
        'reference/keyboard-shortcuts',
        'reference/supported-events',
        'reference/cdf-overview',
        'reference/import-providers',
        'reference/export-formats',
        'reference/troubleshooting',
      ],
    },
  ],
};

export default sidebars;
