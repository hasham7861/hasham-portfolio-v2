import {
  SAVE_EMAIL,
  SAVE_SUBJECT,
  SAVE_MESSAGE,
  CLEAR_EMAIL_FORM,
} from '../constants/actionTypes';
/* Intial States */
const intialState = {
  email: '',
  subject: '',
  message: '',
};

const emailMessage = (state = intialState, action) => {
  switch (action.type) {
    case SAVE_EMAIL:
      return Object.assign({}, state, {
        email: action.email,
        subject: state.subject,
        message: state.message,
      });
    case SAVE_SUBJECT:
      return Object.assign({}, state, {
        email: state.email,
        subject: action.subject,
        message: state.message,
      });
    case SAVE_MESSAGE:
      return Object.assign({}, state, {
        email: state.email,
        subject: state.subject,
        message: action.message,
      });
    case CLEAR_EMAIL_FORM:
      return intialState;
    default:
      return state;
  }
};

export default emailMessage;
