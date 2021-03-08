import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import reducer from './store/reducers';

ReactDOM.render(
  <Provider store={reducer}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
