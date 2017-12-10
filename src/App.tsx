import * as React from 'react';
import './App.css';
import { Ticker } from './components/Ticker/index';
import { getTickerRows } from './components/Ticker/utils';

export const App = () => {
  return (
    <div>
      <Ticker rows={[]}/>
    </div>
  );
};

export default App;
