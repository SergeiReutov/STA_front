import { all } from 'redux-saga/effects';
import { watchExampleAdd } from './example';

export default function* rootSaga() {
  yield all([
    watchExampleAdd()
  ]);
}
