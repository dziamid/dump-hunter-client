import { assoc, lensProp } from 'ramda';
const {createReducer} = require('redux-ramda');
import { CurrencyChange } from '../../types';
import { setTickerCurrencyChanges, setTickerRows } from '../actions';
import { prop } from 'ramda';
import { TickerRow } from '../../components/Ticker/TickerRow';
import { StoreState } from '../types';

export interface HomeState {
  currencyChanges: CurrencyChange[];
  tickerRows: TickerRow[];
}

const initialState: HomeState = {
  currencyChanges: [],
  tickerRows: [],
};

export const home = createReducer(initialState, [
  [setTickerCurrencyChanges.type, assoc('currencyChanges')],
  [setTickerRows.type, assoc('tickerRows')],
]);

export const getHomeCurrencyChanges = (state: StoreState) => state.home.currencyChanges;
export const getHomeTickerRows = (state: StoreState) => state.home.tickerRows;
