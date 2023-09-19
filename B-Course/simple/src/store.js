import { myFirstReducer } from './reducer';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    myFirstReducer
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

export const store = createStore(rootReducer, applyMiddleware(loggingMiddleware, middleware, sagaMiddleware));
sagaMiddleware.run(mySaga);
