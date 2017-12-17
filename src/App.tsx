import * as React from 'react';
import './App.css';
import { Ticker } from './components/Ticker/index';
import { createStore } from './store';
import { Provider } from 'react-redux';
const preloadedState = {};
const context = {};
const {store} = createStore(context, preloadedState);

export const App = () => {
  return (
    <Provider store={store}>
      <Ticker rows={[]}/>
    </Provider>
  );
};

export default App;
