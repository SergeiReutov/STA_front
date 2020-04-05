import { takeEvery } from 'redux-saga/effects';

function* exampleSaga() {
  yield console.log('EXAMPLE');
}

export function* watchExampleAdd() {
  yield takeEvery('ADD', exampleSaga);
}
