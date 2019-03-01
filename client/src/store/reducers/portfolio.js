import {	CHANGE_PORTFOLIO_STATE } from'../constants/actionTypes';

/*Intial States*/
const intialPortfolioState = {
  headerStyle: {
    marginTop: '100px',
    lineHeight: '0.2em',
    cursor: 'grab',
    position: 'relative',
    bottom: '0'
  },
  headerState: "Close"
}

/*Creating Reducers*/
const portfolioMove = (state = intialPortfolioState, action) => {
 	switch(action.type){
		case CHANGE_PORTFOLIO_STATE:
      // Update the dive to peek a little
			return Object.assign({}, state, {
        headerStyle:{
          ...intialPortfolioState.headerStyle,
          bottom: action.portfolioState.headerStyle.bottom,
        },
        headerState: action.portfolioState.headerState
      })
		default:
			return state
	}
};

export default portfolioMove;
