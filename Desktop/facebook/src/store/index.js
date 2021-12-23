import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'react-logger';
import reducer from '../reducer/index';

let store;

export function configureStire() {
  store = createStore(reducer, applyMiddleware(thunk));
  return store;
}
