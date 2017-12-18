import { SagaIterator } from 'redux-saga';
import { call } from 'redux-saga/effects';
import { fetchTickerCurrencyChanges } from '../../api';

export function* rootSaga(): SagaIterator {
  const currencyChanges = yield call(fetchTickerCurrencyChanges);
  console.log('currencyChanges', currencyChanges);
}
