---
nav: 快速开始
title: 起步
group:
  title: 快速开始
  order: 1
order: 1
demo:
  tocDepth: 1
---

# 初始化

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

`EasyModal.create`返回一个高阶组件，并且在其 props `注入`了额外的`属性与方法`，因此在组件内部可以获得其控制权。

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

> EazyModal.create 方法不是必须的，更多用法请看<a title="进阶用法" class="" href="/guide/advance">进阶用法</a>

### 3. 在任何地方使用

调用 EasyModal.show，传入创建好的组件，打开弹窗

```tsx | pure
import EasyModal from 'ez-modal-react';

//返回值 res， 接收到的是组件内调用hide(arg)时的参数
const res = await EasyModal.show(InfoModal, { name: 'foo' });
```

### 4. 其他静态方法

除了 show，在组件外部也可以控制组件的行为，有如下其余的静态方法

```tsx | pure
EasyModal.update(InfoModal, { name: 'update foo' });
EasyModal.hide(InfoModal);
EasyModal.remove(InfoModal);
```

## 示例

<code src="./demo/single.tsx">示例</code>
