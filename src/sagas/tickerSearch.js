import { TICKER_SEARCH } from 'actions/ActionTypes';
import { takeEvery, select, put } from 'redux-saga/effects';
import { fetchChart } from 'actions/chart';
import { getSearch } from 'selectors/tickerSearch';

export function* requestTickerSaga() {
  const ticker = yield select(getSearch);
  yield put(fetchChart(ticker));
}

export const tickerSearchSagas = [
  takeEvery(TICKER_SEARCH.REQUEST, requestTickerSaga)
];
