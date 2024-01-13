---
nav: 快速开始
title: API
group:
  title: 快速开始
  order: 4
order: 4
---

## 前言

为了更好的支持 <a href="https://www.typescriptlang.org/">TypeScript</a>，我们在内部做了小量的泛型传递用做类型推导，但使用者无需关注，只要按照这一<a href="/guide/advance#1-使用类型推导">步骤</a>使用即可~

## 实例属性与方法

### props 注入 和 useModal

#### 1. props

在被`EasyModal.show`方法调用的组件组件内，通过访问`props`可以读取到额外属性 `visible|hide|remove|resolve|reject`,使用方法和静态方法一致。

#### 2. useModal

在被`EasyModal.show`方法调用的组件组件内，通过钩子函数`const modal = useModal<IProps>()`，能获得和`props注入`一样的效果。

#### 都能获得如下实例属性和方法

<!-- prettier-ignore -->
| 实例属性与方法 | 说明     | 类型       | 默认值 | 版本  |
| -------------- | -------- | ---------- | ------ | ----- |
| visible        | 控制是否显示 | `boolean` | -      | 1.0.1 |
| hide           | 隐藏组件，也接受`null`用于忽略返回值类型推导 | `(res:V \| null)=>void` | -      | 1.0.1 |
| remove         | 移除组件 | `()=>void` | -      | 1.0.1 |
| resolve        | 在hide调用时默认调用<a href="/guide/advance#1-使用类型推导">基于类型约束</a>，作为当次`show`方法调用的返回值 | `(res:V)=>void` | -      | 1.0.1 |
| reject         | 作为当次show方法调用的`reject` | `()=>void` | -      | 1.0.1 |

> 1. 直接调用 resolve 并不常见，默认在使用 hide 时会调用。
> 2. 直接调用 reject 并不常见，均可在使用 hide 时通过参数处理。

:::success{title=现在再来看这行代码是否容易理解一些}

```ts
res<T> = await fn<T>(component,props<P>) = view<P&T>
```

:::

## 静态方法

- 静态属性与方法

<!-- prettier-ignore -->
```tsx | pure

{
    Provider: React.FC;
    create: (Comp:React.ComponentType<P>) => EasyModalHOC;
    update: (ModalOrId: EasyModalHOC | Id, props?: P) => void;
    show: (Modal: EasyModalHOC, props?: P, config?: ItemConfig) => Promise<V>;
    hide: (Modal: EasyModalHOC<P, V> | Id, result?: V | null) => void;
    remove: (Modal: EasyModalHOC<P, V> | Id) => void;
}
```

<!-- prettier-ignore -->
| 静态属性与方法 | 说明 | 类型 | 默认值 | 版本 |
| --- |  ------ | ----- | --- | --- |
| Provider | 包裹根应用或任何层级（只作用于此层级下的组件） | `React.FC` | - | 1.0.1 |
| create | 返回一个唯一的HOC组件 | `Function` | - | 1.0.1 |
| update | 更新组件 | `Function` | - | 1.0.1 |
| show | 打开组件，在`props`注入额外属性 `visible\|hide\|remove\|resolve\|reject` | `Function` | - | 1.0.1 |
| hide | 隐藏组件 | `Function` | - | 1.0.1 |
| remove | 移除组件 | `Function` | - | 1.0.1 |

### EasyModal.create

<!-- prettier-ignore -->
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| args1 | React组件 | `React.ComponentType<P>` | - | 1.0.1 |

```tsx | pure
const MyModal = EasyModal.create((props) => (
  <Modal
    title={props.title}
    open={props.visible}
    onOk={() => props.hide('ok')}
    onCancel={props.hide}
    afterClose={props.remove}
  />
));
```

### EasyModal.show

<!-- prettier-ignore -->
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| arg1-Component | 被打开的组件（注入额外属性） | `React.Component`或`EasyModalHOC` | - | 1.0.1 |
| arg2-props | Component所需要的props | `Record<as any ,any>` | - | 1.0.1 |
| arg3-config | 配置自定义id，hide时默认行为 | `{id?: string \| number; resolveOnHide?: boolean }` | {resolveOnHide:true} | 1.0.1 |

```tsx | pure
const res = await EasyModal.show(MyModal, { title: 'ez~' }); // props.hide()调用后得到返回值 'ok'
```

### EasyModal.update

<!-- prettier-ignore -->
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| ----- | --- | --- | --- | --- |
| arg1 | `EasyModalHOC`或id（非`create方法`创建的HOC,在<a href="/guide/api#easymodalshow">config</a>中指定） | `EasyModalHOC`或`string \| number` | - | 1.0.1 |
| arg2-props | 组件要更新的props,<a href="/guide/advance#1-使用类型推导">基于类型约束</a> | `{} extends P` | - | 1.0.1 |

```tsx | pure
const res = await EasyModal.update(MyModal, { title: 'ez~' });
```

### EasyModal.hide

<!-- prettier-ignore -->
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| ----- | --- | --- | --- | --- |
| arg1-result | 隐藏组件，并将参数作为当次show方法调用的返回值<a href="/guide/advance#1-使用类型推导">基于类型约束</a> | `any` | - | 1.0.1 |

```tsx | pure
const res = await EasyModal.show(MyModal, { title: 'ez~' }); // EasyModal.hide调用后得到返回值 '静态方法调用'
EasyModal.hide(MyModal);
```

### EasyModal.remove

<!-- prettier-ignore -->
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| ----- | --- | --- | --- | --- |
| arg1 | `EasyModalHOC`或id（非`create方法`创建的HOC,在<a href="/guide/api#easymodalshow">config</a>中指定） | `EasyModalHOC`或`string \| number` | - | 1.0.1 |

```tsx | pure
EasyModal.remove(MyModal); // 立即从 DOM 中移除
```
