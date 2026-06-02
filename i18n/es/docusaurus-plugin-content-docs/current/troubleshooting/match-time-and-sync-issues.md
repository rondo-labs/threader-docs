---
title: Problemas de tiempo de partido y sincronización
sidebar_position: 4
slug: /troubleshooting/match-time-and-sync-issues
---

# Problemas de tiempo de partido y sincronización

Usa esto cuando eventos, clips o datos exportados no se alinean con el video.

## Causas comunes

- el video empieza antes o después del reloj de partido
- los eventos del provider usan otra base de timestamp
- faltan límites de periodo
- no están mapeados descanso o descuento
- los puntos de sync se añadieron al momento incorrecto del video

## Qué comprobar

1. Confirma que el video y los eventos son del mismo partido.
2. Revisa kickoff y límites de periodo.
3. Revisa puntos de sync.
4. Vuelve a probar la alineación de eventos en varios momentos conocidos.

## Relacionado

- [Video y tiempo de partido](../concepts/video-and-match-time)
- [Exporta datos CDF](../workflows/export-cdf-data)
