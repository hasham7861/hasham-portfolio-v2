import { EXPAND_PORTFOLIO_DIV} from '../constants/actionTypes';

const intialProjectsDivSite = {
  style: {
    height: '70px',
  },
};

const projects = (state = intialProjectsDivSite, action) => {
  switch (action.type) {
    case EXPAND_PORTFOLIO_DIV:
      return Object.assign({}, state, {
        style: {
          height: action.portfolioState.style.height,
        },
        projectData:state.portfolioState.projectData
      });

    default:
      return state;
  }
};

export default projects;
