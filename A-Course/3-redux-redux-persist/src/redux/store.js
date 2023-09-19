import { applyMiddleware, combineReducers, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { counterReducer as countReducer } from './countReducer';
import { todosReducer } from './todosReducer';
import thunk from 'redux-thunk';

const loggingMiddleware = (store) => (next) => (action) => {
  console.log("log middleware");
  console.log("store", store);
  console.log("action", action);
  next(action);
}

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['count'],
  blacklist: ['todos'],
};

const rootReducer = combineReducers({
  count: countReducer,
  todos: todosReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer, applyMiddleware(loggingMiddleware, thunk));
export const persistor = persistStore(store);
