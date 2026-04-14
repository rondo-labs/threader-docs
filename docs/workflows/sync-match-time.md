---
title: Sync Match Time
---

# Sync Match Time

Whistle sync maps the video playback position to match time and UTC time. This is the step that turns a local video timeline into analysis-ready football data.

## When to Sync

Sync match time before exporting CDF data or combining Threader annotations with provider data.

Good anchor points include:

- First-half kickoff
- Second-half kickoff
- Extra-time period starts
- Known restart moments if the video includes edits or broadcast gaps

## Steps

1. Open the whistle sync workflow.
2. Move the video to a clear anchor moment.
3. Add a sync point for that moment.
4. Enter the matching UTC time when available.
5. Repeat for each period that needs an anchor.
6. Generate or review video segments from the sync points.

## Checking the Result

After syncing, move to a few known match moments and verify that the displayed match time is plausible. If the video has cuts, add more anchors around the affected segments.
