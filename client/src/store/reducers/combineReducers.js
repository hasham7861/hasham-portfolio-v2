import { combineReducers } from 'redux';
import emailMessage from './emailMessage';
import portfolio from './portfolio';

export default combineReducers({
  portfolio,
  emailMessage,
});
