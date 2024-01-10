---
nav:
title: 理念
group:
  title: 快速开始
  order: 0
order: 0
---

## 解决什么问题？

:::warning{title=困境}
作为前端开发人员，相信我们都曾陷入繁琐且混乱的模态框管理模式中。

传统方法通常需要在本地组件中提升状态，或者利用上下文提供程序来进行状态管理，每种方法都在规模、复杂度和样板代码方面存在着一些权衡。

 **ez-modal-react**（以下简称 EasyModal） 应运而生，它是一个专为简化模态框状态管理而设计的 React 工具，采用了 “Promisifying”（将行为转换为 Promise），减少状态管理的复杂性，同时为该行为提供类型推断。

如果用一行代码来描述则是

```ts
res = fn() = view
```

来看看加上类型

```ts
res<T> = await fn<T>(component,props<P>) = view<P&T>
```

:::

## 它的工作原理

:::info{title=原理}

#### 设计思路

1. 基于 React.Context 通信。
2. 基于 Typescript 类型约束和推导。
3. 使用 Promise 包装行为，调其 resolve 交付结果至调用方。

#### 工作原理

EasyModal 由多个方法和钩子组成，它们提供这些功能：

- `create` 函数用于为您的模态框组件生成高阶组件（HOC）。
- `EasyModal` 上的`show`、`update`、`hide` 和 `remove` 函数用于在代码的任何位置控制模态框。
- `useModal` 钩子用于在组件内访问与模态框相关的操作和状态。组件内`props`同样会注入相同的属性。

通过函数式的调用 `EasyModal.show()`方法打开一个组件，它返回一个 `Promise`，根据用户与模态框的交互 `resolve` 或 `reject`。
:::

## 何时使用它？

:::error{title=问题}

~~1. 某个组件堆满了 `Modal` 、`Drawer` 及其附属 state 。~~

~~2. 需要复用某个弹窗时，又不想 copy 一份，或者你需要链式调用。~~

~~3. 繁杂状态管理，和重复代码，渐欲迷人眼时影响开发体验~~

:::

:::success{title=方式}

当你需要更直观的代码组织方式及摆脱繁琐的状态管理时。

:::
