import { createStore } from 'redux';
import { counterReducer as countReducer } from './countReducer';

export const store = createStore(countReducer);
