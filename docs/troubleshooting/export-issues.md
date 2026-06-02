---
title: Export Issues
sidebar_position: 6
slug: /troubleshooting/export-issues
---

# Export Issues

Use this when CDF or other export output is blocked by validation errors.

## Check

- required event fields are present
- teams and players are mapped
- match time sync is correct
- provider-specific imported values were normalized
- export format matches the downstream tool

## Practical Rule

Fix validation errors closest to the source data first. Do not patch exported files manually unless you are intentionally creating a one-off downstream artifact.

## Related

- [Export CDF data](../workflows/export-cdf-data)
- [CDF overview](../reference/cdf-overview)
