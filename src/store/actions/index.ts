import { createActionCreator } from 'react-redux-typescript/jsnext/v2/create-action-creator';
import { CurrencyChange } from '../../types';
import { TickerRow } from '../../components/Ticker/TickerRow';

export const setTickerCurrencyChanges = createActionCreator(
  'SET_TICKER_CURRENCY_CHANGES',
  (currencyChanges: CurrencyChange[]) => currencyChanges,
);

export const setTickerRows = createActionCreator(
  'SET_TICKER_ROWS',
  (rows: TickerRow[]) => rows,
);