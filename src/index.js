/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
require('./favicon.ico');
import './styles/styles.scss';

import App from './components/App.jsx';

const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('app')
);
