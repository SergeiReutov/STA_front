import { CHART_DATA } from 'actions/ActionTypes';

export function fetchChartData(ticker = '') {
  return {
    type: CHART_DATA.FETCH.REQUEST,
    ticker
  };
}

export function setChartData(chartData) {
  return {
    type: CHART_DATA.FETCH.SUCCESS,
    chartData
  };
}

export function setError(error) {
  return {
    type: CHART_DATA.FETCH.ERROR,
    error
  };
}

export function clearError() {
  return {
    type: CHART_DATA.CLEAR_ERROR
  };
}
