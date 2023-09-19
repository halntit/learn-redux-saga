import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import createSageMiddleware from 'redux-saga';
import { configureStore } from "@reduxjs/toolkit";
import catsReducer from './catState';
import catSaga from './catSaga';

const saga = createSageMiddleware();
const store = configureStore({
  reducer: {
    cats: catsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }).concat(saga)
});
saga.run(catSaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
