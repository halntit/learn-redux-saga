import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import counterReducer from './counterSlice';
import todosReducer from './todosSlice';

const loggingMiddleware = (store) => (next) => (action) => {
  console.log("log middleware");
  console.log("store", store);
  console.log("action", action);
  next(action);
}

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['todos'],
}

const rootReducer = combineReducers({
  count: counterReducer,
  todos: todosReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }).concat(loggingMiddleware),
});

export const persistor = persistStore(store);
