---
nav: 快速开始
title: 进阶用法
group:
  title: 快速开始
  order: 3
order: 3
demo:
  cols: 2
  tocDepth: 1
---

### 1. 使用类型推导

如果你正在使用 <a href="https://www.typescriptlang.org/">TypeScript</a> 编写代码,那么你可以试试增加类型约束，以获得更好精确的类型推导。

1. 引入`InnerModalProps`接口，使你组件的 props 类型`extends`它。
2. 并使用。

```tsx {3,11,18,19} | pure
import EasyModal, { InnerModalProps } from 'ez-modal-react';

interface IProps extends InnerModalProps<number> /*类型约束*/ {
  name: string;
  age: number;
}

const InfoModal = EazyModal.create((props: IProps) => (
  <Modal
    open={props.visible}
    onOk={() => props.hide('ok')} // 类型“string”的参数不能赋给类型“number”的参数。ts(2345)⚠️
    onCancel={() => props.hide(null)} // null 作为安全值也被允许
    afterClose={props.remove}
  >
    hello {props.name}
  </Modal>
));

// 1. 缺少属性 age:number;⚠️
// 2. res: string;⚠️
const res = await EasyModal.show(InfoModal, { name: 'foo' });
```

### 2. single 模式和 mult 模式

#### single 模式 <Badge>info</Badge>

1. 在 <a href="/guide/base#示例">基础用法</a>中演示了使用 `EazyModal.create` 会创建一个全局唯一的高阶组件
2. 在使用 `EasyModal.show/hide/remove/update` 静态方法时传入该高阶组件，对应的操作都只作用于该组件。

#### mult 模式 <Badge>info</Badge>

1. 直接在 EasyModal.show 方法中传入一个普通的组件，那么每次都会单独创建一个新的高阶组件。
2. 会在该组件调用其对应的 hide 后自动销毁。
3. 如果想要通过调用其他静态方法控制，需要指定`id`

```tsx {20,21} | pure
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
<code src="./demo/single.tsx" description="使用single模式" tocDepth={3} cols={2}>single模式</code>
<code src="./demo/mult.tsx" description="mult 模式示例" tocDepth={3} cols={2}>mult模式</code>

#### mult 模式如何调用静态方法操作组件？ <Badge>info</Badge>

如果想在组件外部调用这些方法，那么需要传入 id,以方便 EazyModal 能找到他们。

```tsx | pure
const res3 = await EasyModal.show(
  InfoModal,
  { name: 'foo2' },
  { id: 'i am a id' },
);
EasyModal.remove('i am a id');
```

<code src="./demo/updatemult.tsx" description='更新 mult 模式组件的示例'></code>

### 3. 销毁组件

调用`props.remove`即可立即销毁该组件，针对不同的 UI 组件库，需要在其对应的监听函数中调用该方法。

对于`antd，则是在afterClose`里

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
