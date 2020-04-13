import { combineReducers } from 'redux';

import { default as chartData } from './chartData';
import { default as tickerSearch } from './tickerSearch';

export default combineReducers({
  chartData,
  tickerSearch
});
