import * as R from 'ramda';

export const getStatePart = R.prop('chartData');

export const getIsLoading = R.compose(
  R.prop('isLoading'),
  getStatePart
);

export const getError = R.compose(
  R.prop('error'),
  getStatePart
);

export const getChartData = R.compose(
  R.prop('chartData'),
  getStatePart
);
