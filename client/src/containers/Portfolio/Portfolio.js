import React, { Component } from 'react';
import { connect } from "react-redux";
import {  changePortfolioState } from "../../store/actions/actions";

class Portfolio extends Component {

  portfolioHeader = React.createRef();
  // need to keep the state of styles in redux too inorder to update the bottom value
  portfolioHeaderStyle = {};

  // The following touch events only work with TOUCH BASED DEVICES
  handleTouchStart = (touchStartEvent) => {
    // let portfolioHeaderOffsetY=touchStartEvent.changedTouches[0].clientY;
    console.log("Touch Start on peek portfolio");
    // portfolioHeaderStyle.marginTop = portfolioHeaderOffsetY;
    // console.log(touchStartEvent.changedTouches[0].clientY);

    //Set the intial state of portfolio header to following
    let portfolioHeaderDefaultOffset = this.portfolioHeader.current.offsetTop;

    // then change the top property for portfolioHeader based on touchMoveEvent
    console.log(portfolioHeaderDefaultOffset);
  }
  handleTouchMove = (touchMoveEvent) => {
    // let portfolioHeaderOffsetY=touchMoveEvent.changedTouches[0].clientY;
    console.log("Touch Move on peek portfolio");
    let portfolioHeaderDefaultOffset = this.portfolioHeader.current.offsetTop; // default header position
    let portfolioHeaderTouchMoveY = touchMoveEvent.changedTouches[0].clientY; // touch moving position
    let HeaderMoveDistance = portfolioHeaderDefaultOffset - portfolioHeaderTouchMoveY // distance between default and touch value;

    // this.props.portfolioMove(portfolioHeaderDefaultOffset - touchMoveEvent.changedTouches[0].clientY); // update the touches
    // console.log(this.props.portfolioDivOffset);
    let newPortfolioMoveState = {
      bottom: HeaderMoveDistance + "px"
    }
    if(HeaderMoveDistance <= 70 && HeaderMoveDistance >= 0){

        this.props.portfolioMove(newPortfolioMoveState);
    }


    console.log(HeaderMoveDistance); // grabs the y touches
    // console.log(portfolioHeader.current);
  }

  handleTouchEnd = () => {
    console.log("Touch End on peek portfolio");
  }

  componentDidMount() {
    // this.portfolioHeaderStyle = this.props.portfolioState;
    // console.log(this.props.headerStyle);
  }

  render() {


    return (
    <div ref={this.portfolioHeader} className="portfolio" style={this.props.headerStyle}
      onTouchStart={touchStartEvent => this.handleTouchStart(touchStartEvent)}
      onTouchMove={touchMoveEvent => this.handleTouchMove(touchMoveEvent)}
      onTouchEnd={()=>this.handleTouchEnd()}>
      <h2 className="upArrow">▲</h2>
      <h4>Swipe Up To Peek Portfolio</h4>
    </div>
  );
  }
}

const mapStateToProps = state => {
  return{
    headerStyle: state.portfolioMove.headerStyle,
    headerState: state.portfolioMove.headerState
  };
}

const mapDispatchToProps = dispatch => {
  return{
    portfolioMove: (newHeaderState) => dispatch(changePortfolioState(newHeaderState))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Portfolio);
