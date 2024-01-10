---
nav: 快速开始
group:
  title: 基础用法
  order: 0
order: 0
---

## 初始化

## 环境准备

确保你使用的 <a href="https://github.com/facebook/react">react.js</a> 版本 >= 16.8。

## 安装

```shell
# with yarn
yarn add ez-modal-react -S

# or with npm
npm install ez-modal-react -S
```

## 使用

### 1. 使用 Provider 包裹应用

#### react16

```tsx {4,6} | pure
import EasyModal from 'ez-modal-react';

ReactDOM.render(
    <EasyModal.Provider>
      <App />
    </EasyModal.Provider>
  document.getElementById('root'),
);

```

#### react18

```tsx {4,6} | pure
import EasyModal from 'ez-modal-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <EasyModal.Provider>
    <App />
  </EasyModal.Provider>,
);
```

### 2. 创建弹窗组件

返回一个高阶组件，并且在其 props 上`注入`了额外的`实例属性与方法`，因此在组件内部可以获得控制权。

```tsx | pure
import EasyModal from 'ez-modal-react';

const InfoModal = EazyModal.create((props) => (
  <Modal
    open={props.visible}
    onOk={props.hide}
    onCancel={props.hide}
    afterClose={props.remove}
  >
    hello{props.name}
  </Modal>
));

export default InfoModal;
```

> EazyModal.create 方法不是必须的，更多用法请看进阶用法

### 3. 在任何地方使用

调用 EasyModal.show，传入创建好的组件，打开弹窗

```tsx | pure
import EasyModal from 'ez-modal-react';

const res = await EasyModal.show(InfoModal, { name: 'foo' }); //返回值 res， 接收到的是组件对应的hide()方法参数
```

### 4. 其他静态方法

除了 show，在组件外部也可以控制组件的行为，有如下其余的静态方法

```tsx | pure
EasyModal.update(InfoModal, { name: 'update foo' });
EasyModal.hide(InfoModal);
EasyModal.remove(InfoModal);
```

### Info Badge <Badge>info</Badge>

### Warning Badge <Badge type="warning">warning</Badge>

### Error Badge <Badge type="error">error</Badge>

### Success Badge <Badge type="success">success</Badge>

:::info{title=自定义标题}
这是一条普通信息
:::

:::success
这是一条成功信息
:::

:::warning
这是一条警告信息
:::

:::error
这是一条错误信息
:::

```jsx {5} | pure
import React from 'react';

export default () => (
  <div>
    <h1>Hello dumi!</h1>
  </div>
);
```
