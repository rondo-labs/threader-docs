---
title: Problemas de exportación
sidebar_position: 6
slug: /troubleshooting/export-issues
---

# Problemas de exportación

Usa esto cuando CDF u otra exportación queda bloqueada por errores de validación.

## Comprueba

- los campos obligatorios de eventos existen
- equipos y jugadores están mapeados
- la sincronización de tiempo de partido es correcta
- los valores importados provider-specific fueron normalizados
- el formato de exportación coincide con la herramienta downstream

## Regla práctica

Corrige primero los errores de validación más cercanos a los datos fuente. No modifiques archivos exportados manualmente salvo que estés creando un artefacto downstream puntual.

## Relacionado

- [Exporta datos CDF](../workflows/export-cdf-data)
- [Resumen de CDF](../reference/cdf-overview)
