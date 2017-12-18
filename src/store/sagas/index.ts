import { delay, SagaIterator } from 'redux-saga';
import { call, fork, put, select } from 'redux-saga/effects';
import { fetchTickerCurrencyChanges } from '../../api';
import { setTickerCurrencyChanges, setTickerRows } from '../actions';
import { getHomeCurrencyChanges, getHomeTickerRows } from '../reducers/home';
import { createTickerRow, getTickerRows } from '../../components/Ticker/utils';
import { createArrayLooper } from '../../utils/array';
import { CELLS, ROWS } from '../../components/Ticker';

const loopArray = createArrayLooper();

export function* rootSaga(): SagaIterator {
  const currencyChanges = yield call(fetchTickerCurrencyChanges);
  yield put(setTickerCurrencyChanges(currencyChanges));
  yield fork(updateCurrencyChanges);
  const tickerRows = getTickerRows(loopArray(CELLS * ROWS, currencyChanges));
  yield put(setTickerRows(tickerRows));
  yield fork(updateTickerRows);
}

function* updateTickerRows(): SagaIterator {
  while (true) {
    yield call(delay, 4000);
    const currencyChanges = yield select(getHomeCurrencyChanges);
    const tickerRows = yield select(getHomeTickerRows);
    const nextRow = createTickerRow(loopArray(CELLS, currencyChanges));
    const nextTickerRows = tickerRows.slice(1).concat([nextRow]);
    yield put(setTickerRows(nextTickerRows));
  }
}

function* updateCurrencyChanges(): SagaIterator {
  while (true) {
    yield call(delay, 10000);
    const currencyChanges = yield call(fetchTickerCurrencyChanges);
    yield put(setTickerCurrencyChanges(currencyChanges));
  }
}