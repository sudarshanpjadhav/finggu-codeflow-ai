import React from 'react';
import ReactDOM from 'react-dom';
import { FingguApp } from './FingguApp';
import { fingguStore } from './store/fingguStore';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={fingguStore}>
    <FingguApp />
  </Provider>,
  document.getElementById('root')
);