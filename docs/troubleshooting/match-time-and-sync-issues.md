---
title: Match Time And Sync Issues
sidebar_position: 4
slug: /troubleshooting/match-time-and-sync-issues
---

# Match Time And Sync Issues

Use this when events, clips, or exported data do not line up with the video.

## Common Causes

- video starts before or after the match clock
- provider events use a different timestamp basis
- period boundaries are missing
- half-time or stoppage offsets are not mapped
- sync points were added to the wrong video moment

## What To Check

1. Confirm the video is the same match as the event data.
2. Check kickoff and period boundaries.
3. Review sync points.
4. Re-test event alignment on several known moments.

## Related

- [Video and match time](../concepts/video-and-match-time)
- [Export CDF data](../workflows/export-cdf-data)
