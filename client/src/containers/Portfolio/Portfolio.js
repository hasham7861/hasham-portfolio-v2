import React, { Component } from 'react';
import { connect } from "react-redux";
import {  changePortfolioState, changeHeadingSize } from "../../store/actions/actions";

class Portfolio extends Component {


  portfolioHeader = React.createRef();
  portfolioHeaderMoveDistance = 0;
  portfolioHeaderMaxMoveDistance = 1;
  // The following touch events only work with TOUCH BASED DEVICES
  handleTouchStart = (touchStartEvent) => {
    this.portfolioHeaderMaxMoveDistance = Math.floor((this.portfolioHeader.current.offsetTop - this.props.contactButtonRef.current.offsetTop) /3)  ;
  }
  handleTouchEnd = () => {}

  handleTouchMove = (touchMoveEvent) => {




    console.log("---/Debug/---");
    // console.log("HeaderOffset: "+this.props.headingRef.current.offsetTop);
    // console.log("ContactButtonOffset: "+this.props.contactButtonRef.current.offsetTop);
    // console.log("PortfolioTextOffset: "+this.portfolioHeader.current.offsetTop);
    console.log("portfolioHeaderMoveDistance: " + this.portfolioHeaderMoveDistance);
    console.log("portfolioHeaderMaxMoveDistance: "+ this.portfolioHeaderMaxMoveDistance);
    console.log("PortfolioHeaderState: " + this.props.portfolioHeaderState);




    // Updating UI for MainHeader on swipe up
    // let headingRef = {...this.props.headingRef};
    // let headerMoveDistance = headingRef.current.clientHeight - portfolioHeaderTouchMoveY;
    // console.log("offset: " + portfolioHeaderDefaultOffset + " ref: " + headingRef.current.clientHeight);
    // console.log("moveDistance: ", this.portfolioHeaderMoveDistance +  " maxDistance: " + portfolioHeaderMaxMoveDistance);
    // console.log();


    // New headerstate for redux store
    // let headerState =  {
    //    headerStyle:{
    //      paddingBottom: 0 + 'px',
    //      paddingTop: - headerMoveDistance + 'px',
    //    }, headerState:'BIG'
    //  }

    // Change the state, only if the header is within this range of y value
    if(this.portfolioHeaderMoveDistance <= this.portfolioHeaderMaxMoveDistance &&
      this.portfolioHeaderMoveDistance >= 0
      && this.props.portfolioHeaderState !== 'Expand' && this.portfolioHeader.current.offsetTop >= touchMoveEvent.changedTouches[0].clientY){

        // SwipeUpToExpandPortfolio Text dyanmic default header position
        this.portfolioHeaderMoveDistance =  Math.floor(this.portfolioHeader.current.offsetTop - touchMoveEvent.changedTouches[0].clientY);

        // New portfoilio state for redux store
        let newPortfolioMoveState = {
          portfolioHeaderStyle:{
              bottom: this.portfolioHeaderMoveDistance + "px"
          },
          portfolioHeaderState: 'Close'
        }

        // Once I have reached the maxoffset, set the portfolio to leave as expanded
        if(this.portfolioHeaderMoveDistance >= this.portfolioHeaderMaxMoveDistance){
          newPortfolioMoveState.portfolioHeaderState = 'Expand';
        }
         this.props.portfolioMove(newPortfolioMoveState);
         // something wrong with headerStateChange
         // this.props.headerStateChange(headerState);
    }
  }

  render() {
    return (
    <div ref={this.portfolioHeader} className="portfolio" style={this.props.portfolioHeaderStyle}
      onTouchStart={touchStartEvent => this.handleTouchStart(touchStartEvent)}
      onTouchMove={touchMoveEvent => this.handleTouchMove(touchMoveEvent)}
      onTouchEnd={()=>this.handleTouchEnd()}>
      <h2 className="upArrow">▲</h2>
      <h4>Swipe Up To Expand Portfolio</h4>
    </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    portfolioHeaderStyle: state.portfolioMove.portfolioHeaderStyle,
    portfolioHeaderState: state.portfolioMove.portfolioHeaderState,
    headerStyle: state.headerStateChange.headerStyle,
    headerState: state.headerStateChange.headerState
  };
}

const mapDispatchToProps = dispatch => {
  return{
    portfolioMove: (newHeaderState) => dispatch(changePortfolioState(newHeaderState)),
    headerStateChange: (newHeaderState) => dispatch(changeHeadingSize(newHeaderState))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Portfolio);
