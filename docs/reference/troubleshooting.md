---
title: Troubleshooting
---

# Troubleshooting

Use this page when Threader does not behave as expected.

## Video Does Not Import

Try transcoding the file to a standard H.264 MP4 and importing again. Keep the source file on a local disk rather than a cloud-only path.

## Project Opens but Video Is Missing

The `.threader` project stores analysis data, while the video remains an external file. Move the video back to its original path or relink it when prompted.

## CDF Export Has Validation Errors

Check match metadata, whistle sync, required event fields, team links, player links, and coordinates. Fix errors before using the exported dataset downstream.

## Imported Data Looks Misaligned

Confirm that the provider file is attached to the correct video and that whistle sync points match the actual video timeline.
