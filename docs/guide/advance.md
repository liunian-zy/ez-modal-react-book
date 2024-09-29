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
2. 没有指定`id`的组件在调用`hide`方法 300ms 后自动销毁，因为这被视为一次性的消费，详情[commit](https://github.com/raotaohub/ez-modal-react/commit/6eb4045e881890b60d0195657a69a77d2f8956a3)。
3. 如果想要通过静态方法控制 mult 模式创建的组件，需要指定`id`。

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
<code src="./demo/single.tsx" description="使用single模式" tocDepth={3} cols={2}>single模式</code>
<code src="./demo/mult.tsx" description="mult 模式示例" tocDepth={3} cols={2}>mult模式</code>

#### mult 模式的应用场景 <Badge>info</Badge>

##### 例如：

- 表单输入：用户需要填写多个不同的表单，每个表单可以独立操作和提交。
- 订单处理：处理多个订单流程的不同步骤，每个订单独立跟踪和处理。

##### 案例：

下面这个 Table 每行有一个编辑 age 功能，`show`的第 1 参数，并不是通过`create`创建的，并且传递了`config.id`。同时在隐藏时并没有调用`remove`方法来销毁组件，这样做便实现了，每个窗口处理各自的内容。

<code src="./demo/multInTable.tsx" description="mult 模式示例" tocDepth={3} cols={2}>mult 模式的应用场景</code>

#### mult 模式如何调用静态方法操作组件？ <Badge>info</Badge>

如果想在组件外部调用这些方法，那么需要传入 `id`,以方便 EazyModal 能找到他们。

```tsx | pure
const res3 = await EasyModal.show(
  InfoModal,
  { name: 'foo2' },
  { id: 'i am a id' },
);
EasyModal.update('i am a id', { name: 'foo3' });
```

<code src="./demo/updatemult.tsx" description='更新 mult 模式组件的示例'></code>

### 3. 销毁组件 <Badge>warning</Badge>

1. 调用`remove`方法销毁组件，会立即将其（fiber）从渲染树中移除。

2. 市面上所有的 UI 组件库，在隐藏时都会有一段加载动画而不立即销毁组件。<b style='color:red'>因此当需要销毁一个组件时，需要在其生命周期`对应的监听函数`中调用该方法。</b>

对于`antd，则是在afterClose`里，这里有个例子。

```tsx {5} | pure
const InfoModal = (props: IProps) => (
  <Modal
    open={props.visible}
    onOk={() => props.hide('ok')}
    onCancel={() => props.hide(null)}
    afterClose={props.remove} // 这会使Modal组件的隐藏动画顺利执行，并且在隐藏动画结束后，组件会被销毁。
  >
    hello {props.name}
  </Modal>
);
```

<code src="./demo/remove.tsx" description='销毁组件的示例'></code>
