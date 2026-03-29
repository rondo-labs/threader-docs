---
sidebar_position: 1
---

# CDF Overview

The **Common Data Format (CDF)** is an open standard for football data, defined by [IEEE 3715](https://www.cdf.football/).

## Why CDF?

- **Interoperability** — Share data across tools and platforms without conversion
- **Completeness** — Covers events, tracking, match metadata, and video sync
- **Industry-backed** — Developed by leading football data companies and academics

## CDF in Threader

Threader uses **CDF v0.2.3**. Every annotation you create maps 1:1 to the CDF Event Data schema. This means:

- All required CDF fields are enforced in the UI
- Exports are CDF-compliant JSONL out of the box
- You can validate exports with the official CDF validator

## Coordinate System

CDF uses real-world metres with the origin at pitch centre:

- **x-axis** runs along the pitch length
- **y-axis** runs along the pitch width
- Dimensions come from `stadium.pitch_length` and `stadium.pitch_width`

## Learn More

- [CDF Website](https://www.cdf.football/)
- [CDF Paper (Anzer et al. 2025)](https://arxiv.org/abs/2505.15820)
