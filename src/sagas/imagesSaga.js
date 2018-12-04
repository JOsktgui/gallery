import { takeEvery, select, call, put } from 'redux-saga/effects';
import { IMAGES } from '../constans';
import { fetchImages } from '../api';
import { setImages, setError } from '../actions';

const getPage = state => {
  console.log('state', state);
  return state.nextPage
};

function* handleImagesLoad() {
  try {
    const page = yield select(getPage);
    const images = yield call(fetchImages, page);
    yield put(setImages(images))
  } catch (error) {
    yield put(setError(error.toString()));
  }
}

function* watchImagesLoad() {
  yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}

export default watchImagesLoad;