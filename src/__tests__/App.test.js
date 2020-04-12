import React from 'react';
import { render } from 'utils/testUtils';
import App from '../App';

test('renders application without crash', () => {
  const { getByTestId } = render(<App />);
  const mainApp = getByTestId('mainApp');
  expect(mainApp).toBeInTheDocument();
});
