import { SagaIterator } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { fetchTickerCurrencyChanges } from '../../api';
import { setTickerCurrencyChanges } from '../actions';

export function* rootSaga(): SagaIterator {
  const currencyChanges = yield call(fetchTickerCurrencyChanges);
  yield put(setTickerCurrencyChanges(currencyChanges));
}
