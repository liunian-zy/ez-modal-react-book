---
nav: Quick Start
title: API
group:
  title: Quick Start
  order: 4
order: 4
---

## Preface

In order to better support <a href="https://www.typescriptlang.org/">TypeScript</a>, we have used a small amount of generic passing for type inference internally. However, users do not need to worry about this; just follow the steps on <a href="/guide/advance#1-使用类型推导">this page</a>.

## Instance Properties and Methods

### Props Injection and useModal

#### 1. Props

Inside the component called by the `EasyModal.show` method, you can access additional properties `visible|hide|remove|resolve|reject` through the `props`, and use them as with static methods.

#### 2. useModal

In the component called by the `EasyModal.show` method, by using the hook `const modal = useModal<IProps>()`, you can achieve the same effect as `props` injection.

Both methods provide the following instance properties and methods:

<!-- prettier-ignore -->
| Instance Properties and Methods | Description                                                                                                                               | Type                    | Default | Version |
| ------- | ------- | ------- | ------- | ------- |
| visible                         | Controls whether the component is shown                                                                                                   | `boolean`               | -       | 1.0.1   |
| hide                            | Hides the component, also accepts `null` to ignore type inference for the return value                                                    | `(res:V \| null)=>void` | -       | 1.0.1   |
| remove                          | Removes the component                                                                                                                     | `()=>void`              | -       | 1.0.1   |
| resolve                         | Defaulted to be called upon calling `hide` based on [type constraints](/en-US/guide/advance#1-使用类型推导), serves as the return value for the `show` method | `(res:V)=>void`         | -       | 1.0.1   |
| reject                          | Serves as the `reject` for the current `show` method call                                                                                 | `()=>void`              | -       | 1.0.1   |

> 1. Directly calling `resolve` is not common, it is usually called when using `hide`.
> 2. Directly calling `reject` is not common, both can be handled as parameters when using `hide`.

:::success{title="Now, does this line of code make more sense?"}

```ts
res<T> = await fn<T>(component,props<P>) = view<P&T>
```

:::

## Static Methods

- Static Properties and Methods

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
| Static Properties and Methods | Description | Type | Default | Version |
| ----------------------------- |  ---------- | ---- | ------- | ------- |
| Provider | Wraps the root application or any level (applies only to components within this level) | `React.FC` | - | 1.0.1 |
| create | Return a unique HOC | `Function` | - | 1.0.1 |
| update | Update the component  | `Function` | - | 1.0.1 |
| show | Open the component, injecting additional properties `visible\|hide\|remove\|resolve\|reject`into`props` | `Function` | - | 1.0.1 |
| hide | Hide the component  | `Function` | - | 1.0.1 |
| remove | Remove the component | `Function` | - | 1.0.1 |

### EasyModal.create

<!-- prettier-ignore -->
| Parameter | Description     | Type                     | Default | Version |
| --------- | --------------- | ------------------------ | ------- | ------- |
| args1     | React component | `React.ComponentType<P>` | -       | 1.0.1   |

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
| Parameter      | Description | Type | Default | Version |
| -------------- | ----------- | -----| ------- | ------- |
| arg1-Component | Component to be opened (with additional properties injected) | `React.Component` or `EasyModalHOC`                 | -                      | 1.0.1   |
| arg2-props     | Props required by the component                              | `Record<as any ,any>`                               | -                      | 1.0.1   |
| arg3-config    | Custom configuration id, default behavior on hide            | `{id?: string \| number; resolveOnHide?: boolean }` | `{resolveOnHide:true}` | 1.0.1   |

```tsx | pure
// Receive the return value 'ok' after calling props.hide()
const res = await EasyModal.show(MyModal, { title: 'ez~' });
```

### EasyModal.update

<!-- prettier-ignore -->
| Parameter  | Description| Type| Default | Version |
| ---------- | ---------- | ---------- | ------- | ------- |
| arg1       | `EasyModalHOC` or id (HOC created not by `create method`, specified in <a href="/guide/api#easymodalshow">config</a>) | `EasyModalHOC` or `string \| number` | -       | 1.0.1   |
| arg2-props | Props to be updated in the component, [based on type constraints](#1-使用类型推导)                                    | `{}` extends P                       | -       | 1.0.1   |

```tsx | pure
const res = await EasyModal.update(MyModal, { title: 'ez~' });
```

### EasyModal.hide

<!-- prettier-ignore -->
| Parameter   | Description| Type  | Default | Version |
| ----------- | ----- | ----- | ------- | ------- |
| arg1-result | Hides the component and uses the parameter as the return value for the `show` method call [based on type constraints](#1-使用类型推导) | `any` | -       | 1.0.1   |

```tsx | pure
EasyModal.hide(MyModal);
```

### EasyModal.remove

<!-- prettier-ignore -->
| Parameter | Description| Type| Default | Version |
| --------- | --------- | --------- | ------- | ------- |
| arg1      | `EasyModalHOC` or id (HOC created not by `create method`, specified in <a href="/guide/api#easymodalshow">config</a>) | `EasyModalHOC` or `string \| number` | -       | 1.0.1   |

```tsx | pure
EasyModal.remove(MyModal); // Immediately removes from the DOM
```
