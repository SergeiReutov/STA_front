import { CHART_DATA } from 'actions/ActionTypes';

export const initialState = {
  chartData: {},
  isLoading: false,
  error: null
};

export default function chartData(state = initialState, action) {
  switch (action.type) {
    case CHART_DATA.FETCH.REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case CHART_DATA.FETCH.SUCCESS:
      return {
        ...state,
        chartData: action.chartData,
        isLoading: false
      };
    case CHART_DATA.FETCH.ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    case CHART_DATA.CLEAR_ERROR:
      return {
        ...state,
        error: initialState.error
      };
    default:
      return state;
  }
}
