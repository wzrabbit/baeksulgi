import React from 'react';
import './App.css';
import { Baeksulgi, BaeksulgiProvider } from './lib';
import Button from './Button';

const App = () => {
  return (
    <div className="test-container">
      <BaeksulgiProvider>
        <Button />
        <Baeksulgi />
      </BaeksulgiProvider>
    </div>
  );
};

export default App;
