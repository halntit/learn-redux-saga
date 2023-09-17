import { combineReducers, createStore } from 'redux';
import { counterReducer as countReducer } from './countReducer';
import { todosReducer } from './todosReducer';

const rootReducer = combineReducers({
  count: countReducer,
  todos: todosReducer
})

export const store = createStore(rootReducer);
