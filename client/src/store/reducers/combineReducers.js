import { combineReducers } from 'redux';
import emailMessage from './emailMessage';
import portfolioMove from './portfolio';

export default combineReducers({
  portfolioMove,
  emailMessage,
});
