import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice';
import todosReducer from './todosSlice';
import mySaga from './sagas';
import createSagaMiddleware from 'redux-saga';

const loggingMiddleware = (store) => (next) => (action) => {
  console.log("logging middleware");
  console.log("action", action);
  next(action);
}

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    count: counterReducer,
    todos: todosReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }).concat(loggingMiddleware, sagaMiddleware),
});

sagaMiddleware.run(mySaga);
