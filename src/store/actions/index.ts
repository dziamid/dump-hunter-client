import { createActionCreator } from 'react-redux-typescript/jsnext/v2/create-action-creator';
import { CurrencyChange } from '../../types';

export const setTickerCurrencyChanges = createActionCreator(
  'SET_TICKER_CURRENCY_CHANGES',
  (currencyChanges: CurrencyChange[]) => currencyChanges,
);
