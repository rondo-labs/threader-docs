import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Start',
      link: {type: 'generated-index', title: 'Start with Threader'},
      items: [
        'start/quick-start',
        'start/create-or-open-project',
        'start/import-match-video',
        'start/import-event-data',
        'start/create-first-clip',
      ],
    },
    {
      type: 'category',
      label: 'Core Workflows',
      link: {type: 'generated-index', title: 'Core Workflows'},
      items: [
        'workflows/timeline-basics',
        'workflows/create-clips-from-time-ranges',
        'workflows/create-clips-from-events',
        'workflows/add-tactical-annotations',
        'workflows/draw-tactical-notes',
        'workflows/build-review-playlists',
        'workflows/publish-to-feed',
        'workflows/export-cdf-data',
      ],
    },
    {
      type: 'category',
      label: 'Concepts',
      link: {type: 'generated-index', title: 'Concepts'},
      items: [
        'concepts/projects',
        'concepts/video-and-match-time',
        'concepts/events-and-cdf',
        'concepts/clips',
        'concepts/tactical-annotations',
        'concepts/playlists-and-reviews',
        'concepts/workspace-and-feed',
        'concepts/local-data-and-cloud-collaboration',
      ],
    },
    {
      type: 'category',
      label: 'Keyboard',
      link: {type: 'generated-index', title: 'Keyboard'},
      items: [
        'keyboard/command-palette',
        'keyboard/playback-controls',
        'keyboard/timeline-navigation',
        'keyboard/clip-shortcuts',
        'keyboard/annotation-shortcuts',
      ],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      link: {type: 'generated-index', title: 'Troubleshooting'},
      items: [
        'troubleshooting/video-import-issues',
        'troubleshooting/event-import-issues',
        'troubleshooting/missing-media',
        'troubleshooting/match-time-and-sync-issues',
        'troubleshooting/workspace-and-feed-issues',
        'troubleshooting/export-issues',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      link: {type: 'generated-index', title: 'Reference'},
      items: [
        'reference/supported-event-types',
        'reference/import-providers',
        'reference/export-formats',
        'reference/cdf-overview',
        'reference/keyboard-shortcut-index',
      ],
    },
  ],
};

export default sidebars;
