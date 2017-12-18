import { delay, SagaIterator } from 'redux-saga';
import { call, fork, put, select } from 'redux-saga/effects';
import { fetchTickerCurrencyChanges } from '../../api';
import { setTickerCurrencyChanges, setTickerRows } from '../actions';
import { getHomeCurrencyChanges, getHomeTickerRows } from '../reducers/home';
import { CELLS_IN_ROW, createTickerRow, getTickerRows } from '../../components/Ticker/utils';
import { createArrayLooper } from '../../utils/array';

export function* rootSaga(): SagaIterator {
  const currencyChanges = yield call(fetchTickerCurrencyChanges);
  yield put(setTickerCurrencyChanges(currencyChanges));
  const tickerRows = getTickerRows(currencyChanges);
  yield put(setTickerRows(tickerRows));
  yield fork(updateTickerRows);
}

function* updateTickerRows(): SagaIterator {
  const loopArray = createArrayLooper();

  while (true) {
    yield call(delay, 4000);
    const currencyChanges = yield select(getHomeCurrencyChanges);
    const tickerRows = yield select(getHomeTickerRows);
    const nextRow = createTickerRow(loopArray(CELLS_IN_ROW, currencyChanges));
    const nextTickerRows = [nextRow, ...tickerRows.slice(0, tickerRows.length - 1)];
    yield put(setTickerRows(nextTickerRows));
  }
}