import { assoc, lensProp } from 'ramda';
const {createReducer} = require('redux-ramda');
import { CurrencyChange } from '../../types';
import { setTickerCurrencyChanges } from '../actions';
import { prop } from 'ramda';

export interface HomeState {
  currencyChanges: CurrencyChange[];
}

const initialState: HomeState = {
  currencyChanges: [],
};

export const home = createReducer(initialState, [
  [setTickerCurrencyChanges.type, assoc('currencyChanges')]
]);
