import {	PORTFOLIO_PEEK, PORTFOLIO_EXPAND, PORTFOLIO_CLOSE} from'../constants/actionTypes';

/*Intial States*/
const portfolioDivOffset = 500;


/*Creating Reducers*/
const portfolio = (state = portfolioDivOffset, action) => {
 	switch(action.type){
		case PORTFOLIO_PEEK:
      // Update the dive to peek a little
			return state - action.portfolioOffsetValue;
		case PORTFOLIO_EXPAND:
			return state - action.portfolioOffsetValue;
		case PORTFOLIO_CLOSE:
			return portfolioDivOffset;
		default:
			return state
	}
};

export default portfolio;
