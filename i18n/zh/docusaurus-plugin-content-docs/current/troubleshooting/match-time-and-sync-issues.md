---
title: 比赛时间和同步问题
sidebar_position: 4
slug: /troubleshooting/match-time-and-sync-issues
---

# 比赛时间和同步问题

当事件、clips 或导出数据无法和视频对齐时，查看这一页。

## 常见原因

- 视频开始时间早于或晚于比赛时钟
- provider 事件使用了不同的时间戳基础
- 缺少阶段边界
- 半场或补时偏移没有映射
- 同步点被加到了错误的视频时刻

## 检查什么

1. 确认视频和事件数据来自同一场比赛。
2. 检查开球和阶段边界。
3. 检查同步点。
4. 用多个已知时刻重新测试事件对齐。

## 相关内容

- [视频时间和比赛时间](../concepts/video-and-match-time)
- [导出 CDF 数据](../workflows/export-cdf-data)
