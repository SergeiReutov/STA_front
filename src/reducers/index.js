import { combineReducers } from 'redux';

import { default as chart } from './chart';
import { default as tickerSearch } from './tickerSearch';

export default combineReducers({
  chart,
  tickerSearch
});
