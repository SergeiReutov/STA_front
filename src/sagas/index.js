import { all } from 'redux-saga/effects';
import { tickerSearchSagas } from './tickerSearch';

export default function* rootSaga() {
  yield all([
    ...tickerSearchSagas
  ]);
}
