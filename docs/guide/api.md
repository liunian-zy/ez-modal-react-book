---
nav: 快速开始
title: API
group:
  title: 快速开始
  order: 3
order: 3
---

### ellipsis

    {
      rows: number,
      expandable: boolean,
      suffix: string,
      symbol: ReactNode,
      tooltip: boolean | ReactNode | TooltipProps,
      onExpand: function(event),
      onEllipsis: function(ellipsis),
    }



| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| expandable | 是否可展开 | boolean | - |  |
| rows | 最多显示的行数 | number | - |  |
| suffix | 自定义省略内容后缀 | string | - |  |
| symbol | 自定义展开描述文案 | ReactNode | `展开` |  |
| tooltip | 省略时，展示提示信息 | boolean \| ReactNode \| [TooltipProps](/components/tooltip-cn/#api) | - | 4.11.0 |
| onEllipsis | 触发省略时的回调 | function(ellipsis) | - | 4.2.0 |
| onExpand | 点击展开时的回调 | function(event) | - |  |
