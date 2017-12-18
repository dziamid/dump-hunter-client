import { combineReducers, Reducer } from 'redux';
import { prop } from 'ramda';

import { StoreState } from '../types';
import { home } from './home';

const reducersMap = {
  home,
};

export const rootReducer: Reducer<StoreState> = combineReducers(reducersMap);
