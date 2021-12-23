import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import logger from 'react-logger';
import App from './component/App';
import { configureStire } from './store/index';

const store = configureStire();
console.log('store =', store.getState());
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
