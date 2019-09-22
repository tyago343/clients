import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers/index.js';
import thunkMiddleware from 'redux-thunk';

const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(reducers, composer(applyMiddleware(thunkMiddleware)));