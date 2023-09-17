import { applyMiddleware, combineReducers, createStore } from 'redux';
import { counterReducer as countReducer } from './countReducer';
import { todosReducer } from './todosReducer';

const rootReducer = combineReducers({
  count: countReducer,
  todos: todosReducer
});

const loggingMiddleware = (store) => (next) => (action) => {
  console.log("log middleware");
  console.log("store", store);
  console.log("action", action);
  next(action);
}

const middleware = (store) => (next) => (action) => {
  next(action);
}

export const store = createStore(rootReducer, applyMiddleware(loggingMiddleware, middleware));
