import { CurrencyChange } from '../../types';
import { TickerRow } from '../../components/Ticker/TickerRow';
import { createActionCreator } from 'react-redux-typescript/es5-commonjs/v2/create-action-creator';

export const setTickerCurrencyChanges = createActionCreator(
  'SET_TICKER_CURRENCY_CHANGES',
  (currencyChanges: CurrencyChange[]) => currencyChanges,
);

export const setTickerRows = createActionCreator(
  'SET_TICKER_ROWS',
  (rows: TickerRow[]) => rows,
);
