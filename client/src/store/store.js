import { createStore } from 'redux';
import WebApp from './reducers/combineReducers';

// Takes care of the dataflow from actions dispatched to store to reducers
const store = createStore(WebApp);

export default store;
