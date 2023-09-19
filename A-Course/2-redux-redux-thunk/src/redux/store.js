import { applyMiddleware, combineReducers, createStore } from 'redux';
import { counterReducer as countReducer } from './countReducer';
import { todosReducer } from './todosReducer';
import thunk from 'redux-thunk';

const loggingMiddleware = (store) => (next) => (action) => {
  console.log("log middleware");
  console.log("store", store);
  console.log("action", action);
  next(action);
}

const rootReducer = combineReducers({
  count: countReducer,
  todos: todosReducer
});

export const store = createStore(rootReducer, applyMiddleware(loggingMiddleware, thunk));
