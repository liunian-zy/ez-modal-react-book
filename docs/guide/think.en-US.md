---
nav:
title: Idea
group:
  title: Quick Start
  order: 0
order: 0
---

## Solve what problem?

:::warning{title=dilemma}
As frontend developers, we have all experienced the cumbersome and chaotic modal management mode.

The traditional approach usually requires lifting the state up in local components, or using context providers for state management, each method involves trade-offs in terms of scalability, complexity, and boilerplate code.

**ez-modal-react** (hereinafter referred to as EasyModal) was born to simplify modal state management in React. It adopts a "Promisifying" approach, reducing the complexity of state management and providing type inference for this behavior.

In a nutshell, it can be described in one line of code:

```ts
res = fn() = view;
```

Let's take a look at the typed version:

```ts
res<T> = await fn<T>(component,props<P>) = view<P&T>
```

:::

## Working principle

:::info{title=principle}

#### Design Ideas

1. It communicates based on React.Context.
2. It relies on TypeScript for type constraints and inference.
3. It uses Promise to wrap behavior and delivers the result to the caller by resolving it.

#### How it Works

EasyModal consists of several methods and hooks that provide the following functionality:

The create function is used to generate a higher-order component (HOC) for your modal component.
The show, update, hide, and remove functions on EasyModal are used to control modals from anywhere in the code.
The useModal hook provides access to modal-related operations and state within a component. The same properties are also injected into the component's props.
By calling the functional EasyModal.show() method to open a component, it returns a Promise that resolves or rejects based on user interaction with the modal.

:::

## When to Use It?

:::error{title=problem}

~~1. A component is filled with Modal, Drawer, and their associated state.~~

~~2. You need to reuse a specific modal without duplicating it, or if you need to chain calls.~~

~~3. A complex state management and repetitive code are becoming overwhelming and affecting the development experience.~~

:::

:::success{title=solution}

EasyModal is useful when you need a more straightforward code organization and want to escape from tedious state management.

:::
