import { CHART } from 'actions/ActionTypes';

export const initialState = {
  chart: {},
  isLoading: false,
  error: null
};

export default function chart(state = initialState, action) {
  switch (action.type) {
    case CHART.FETCH.REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case CHART.FETCH.SUCCESS:
      return {
        ...state,
        chart: action.chart,
        isLoading: false
      };
    case CHART.FETCH.ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    case CHART.CLEAR_ERROR:
      return {
        ...state,
        error: initialState.error
      };
    default:
      return state;
  }
}
