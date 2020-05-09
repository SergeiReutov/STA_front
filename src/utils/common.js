import * as R from 'ramda';

export const voidFn = () => {};

export const isNot = fn => R.compose(R.not, fn);
