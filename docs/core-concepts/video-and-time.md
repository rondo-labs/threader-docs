---
title: Video and Time
---

# Video and Time

Threader is built around a video-first workflow. The video stays at the center of the interface while panels, timelines, and annotation tools dock around it.

Threader tracks two related time systems:

- **Video time** is the playback position inside the media file.
- **Match time** is the football context: period, clock, and real-world UTC timestamp.

## Why Time Mapping Matters

Event data becomes more useful when it can be matched against other datasets. CDF exports need timestamps that can be compared with event feeds, tracking data, and downstream analysis pipelines. Whistle sync creates that bridge.

## Whistle Sync

Whistle sync records anchor points such as kickoff or period restarts. Threader can then map a point in the video to match time and UTC time.

Use whistle sync before final export, especially when:

- You need CDF-compliant event timestamps.
- You plan to combine Threader data with provider event data.
- You want reliable clips around match moments.

## Frame-Level Review

Threader includes video controls for precise review, including variable playback speed and frame-by-frame navigation. Use slower speeds when adding location-sensitive events or tactical drawings.
