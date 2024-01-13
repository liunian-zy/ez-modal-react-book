---
nav: Quick Start
title: start
group:
  title: Quick Start
  order: 1
order: 1
demo:
  tocDepth: 1
---

# Initialization

## Environment Setup

Ensure that you are using <a href="https://github.com/facebook/react">react.js</a> version >= 16.8.

## Installation

```shell
# with yarn
yarn add ez-modal-react -S

# or with npm
npm install ez-modal-react -S
```

## Usage

### 1. Wrapping the Application with Provider

#### For React 16

```tsx | pure
import EasyModal from 'ez-modal-react';

ReactDOM.render(
  <EasyModal.Provider>
    <App />
  </EasyModal.Provider>,
  document.getElementById('root'),
);
```

#### For React 18

```tsx | pure
import EasyModal from 'ez-modal-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <EasyModal.Provider>
    <App />
  </EasyModal.Provider>,
);
```

### 2. Creating Modal Component

`EasyModal.create` returns a higher-order component, injecting additional properties and methods into its props, allowing you to have control over the modal within the component.

```tsx | pure
import EasyModal from 'ez-modal-react';

const InfoModal = EasyModal.create((props) => (
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

> Note: `EasyModal.create` is not mandatory, for more usage, please refer to the [Advanced Usage](/en-US/guide/advance) section.

### 3. Usage Anywhere

Call `EasyModal.show`, passing the created component to open the modal.

```tsx | pure
import EasyModal from 'ez-modal-react';

//The return value 'res' receives the argument when 'hide(arg)' is called inside the component
const res = await EasyModal.show(InfoModal, { name: 'foo' });
```

### 4. Other Static Methods

Apart from `show`, you can also control the component's behavior outside the component using the following additional static methods.

```tsx | pure
EasyModal.update(InfoModal, { name: 'update foo' });
EasyModal.hide(InfoModal);
EasyModal.remove(InfoModal);
```

## Example

<code src="./demo/single.tsx">Example</code>
