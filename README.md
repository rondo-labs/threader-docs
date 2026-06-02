# Threader

**Desktop football analysis workspace for coaches and analysts.**

Threader helps you move from match footage to clips, tactical annotations, review playlists, and collaboration material. CDF export remains supported, but the documentation is organized around the full analysis workflow rather than export alone.

## Who is Threader for?

- **Performance analysts** tagging match events during video review
- **Coaches** building clip playlists and reviewing key moments
- **Data analysts** who need structured, CDF-compliant event data for models and dashboards

## Features

- Full-bleed video player with a deep dark interface
- Keyboard-first review and command palette workflows
- Timeline for navigating video, events, clips, and annotations
- Clip creation from time ranges or events
- Tactical annotations for structured football meaning
- Playlists for coaching review
- Workspace and feed collaboration
- CDF export for downstream analysis
- Cinema Mode — hide all chrome and focus on the video

## Documentation

Browse the full documentation at **[rondo-labs.github.io/threader-docs](https://rondo-labs.github.io/threader-docs/)**.

The site is deployed to GitHub Pages through GitHub Actions.

## Documentation Structure

The English docs are the canonical source. The docs are structured by user job:

```text
docs/
  start/
  workflows/
  concepts/
  keyboard/
  troubleshooting/
  reference/
```

The intended product loop is:

```text
Project -> Video -> Event / Time Range -> Clip -> Tactical Annotation -> Playlist / Review -> Feed
```

Keep first-use material focused on this loop. CDF, provider imports, and export details belong in advanced workflows or reference pages unless the user explicitly needs them.

## Localization Plan

Default language: English.

Planned supported locales:

- English: default docs tree
- Chinese: `zh`
- Spanish: `es`

English pages should be written first with stable slugs. Chinese and Spanish translations should keep the same page IDs and sidebar order so the app can deep-link to locale-aware Help pages.

Translation files live in:

```text
i18n/
  zh/
    code.json
    docusaurus-theme-classic/
    docusaurus-plugin-content-docs/
      current.json
      current/
  es/
    code.json
    docusaurus-theme-classic/
    docusaurus-plugin-content-docs/
      current.json
      current/
```

Until translated docs are added under `i18n/<locale>/docusaurus-plugin-content-docs/current/`, Docusaurus falls back to the English pages while still exposing locale routes and localized navigation labels.

## App Help Topic Map

Future in-app Help should link to stable docs pages instead of duplicating long-form content inside React components.

Initial topic map:

| Help topic | English docs page |
| --- | --- |
| `quick-start` | `/docs/start/quick-start` |
| `create-project` | `/docs/start/create-or-open-project` |
| `import-video` | `/docs/start/import-match-video` |
| `import-events` | `/docs/start/import-event-data` |
| `create-clip` | `/docs/start/create-first-clip` |
| `timeline-basics` | `/docs/workflows/timeline-basics` |
| `tactical-annotation` | `/docs/workflows/add-tactical-annotations` |
| `playlist-review` | `/docs/workflows/build-review-playlists` |
| `publish-feed` | `/docs/workflows/publish-to-feed` |
| `command-palette` | `/docs/keyboard/command-palette` |
| `keyboard-shortcuts` | `/docs/reference/keyboard-shortcut-index` |
| `troubleshooting-video` | `/docs/troubleshooting/video-import-issues` |

## Feedback & Issues

Found a bug in the docs? Have a feature request or question?

Please [open an issue](https://github.com/rondo-labs/threader-docs/issues) — we'd love to hear from you. See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## About

Threader is built by [Rondo Labs](https://github.com/rondo-labs). The application is proprietary software; this repository contains the public documentation site.
