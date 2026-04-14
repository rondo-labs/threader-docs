---
title: Events and CDF
---

# Events and CDF

An event is a structured record for something that happens in the match: a pass, shot, duel, recovery, set piece, substitution, or any other supported football action.

Threader stores events using the Common Data Format for Football (CDF). CDF gives each event a predictable schema so the data can travel between tools without a one-off converter.

## Event Anatomy

Most event records include:

- Event type and subtype
- Video time and match time
- Team and player links when available
- Pitch coordinates
- Qualifiers or attributes specific to that event type
- Optional relationships to clips, drawings, or imported provider data

## Why CDF First

CDF keeps the annotation workflow connected to analysis. Instead of producing a spreadsheet that needs cleanup later, Threader captures structured records from the start.

That means exported data can be validated, versioned, and used by downstream tools that understand CDF.

## Validation

Threader includes CDF validation during export. Validation helps catch missing required fields, incomplete sync data, or records that need cleanup before the dataset leaves the app.
