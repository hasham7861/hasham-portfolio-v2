import {	CHANGE_PORTFOLIO_STATE } from'../constants/actionTypes';

/*Intial States*/
const intialPortfolioState = {
  portfolioHeaderStyle: {
    lineHeight: '0.2em',
    cursor: 'grab',
    position: 'relative',
    bottom: '0'
  },
  portfolioHeaderState: "Close"
}

/*Creating Reducers*/
const portfolioMove = (state = intialPortfolioState, action) => {
 	switch(action.type){
		case CHANGE_PORTFOLIO_STATE:
      // Update the dive to peek a little
			return Object.assign({}, state, {
        portfolioHeaderStyle:{
          ...intialPortfolioState.portfolioHeaderStyle,
          bottom: action.portfolioState.portfolioHeaderStyle.bottom,
          backgroundColor: 'coral'
        },
        portfolioHeaderState: action.portfolioState.portfolioHeaderState
      })
		default:
			return state
	}
};

export default portfolioMove;
