import { increaseCount, decreaseCount } from "./counterSlice";
import { deleteTodo, addTodo } from "./todosSlice";
import { put, call, takeLatest, takeEvery } from "redux-saga/effects";
import Types from "./types";
import { fetchTodo } from "./actions";

function* increaseCountSaga(action) {
    yield put(increaseCount(action.payload));
}

function* decreaseCountSaga(action) {
    yield put(decreaseCount(action.payload));
}

function* addTodoSaga(action) {
    const data = yield call(fetchTodo, action.payload);
    yield put(addTodo(data.title));
}

function* deleteTodoSaga(action) {
    yield put(deleteTodo(action.payload));
}

function* mySaga() {
    yield takeEvery(Types.INCREASE_COUNT_SAGA, increaseCountSaga);
    yield takeEvery(Types.DECREASE_COUNT_SAGA, decreaseCountSaga);
    yield takeLatest(Types.ADD_TODO_SAGA, addTodoSaga);
    yield takeLatest(Types.DELETE_TODO_SAGA, deleteTodoSaga);
}

export default mySaga;
