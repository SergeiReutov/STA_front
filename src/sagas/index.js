import { all } from 'redux-saga/effects';
import { tickerSearchSagas } from './tickerSearch';
import { chartSagas } from './chart';

export default function* rootSaga() {
  yield all([
    ...tickerSearchSagas,
    ...chartSagas
  ]);
}
