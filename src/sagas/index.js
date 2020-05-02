import { all } from 'redux-saga/effects';
import { tickerSearchSagas } from './tickerSearch';
import { chartDataSagas } from './chartData';

export default function* rootSaga() {
  yield all([
    ...tickerSearchSagas,
    ...chartDataSagas
  ]);
}
