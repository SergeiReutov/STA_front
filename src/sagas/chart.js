import { CHART } from 'actions/ActionTypes';
import { takeEvery, call, put } from 'redux-saga/effects';
import { GET } from 'utils/api';
import { setChart, setError } from 'actions/chart';

export function* fetchChartSaga({ ticker }) {
  try {
    const chart = yield call(GET, `/chart/${ticker}`);
    yield put(setChart(chart));
  } catch (e) {
    yield put(setError(e.message));
  }
}

export const chartSagas = [
  takeEvery(CHART.FETCH.REQUEST, fetchChartSaga)
];
