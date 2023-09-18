import { increaseCount, decreaseCount } from "./counterSlice";
import { takeEvery, put, debounce, takeLatest, delay } from "redux-saga/effects";
import Types from "./types";

function* increaseCountSaga(action) {
    yield delay(1000);
    yield put(increaseCount(action.payload));
}

function* decreaseCountSaga(action) {
    yield delay(1000);
    yield put(decreaseCount(action.payload));
}

function* addTodoSaga(action) {
    yield delay(1000);
    // yield put(decreaseCount(action.payload));
    // async (id) => {
        // const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
        // return res
    // }
}

export default function*() {
    yield takeLatest(Types.INCREASE_COUNT_SAGA, increaseCountSaga);
    yield takeLatest(Types.DECREASE_COUNT_SAGA, decreaseCountSaga);
    yield takeLatest(Types.ADD_TODO_SAGA, addTodoSaga);
}
