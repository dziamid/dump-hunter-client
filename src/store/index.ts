import * as Redux from 'redux';
import { applyMiddleware, Middleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import { createLogger } from 'redux-logger';

import { PreloadedState } from './types';
import { rootSaga } from './sagas';
import { isDebugMode } from '../utils/local-storage';
import { rootReducer } from './reducers';

declare const window: Window & { store: any };

export const createStore = (context: object, preloadedState: PreloadedState) => {

  const composeEnhancers = composeWithDevTools({
    // options like actionSanitizer, stateSanitizer
    // actionsBlacklist: [UPDATE_NOW]
  });

  const sagaMiddleware = createSagaMiddleware({
    context,
    // sagaMonitor: monitor,
  });

  const middleware: Middleware[] = [
    sagaMiddleware,
    browserLogger,
  ];

  const storeEnhancer = composeEnhancers(
    applyMiddleware(...middleware),
    // other store enhancers if any
  );

  const store = Redux.createStore<PreloadedState>(rootReducer, preloadedState, storeEnhancer);

  window.store = store;

  const rootTask = sagaMiddleware.run(rootSaga);

  rootTask.done.catch(err => {
    console.log('Saga error');
    console.error(err.stack || err);
  });

  return {store};
};

const browserLogger = () => {
  const loggerOptions = {
    // predicate: (getState, {type}) => type !== UPDATE_NOW,
    collapsed: true,
  };

  const loggerMiddleware = createLogger(loggerOptions);

  return isDebugMode() ? loggerMiddleware : (state) => state;
};
