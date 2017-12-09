import * as React from 'react';
import './App.css';
import { Ticker } from './components/Ticker/index';

export const App = () => {
  return (
    <div>
      <Ticker/>
      <Ticker/>
    </div>
  );
};

export default App;
