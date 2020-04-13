import { TICKER_SEARCH } from 'actions/ActionTypes';
import { takeEvery, select, put } from 'redux-saga/effects';
import { fetchChartData } from 'actions/chartData';
import { getSearch } from 'selectors/tickerSearch';

export function* requestTickerSaga() {
  const ticker = yield select(getSearch);
  yield put(fetchChartData(ticker));
}

export const tickerSearchSagas = [
  takeEvery(TICKER_SEARCH.REQUEST, requestTickerSaga)
];
