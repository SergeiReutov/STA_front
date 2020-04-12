import { TICKER_SEARCH } from 'actions/ActionTypes';

export const initialState = {
  search: '',
  isLoading: false
};

export default function tickerSearch(state = initialState, action) {
  switch (action.type) {
    case TICKER_SEARCH.SET:
      return {
        ...state,
        search: action.search
      };
    case TICKER_SEARCH.CLEAR:
      return {
        ...state,
        search: initialState.search
      };
    case TICKER_SEARCH.REQUEST:
      return {
        ...state,
        isLoading: true
      };
    default:
      return state;
  }
}
