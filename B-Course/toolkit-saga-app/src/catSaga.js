import { call, put, takeEvery } from 'redux-saga/effects';
import { getCatsSuccess } from './catState';

function* workGetCatsFetch() {
  console.log("fetch cats");
  const cats = yield call(() => fetch('https://api.thecatapi.com/v1/breeds'));
  let formattedCats = yield cats.json();
  formattedCats = formattedCats.slice(0, 10);
  yield put(getCatsSuccess(formattedCats));
}

function* catSaga() {
  yield takeEvery('cats/getCatsFetch', workGetCatsFetch);
}

export default catSaga;