import { combineReducers, Reducer } from 'redux';

import { StoreState } from '../types';
import { home } from './home';

const reducersMap = {
  home,
};

export const rootReducer: Reducer<StoreState> = combineReducers(reducersMap);
