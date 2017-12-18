import * as React from 'react';
import { createStore } from './store';
import { Provider } from 'react-redux';
import { TickerHome } from './pages/home/TickerHome';
const preloadedState = {};
const context = {};
const {store} = createStore(context, preloadedState);

export const App = () => {
  return (
    <Provider store={store}>
      <TickerHome />
    </Provider>
  );
};

export default App;
