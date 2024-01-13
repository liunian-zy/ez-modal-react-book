---
nav: Quick Start
title: Advance
group:
  title: Quick Start
  order: 3
order: 3
demo:
  cols: 2
  tocDepth: 1
---

### 1. Using Type Inference

If you are using <a href="https://www.typescriptlang.org/">TypeScript</a> to write code, you may consider adding type constraints to obtain more accurate type inference.

1. Introduce the `InnerModalProps` interface, allowing your component's props type to `extend` it.
2. And use it as shown.

```tsx | pure
import EasyModal, { InnerModalProps } from 'ez-modal-react';

interface IProps extends InnerModalProps<number> /*type constraint*/ {
  name: string;
  age: number;
}

const InfoModal = EasyModal.create((props: IProps) => (
  <Modal
    open={props.visible}
    onOk={() => props.hide('ok')} // Type '"string"' is not assignable to type '"number"'.ts(2345)⚠️
    onCancel={() => props.hide(null)} // Null as a safe value is also allowed
    afterClose={props.remove}
  >
    hello {props.name}
  </Modal>
));

// 1. Missing property age:number;⚠️
// 2. res: string;⚠️
const res = await EasyModal.show(InfoModal, { name: 'foo' });
```

### 2. Single Mode and Mult Mode

#### Single Mode <Badge>info</Badge>

1. The <a href="/guide/base#示例">basic usage</a> demonstrates that using `EazyModal.create` creates a globally unique higher-order component.
2. When using the `EasyModal.show/hide/remove/update` static methods and passing this higher-order component, the corresponding operation only affects that component.

#### Mult Mode <Badge>info</Badge>

1. When directly passing a regular component to the EasyModal.show method, a new higher-order component will be created each time.
2. It will be automatically destroyed after the corresponding hide method is called.
3. If you want to control it by calling other static methods, you need to specify an `id`.

```tsx | pure
import EasyModal, { InnerModalProps } from 'ez-modal-react';

interface IProps extends InnerModalProps<string> {
  name: string;
  age: number;
}

const InfoModal = (props: IProps) => {
  return (
    <Modal
      open={props.visible}
      onOk={() => props.hide('ok')}
      onCancel={() => props.hide(null)}
      afterClose={props.remove}
    >
      hello {props.name}
    </Modal>
  );
};

const res1 = await EasyModal.show(InfoModal, { name: 'foo1' });
const res2 = await EasyModal.show(InfoModal, { name: 'foo2' });
```

<!-- prettier-ignore -->
<code src="./demo/single.tsx" description="use single mode" tocDepth={3} cols={2}>single mode</code>
<code src="./demo/mult.tsx" description="use mult mode" tocDepth={3} cols={2}>mult mode</code>

### 3. Remove Components

Remove a component immediately removes it from the render tree.

You can simply call the `remove` method within the component to immediately destroy it.

All UI component libraries on the market usually have a loading animation when hidden and do not immediately destroy the component. Therefore, when you need to destroy a component, you should call the `remove` method in the corresponding lifecycle event listener.

For `antd`, it is done in the `afterClose`. The example below demonstrates this.

```tsx | pure
const InfoModal = (props: IProps) => (
  <Modal
    open={props.visible}
    onOk={() => props.hide('ok')}
    onCancel={() => props.hide(null)}
    afterClose={props.remove}
  >
    hello {props.name}
  </Modal>
);
```

<code src="./demo/remove.tsx" description='remove component example'></code>
