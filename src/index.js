import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import AppContainer from './container/AppContainer';
import configureStore from './configureStore';

const store = configureStore();

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('app')
);