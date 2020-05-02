import { CHART_DATA } from 'actions/ActionTypes';
import { takeEvery, call, put } from 'redux-saga/effects';
import { GET } from 'utils/api';
import { setChartData, setError } from 'actions/chartData';

export function* fetchChartDataSaga({ ticker }) {
  try {
    const chartData = yield call(GET, `/chartData/${ticker}`);
    yield put(setChartData(chartData));
  } catch (e) {
    yield put(setError(e.message));
  }
}

export const chartDataSagas = [
  takeEvery(CHART_DATA.FETCH.REQUEST, fetchChartDataSaga)
];
