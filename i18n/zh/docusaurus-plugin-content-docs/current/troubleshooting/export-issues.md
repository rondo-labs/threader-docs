---
title: 导出问题
sidebar_position: 6
slug: /troubleshooting/export-issues
---

# 导出问题

当 CDF 或其他导出结果被校验错误阻止时，查看这一页。

## 检查

- 必填事件字段是否存在
- 球队和球员是否已映射
- 比赛时间同步是否正确
- provider-specific 导入值是否已经 normalize
- 导出格式是否匹配下游工具

## 实用规则

优先修复最接近源数据的校验错误。除非你明确要制作一次性下游 artifact，否则不要手动 patch 导出文件。

## 相关内容

- [导出 CDF 数据](../workflows/export-cdf-data)
- [CDF 概览](../reference/cdf-overview)
