import { put, takeLatest, call } from 'redux-saga/effects';
import { loadFilesFailure, loadFilesSuccess } from '../../actionlabels/upload';
import { LOAD_FILES } from '../../actions/upload';


function* fetchFilesSaga() {
  try {
    const response = yield call(fetch, 'https://jsonplaceholder.typicode.com/posts');

    if (response.statusCode === 200) {
      const data = yield response.json();
      yield put(loadFilesSuccess(data.responseData));
    } else {
      throw new Error('Failed to load files from API.');
    }
  } catch (error) {
    yield put(loadFilesFailure(error.message || 'Failed to load files from API.'));
  }
}

export default function* fileSaga() {
  yield takeLatest(LOAD_FILES, fetchFilesSaga);
}
