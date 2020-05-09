import * as R from 'ramda';

export const getStatePart = R.prop('chart');

export const getIsLoading = R.compose(
  R.prop('isLoading'),
  getStatePart
);

export const getError = R.compose(
  R.prop('error'),
  getStatePart
);

export const getChart = R.compose(
  R.prop('chart'),
  getStatePart
);
