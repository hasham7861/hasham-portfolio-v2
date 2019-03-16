import {	CHANGE_PORTFOLIO_STATE } from'../constants/actionTypes';

/*Intial States*/
const intialPortfolioState = {
  portfolioHeaderStyle: {
    lineHeight: '0.2em',
    cursor: 'grab',
    position: 'absolute',
    bottom: '2em',
    left:'0',
    right:'0'
  },
  portfolioHeaderState: "Close",
  contactButtonStyleClasses: "Contact",
  swipeArrow: "▲",
  swipeText: "Swipe Up To Expand Portfolio"
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
          position:action.portfolioState.portfolioHeaderStyle.position
        },
        portfolioHeaderState: action.portfolioState.portfolioHeaderState,
        contactButtonStyleClasses: action.portfolioState.contactButtonStyleClasses,
        swipeArrow: action.portfolioState.swipeArrow,
        swipeText: action.portfolioState.swipeText
      })
		default:
			return state
	}
};

export default portfolioMove;
