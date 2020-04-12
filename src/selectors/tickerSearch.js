import * as R from 'ramda';

export const getStatePart = R.prop('tickerSearch');

export const getIsLoading = R.compose(
  R.prop('isLoading'),
  getStatePart
);

export const getSearch = R.compose(
  R.prop('search'),
  getStatePart
);
