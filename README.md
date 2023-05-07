<div align="center">
  <h1>Baeksulgi</h1>
  <img src="https://user-images.githubusercontent.com/87642422/236678916-c7c949ea-d29e-47d0-b3a5-b4f49f5ca2fa.png" width="250px" />  
  <p>
    <strong>Baeksulgi is a simple modal library, used in React project with TypeScript.</strong>
  </p>
</div>

## How to install 🛠

Open your terminal, navigate to your project, and enter the following command.

```
npm install baeksulgi
```

## How to use ✨

### BaeksulgiProvider

`Baeksulgi` is a modal library that uses Context API. To use it, you need to specify the scope in which you want to use the modal.  
To use the modal within the desired scope, you have to import the `BaeksulgiProvider` and use it.

```tsx
import { BaeksulgiProvider } from 'baeksulgi';
```

```tsx
const MyApp = () => {
  return (
    <BaeksulgiProvider>
      {/* You can use the modal inside the scope */}
    </BaeksulgiProvider>
  );
};
```

### Baeksulgi

Please import the `Baeksulgi` component where you want to use the modal.  
When you open the modal, it will be rendered at the designated location.

```tsx
import { Baeksulgi } from 'baeksulgi';
```

```tsx
const MyComponent = () => {
  <Baeksulgi />;
};
```

### BaeksulgiContext

Within the scope of `BaeksulgiProvider`, you can control `Baeksulgi` modal from anywhere! You need to import `BaeksulgiContext` to do this.
Currently, you can use four commands in `BaeksulgiContext`.

- `isOpen` - check if the `Baeksulgi` modal is open. Returns `true` or `false`.
- `content` - You can get what is currently inside the `Baeksulgi` modal.
- `openModal(content)` - Use this command to open `Baeksulgi` modal, and specify the `content` which you want to show inside the modal.
- `closeModal()` - Use this command to close the modal. The modal can be closed by clicking on the empty space of the modal without using the command.

```tsx
import { useContext } from 'react';
import { BaeksulgiContext } from 'baeksulgi';
```

```tsx
const MyComponent = () => {
  const { isOpen, content, openModal, closeModal } =
    useContext(BaeksulgiContext);

  {
    /* Implement your component, and use the commands here */
  }
};
```

## Tutorial 📕

### Creating the button to open the modal

First, let's create a button to open the `Baeksulgi` modal.  
In this case, we need the `openModal()` command, so we can import the `BaeksulgiContext` and use it.
Please specify the content that you want to show inside the modal. In this tutorial, we simply used a text with `Hello, Baeksulgi!`.

```tsx
import React from 'react';
import { useContext } from 'react';
import { BaeksulgiContext } from 'baeksulgi';

const Button = () => {
  const { openModal } = useContext(BaeksulgiContext);
  const helloText = <p>Hello, Baeksulgi!</p>;

  return <button onClick={() => openModal(helloText)}>Click me!</button>;
};

export default Button;
```

### Let's specify the scope, and use the modal

Now we have to specify the scope which the `Baeksulgi` modal can be used, and implement the `Baeksulgi` modal.
We can import `BaeksulgiProvider`, and `Baeksulgi` to do this.

In this tutorial, we defined the `BaeksulgiProvider` to used in `App`, and implemented `Baeksulgi` modal here.
Don't forget to import your button!

```tsx
import React from 'react';
import { Baeksulgi, BaeksulgiProvider } from 'baeksulgi';
import Button from './Button';

const App = () => {
  return (
    <div>
      <BaeksulgiProvider>
        <Button />
        <Baeksulgi />
      </BaeksulgiProvider>
    </div>
  );
};

export default App;
```

### That's it! Click the button, and you can see the modal!

<img src="https://user-images.githubusercontent.com/87642422/236682825-944f6ae5-ce74-42db-a4c6-6502ddb640bb.PNG" width="700px" />
