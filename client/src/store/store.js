import { createStore } from 'redux';
import WebApp from './reducers/combineReducers';

// Takes care of the dataflow from actions dispatched to store to reducers
const store = createStore(
  WebApp, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
