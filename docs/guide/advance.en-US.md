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
2. Components without a specified id will automatically be destroyed 300ms after calling the hide method, as this is considered a one-time use. For details[commit](https://github.com/raotaohub/ez-modal-react/commit/6eb4045e881890b60d0195657a69a77d2f8956a3).
3. If you want to control it by calling other static methods, you need to specify an `id`.

```tsx {21,22} | pure
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

#### Application Scenarios for Mult Mode <Badge>info</Badge>

##### such as：

- Form Input: Users need to fill out multiple different forms, with each form being independently operated and submitted.
- Order Processing: Handling different steps of multiple order processes, with each order being independently tracked and processed.

##### example：

In the table below, each row has an edit age function. The first parameter of show is not created through create and config.id is passed. Additionally, the remove method is not called to destroy the component when it is hidden, thus allowing each window to handle its own content separately.

<code src="./demo/multInTable.tsx" description="mult mode example" tocDepth={3} cols={2}>Application Scenarios for Mult Mode</code>

#### How to call static methods to manipulate components in mult mode? <Badge>info</Badge>

If you want to call these methods from outside the component, you need to pass in an id so that EazyModal can locate them.

```tsx | pure
const res3 = await EasyModal.show(
  InfoModal,
  { name: 'foo2' },
  { id: 'i am a id' },
);
EasyModal.update('i am a id', { name: 'foo3' });
```

<code src="./demo/updatemult.tsx" description='update mult modal component example'></code>

### 3. Remove Components <Badge>warning</Badge>

1. Calling the remove method to destroy a component will immediately remove its (fiber) from the render tree.
2. All UI component lib on the market have a loading animation when hiding and do not immediately destroy the component.<b style='color:red'>Therefore, when you need to destroy a component, you need to call this method in the appropriate lifecycle callback.</b>

For `antd`, it is done in the `afterClose`. The example below demonstrates this.

```tsx {5} | pure
const InfoModal = (props: IProps) => (
  <Modal
    open={props.visible}
    onOk={() => props.hide('ok')}
    onCancel={() => props.hide(null)}
    afterClose={props.remove} // This allows the hide animation of the Modal component to execute smoothly, and the component will
  >
    hello {props.name}
  </Modal>
);
```

<code src="./demo/remove.tsx" description='remove component example'></code>
