---
nav: 快速开始
title: API
group:
  title: 快速开始
  order: 4
order: 4
---

### EasyModal

<!-- prettier-ignore -->

    {
      ModalContext: React.Context<EasyModalItem<any, any>[]>;
      Provider: React.FC<Record<string, any>>;
      update: typeof update;
      create: <P, V>(Comp: React.ComponentType<P>) => EasyModalHOC<P, V>;
      show: typeof show;
      hide: typeof hide;
      remove: typeof remove;
    }

<!-- prettier-ignore -->
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| ModalContext | 是否可展开 | boolean | - |  |
| Provider | 最多显示的行数 | number | - |  |
| update | 自定义省略内容后缀 | string | - |  |
| create | 自定义展开描述文案 | ReactNode | `展开` |  |
| show | 省略时，展示提示信息 | boolean \| ReactNode \| [TooltipProps](/components/tooltip-cn/#api) | - | 4.11.0 |
| hide | 触发省略时的回调 | function(ellipsis) | - | 4.2.0 |
| remove | 点击展开时的回调 | function(event) | - |  |
