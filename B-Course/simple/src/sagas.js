import { call, takeEvery, put } from 'redux-saga/effects';
import { GET_USERS_FETCH, GET_USERS_SUCCESS } from './actions';
import api from './apis';

function* workGetUsersFetch() {
    const users = yield call(api.usersFetch);
    yield put({ type: GET_USERS_SUCCESS, users });
}

export default function* rootSaga() {
    yield takeEvery(GET_USERS_FETCH, workGetUsersFetch);
}
