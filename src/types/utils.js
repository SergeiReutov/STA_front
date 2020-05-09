import * as R from 'ramda';

export const ArrayWithLengthAndType = (length, type) => (props, propName, componentName) => {
  if (
    !Array.isArray(props[propName])
    || props[propName].length !== length
    || props[propName].every(R.is(type))
  ) {
    return new Error('Invalid prop `' + propName + '` supplied to `' + componentName + '`.');
  }
};
