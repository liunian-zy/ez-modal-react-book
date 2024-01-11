---
nav: 快速开始
group:
  title: 进阶用法
  order: 1
order: 1
---

### 1. 使用类型推导

```tsx {3,11,18,19} | pure
import EasyModal, { InnerModalProps } from 'ez-modal-react';

interface Props extends InnerModalProps<string> /*类型约束*/ {
  name: string;
  age: number;
}

const InfoModal = EazyModal.create((props: IProps) => (
  <Modal
    open={props.visible}
    onOk={() => props.hide('ok')}
    onCancel={() => props.hide(null)}
    afterClose={props.remove}
  >
    hello {props.name}
  </Modal>
));

// 1. 缺少属性 age:number;
// 2. res类型得到的是受约束的 string;
const res = await EasyModal.show(InfoModal, { name: 'foo' });
```

### 2. single 模式和 mult 模式

#### single 模式 <Badge>info</Badge>

在基础用法中演示了使用 EazyModal.create 来创建一个全局唯一的高阶组件，在使用 `EasyModal.show/hide/remove/update` 静态方法时传入该高阶组件，对应的操作都只作用于该组件。

#### mult 模式 <Badge>info</Badge>

如果不使用 single 模式，直接在 EasyModal.show 方法中传入一个普通的组件，那么每次都会单独创建一个新的高阶组件，并且在其 hide 后自动销毁。
该组件内依然会被注入额外的实例属性与方法。

```tsx {8} | pure
import EasyModal, { InnerModalProps } from 'ez-modal-react';

interface Props extends InnerModalProps<string> {
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

### 3. 在任何地方使用

- 调用 EasyModal.show，传入创建好的组件，打开弹窗

```tsx | pure
import EasyModal from 'ez-modal-react';

EasyModal.show(InfoModal, { name: 'foo' });
```
