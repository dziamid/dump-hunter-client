import { SagaIterator } from 'redux-saga';
import { call } from 'redux-saga/effects';

export function* rootSaga(): SagaIterator {
  yield call(() => console.log('Hello'));
}
