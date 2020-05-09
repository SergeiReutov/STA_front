import { CHART } from 'actions/ActionTypes';

export function fetchChart(ticker = '') {
  return {
    type: CHART.FETCH.REQUEST,
    ticker
  };
}

export function setChart(chart) {
  return {
    type: CHART.FETCH.SUCCESS,
    chart
  };
}

export function setError(error) {
  return {
    type: CHART.FETCH.ERROR,
    error
  };
}

export function clearError() {
  return {
    type: CHART.CLEAR_ERROR
  };
}
