import { combineReducers } from 'redux';
import emailMessage from './emailMessage';
import portfolioMove from './portfolio';
import headerStateChange from './heading.js';
import projects from './projects.js';

export default combineReducers({
  portfolioMove,
  emailMessage,
  headerStateChange,
  projects
});
