---
title: Video y tiempo de partido
sidebar_position: 2
slug: /concepts/video-and-match-time
---

# Video y tiempo de partido

El tiempo de video y el tiempo de partido están relacionados, pero no son lo mismo.

El tiempo de video es la posición de reproducción en el archivo. El tiempo de partido es el reloj futbolístico o timestamp real que se usa para alinear eventos y exportaciones.

## Tiempo de video

Usa tiempo de video para:

- reproducción
- navegación del timeline
- selección de rangos de clip
- drawing keyframes

## Tiempo de partido

Usa tiempo de partido cuando:

- eventos importados necesitan alinearse con el video
- los registros de eventos requieren timing preciso
- la exportación CDF necesita timestamps validados
- importan primer tiempo, segundo tiempo, descuento o límites de periodo

## Sincronización

La sincronización de tiempo de partido mapea la posición del video al tiempo futbolístico. Puedes crear clips antes de que la sincronización sea perfecta, pero la exportación estructurada y la validación de eventos necesitan timing fiable.
