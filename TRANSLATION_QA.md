# Translation QA

This document records the current translation QA status for Threader Docs.

## Locales

- Default: English (`en`)
- Chinese: `zh`
- Spanish: `es`

## Coverage

The following sidebar sections have matching English, Chinese, and Spanish pages:

- Intro
- Start
- Core Workflows
- Concepts
- Keyboard
- Troubleshooting

The following section intentionally falls back to English for now:

- Reference

Reference fallback pages:

- `reference/supported-event-types`
- `reference/import-providers`
- `reference/export-formats`
- `reference/cdf-overview`
- `reference/keyboard-shortcut-index`

## Terminology

Keep these product terms stable across locales unless the product UI changes:

- Threader
- project
- video
- event
- time range
- clip
- tactical annotation
- drawing
- playlist
- review
- feed
- workspace
- timeline
- command palette
- CDF

Chinese style:

- Use natural Simplified Chinese.
- Keep product nouns such as `clip`, `playlist`, `feed`, `workspace`, `timeline`, and `tactical annotation` when they map directly to the app UI.
- Prefer action-oriented phrasing over literal English structure.

Spanish style:

- Use clear neutral Spanish for coaches and analysts.
- Keep product nouns such as `clip`, `playlist`, `feed`, `workspace`, `timeline`, and `tactical annotation` when they map directly to the app UI.
- Use `tú`-style imperatives consistently in instructional pages.

## QA Checklist

Before shipping docs changes:

- Verify all non-reference sidebar pages have matching `zh` and `es` files.
- Verify `pnpm run typecheck`.
- Verify `pnpm run build`.
- Check that locale routes build:
  - English: `build/`
  - Chinese: `build/zh`
  - Spanish: `build/es`
- Check that Reference fallback remains intentional or translate it fully.

## Last QA

Phase 7E:

- Chinese required pages: 33 / 33
- Spanish required pages: 33 / 33
- Reference fallback: intentional

