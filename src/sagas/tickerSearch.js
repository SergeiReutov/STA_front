import { TICKER_SEARCH } from 'actions/ActionTypes';
import { takeEvery } from 'redux-saga/effects';

export function* requestTicker() {
  yield console.log('DING');
}

export const tickerSearchSagas = [
  takeEvery(TICKER_SEARCH.REQUEST, requestTicker)
];
