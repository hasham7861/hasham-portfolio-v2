import { EXPAND_PORTFOLIO_DIV } from '../constants/actionTypes';

const intialProjectsDivSite = {
  style: {
    height: '70px',
    overflow: 'hidden'
  }
};

 const projects = (state = intialProjectsDivSite , action) => {
  switch(action.type){
    case EXPAND_PORTFOLIO_DIV:
    return Object.assign({}, state, {
        style:{
          height: action.portfolioState.style.height,
          overflow: 'hidden'
        }
      })
    default:
      return state;
  }
}

export default projects;
