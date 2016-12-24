import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import STORE from './store';
import Reducer from './reducers';
import './index.css';

const store = createStore(Reducer, STORE);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
