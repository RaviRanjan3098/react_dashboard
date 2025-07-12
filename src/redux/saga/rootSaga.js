
import { all } from 'redux-saga/effects';
import fileSaga from './upload';


export default function* rootSaga() {
  yield all([fileSaga()]);
}
