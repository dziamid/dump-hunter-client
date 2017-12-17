import { CurrencyChange } from '../../types';
const {createReducer} = require('redux-ramda');

export interface HomeState {
  currencyChanges: CurrencyChange[];
}

const initialState: HomeState = {
  currencyChanges: [],
};

export const home = createReducer(initialState, [
]);
