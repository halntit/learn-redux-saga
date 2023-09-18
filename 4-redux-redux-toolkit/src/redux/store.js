import { configureStore } from "@reduxjs/toolkit";

import counterReducer from './counterSlice';
import todosReducer from './todosSlice';

const loggingMiddleware = (store) => (next) => (action) => {
  console.log("log middleware");
  console.log("store", store);
  console.log("action", action);
  next(action);
}

export const store = configureStore({
  reducer: {
    count: counterReducer,
    todos: todosReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }).concat(loggingMiddleware),
});
