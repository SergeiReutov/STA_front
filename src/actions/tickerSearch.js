import { TICKER_SEARCH } from 'actions/ActionTypes';

export function setSearch(search) {
  return {
    type: TICKER_SEARCH.SET,
    search
  };
}

export function clearSearch() {
  return {
    type: TICKER_SEARCH.CLEAR
  };
}

export function requestTicker() {
  return {
    type: TICKER_SEARCH.REQUEST
  };
}
