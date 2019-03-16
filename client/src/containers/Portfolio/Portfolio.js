import React, { Component } from 'react';
import { connect } from "react-redux";
import {  changePortfolioState, changeHeadingSize } from "../../store/actions/actions";

class Portfolio extends Component {


  portfolioHeader = React.createRef();
  portfolioHeaderMoveDistance = 0;
  portfolioHeaderMaxMoveDistance = 1;
  // The following touch events only work with TOUCH BASED DEVICES
  handleTouchStart = (touchStartEvent) => {
    // Only declare the distance once on start from expand portfolio text to contact button
    this.portfolioHeaderMaxMoveDistance = Math.floor((this.portfolioHeader.current.offsetTop - this.props.contactButtonRef.current.offsetTop)/2);
  }
  handleTouchEnd = () => {}

  handleTouchMove = (touchMoveEvent) => {

    console.log("---/Debug/---");
    // console.log(this.props.headingRef.current.children[0].childNodes);
    // console.log("HeaderOffset: "+this.props.headingRef.current.offsetTop);
    // console.log("ContactButtonOffset: "+this.props.contactButtonRef.current.offsetTop);
    // console.log("PortfolioTextOffset: "+this.portfolioHeader.current.offsetTop);
    // console.log("portfolioHeaderMoveDistance: " + this.portfolioHeaderMoveDistance);
    // console.log("portfolioHeaderMaxMoveDistance: "+ this.portfolioHeaderMaxMoveDistance);
    // console.log("PortfolioHeaderState: " + this.props.portfolioHeaderState);


    // Change the state, only if the header is within this range of y value
    if(this.portfolioHeaderMoveDistance <= this.portfolioHeaderMaxMoveDistance &&
      this.portfolioHeaderMoveDistance >= 0  &&
      this.props.portfolioHeaderState !== 'Expand' &&
      this.portfolioHeader.current.offsetTop >= touchMoveEvent.changedTouches[0].clientY){

        // SwipeUpToExpandPortfolio Text dyanmic default header position
        this.portfolioHeaderMoveDistance =  Math.floor(this.portfolioHeader.current.offsetTop - touchMoveEvent.changedTouches[0].clientY);

        // New portfoilioText state for redux store
        let newPortfolioMoveState = {
          portfolioHeaderStyle:{
              bottom: this.portfolioHeaderMoveDistance + "px",
              position: 'absolute'
          },
          portfolioHeaderState: 'Close',
          contactButtonStyleClasses: 'Contact',
          swipeArrow: '▲',
          swipeText: 'Swipe Up To Expand Portfolio'
        }

        // New Heading state for redux store
        let newHeaderState =  {
           headerStyle:{
             paddingTop: 0 + 'px',
           }, headerState:'BIG'
         }

        // Once I have reached the maxoffset, set the portfolio to leave as expanded
        if(this.portfolioHeaderMoveDistance >= this.portfolioHeaderMaxMoveDistance){

          // Update the heading state once portfolio expands
          newHeaderState.classNames += ' expandPortfolio';
          this.props.headerStateChange(newHeaderState);

          // Updated State once the portfolio expands
          newPortfolioMoveState = {
            portfolioHeaderStyle:{
              ...newPortfolioMoveState.portfolioHeaderStyle,
              position:'relative',
              bottom: 0
            },
              portfolioHeaderState: 'Expand',
              contactButtonStyleClasses: newPortfolioMoveState.contactButtonStyleClasses += ' expandPortfolioContactButton',
              swipeArrow: "▼",
              swipeText: 'Swipe Down To Collapse Portfolio'
            }

        }
         this.props.portfolioMove(newPortfolioMoveState);
    }
  }

  render() {
    return (
    <div ref={this.portfolioHeader} className="portfolio" style={this.props.portfolioHeaderStyle}
      onTouchStart={touchStartEvent => this.handleTouchStart(touchStartEvent)}
      onTouchMove={touchMoveEvent => this.handleTouchMove(touchMoveEvent)}
      onTouchEnd={()=>this.handleTouchEnd()}>
      <h2 className="upArrow">{this.props.swipeArrow}</h2>
      <h4>{this.props.swipeText}</h4>
    </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    portfolioHeaderStyle: state.portfolioMove.portfolioHeaderStyle,
    portfolioHeaderState: state.portfolioMove.portfolioHeaderState,
    headerStyle: state.headerStateChange.headerStyle,
    headerState: state.headerStateChange.headerState,
    swipeArrow: state.portfolioMove.swipeArrow,
    swipeText: state.portfolioMove.swipeText
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
