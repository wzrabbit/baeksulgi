import React from 'react';
import { useContext } from 'react';
import { BaeksulgiContext } from './lib';

const Button = () => {
  const { openModal } = useContext(BaeksulgiContext);
  const helloText = <p>Hello, Baeksulgi!</p>;

  return <button onClick={() => openModal(helloText)}>Click me!</button>;
};

export default Button;
