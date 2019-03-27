import React, { Component } from 'react';
import { connect } from "react-redux";
import {  changePortfolioState, changeHeadingSize, closePortfolio, expandPortfolioDiv, resetHeadingSize } from "../../store/actions/actions";
import Projects from '../Projects/Projects'

class Portfolio extends Component {

  portfolioHeader = React.createRef();
  portfolioHeaderMoveDistance = 0;
  portfolioHeaderMaxMoveDistance = 1;
  swipeDownAllowed = false;
  swipeUpAllowed = true;

  // The following touch events only work with TOUCH BASED DEVICES
  handleTouchStart = (touchStartEvent) => {
    // Only declare the distance once on start from expand portfolio text to contact button
    this.portfolioHeaderMaxMoveDistance = Math.floor((this.portfolioHeader.current.offsetTop - this.props.contactButtonRef.current.offsetTop)/2);
    
    //Allowed to only swipe down once the portfolio is expanded
    if(this.props.portfolioHeaderState === "Expand"){
      this.swipeDownAllowed = true;
      this.swipeUpAllowed = false;
    }
    else{
      this.swipeDownAllowed = false;
      this.swipeUpAllowed = true;
    }
 
  }
  handleTouchEnd = () => {
    if(this.props.portfolioHeaderState === "MidExpand"){
      this.props.portfolioClose();
      this.props.projects({
        style:{height: "40px"}
      });
    }
  }

  runDebug = () => {
    console.log("---/Debug/---");
    // console.log(this.props.headingRef.current.children[0].childNodes);
    // console.log("HeaderOffset: "+this.props.headingRef.current.offsetTop);
    // console.log("ContactButtonOffset: "+this.props.contactButtonRef.current.offsetTop);
    console.log("PortfolioTextOffsetTop: "+this.portfolioHeader.current.offsetTop);
    console.log("PortfolioTextOffsetBottom: " + (this.portfolioHeader.current.offsetTop - this.portfolioHeader.current.clientHeight));
    // console.log("portfolioHeaderMoveDistance: " + this.portfolioHeaderMoveDistance);
    // console.log("portfolioHeaderMaxMoveDistance: "+ this.portfolioHeaderMaxMoveDistance);
    console.log("PortfolioHeaderState: " + this.props.portfolioHeaderState);
  }

  getNewPortfolioState = () => {
    return {
      portfolioHeaderStyle:{
          bottom: this.portfolioHeaderMoveDistance + "px",
          position: 'absolute'
      },
      portfolioHeaderState: 'MidExpand',
      contactButtonStyleClasses: 'Contact',
      swipeArrow: '▲',
      swipeText: 'Swipe Up To Expand Portfolio'
    }
  }

  getNewPortfolioStateAfterExpand = (newPortfolioMoveState) => {
    return {
      portfolioHeaderStyle:{
        ...newPortfolioMoveState.portfolioHeaderStyle,
        position:'absolute',
        bottom: 0
      },
        portfolioHeaderState: 'Expand',
        contactButtonStyleClasses: newPortfolioMoveState.contactButtonStyleClasses += ' expandPortfolioContactButton',
        swipeArrow: "▼",
        swipeText: 'Swipe Down To Collapse Portfolio'
      }

  }

  getNewHeaderState = () => {
    return {
       headerStyle:{
         paddingTop: 0 + 'px',
       }, headerState:'BIG'
     }
  }

  handleTouchMove = (touchMoveEvent) => {

    // this.runDebug();
 
    // console.log(shouldSwipeUp);
    // SwipeUP: Change the state, only if the header is within this range of y value
    if(this.swipeUpAllowed &&
      this.props.portfolioHeaderState !== 'Expand' && this.portfolioHeaderMoveDistance >= 0 &&
            this.portfolioHeader.current.offsetTop >= touchMoveEvent.changedTouches[0].clientY){
              
         // SwipeUpToExpandPortfolio Text dyanmic default header position
        this.portfolioHeaderMoveDistance =  Math.floor(this.portfolioHeader.current.offsetTop - touchMoveEvent.changedTouches[0].clientY);

        // New portfoilioText state for redux store
        let newPortfolioMoveState = this.getNewPortfolioState();
        // New Heading state for redux store
        let newHeaderState =  this.getNewHeaderState();
        let newProjectsState = {
          style: {
            height: this.props.projectsDivHeight,
          }
        }
        // SWIPEUP: Once I have reached the maxoffset, set the portfolio to leave as expanded
        let shouldExpand = this.portfolioHeaderMoveDistance >= this.portfolioHeaderMaxMoveDistance;

        if(shouldExpand){
          // Update the heading state once portfolio expands
          newHeaderState.classNames += ' expandPortfolio';
          this.props.headerStateChange(newHeaderState);

          // Updated State once the portfolio expands
          newPortfolioMoveState = this.getNewPortfolioStateAfterExpand(newPortfolioMoveState);

          let portfolioTextOffsetBottom = this.portfolioHeader.current.offsetTop - this.portfolioHeader.current.clientHeight;
          let projectsDivHeight = this.props.projectsDivHeight.split("px")[0] ;
          newProjectsState.style.height = parseInt(portfolioTextOffsetBottom - projectsDivHeight) + "px";
      
        }

        //   // Setting the height of the projects div
        // console.log('Swipe Down');
        this.props.projects(newProjectsState);
        this.props.portfolioMove(newPortfolioMoveState);
        
    
    } else if (this.swipeDownAllowed){
      // if()
      //TODO: Work on SwipeDown
    
    
        // console.log(touchMoveEvent.detail);
        // touchMoveEvent.defaultPrevent = "set";

      this.props.portfolioClose();
      this.props.headerStateReset();
      this.props.projects({
        style:{height: "40px"}
      });   
      
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
      {this.props.portfolioHeaderState === 'Expand' ?
        <Projects />
        : ""
      }
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
    swipeText: state.portfolioMove.swipeText,
    projectsDivHeight: state.projects.style.height, // changing the size of the projectsDiv
  };
}

const mapDispatchToProps = dispatch => {
  return{
    portfolioMove: (newHeaderState) => dispatch(changePortfolioState(newHeaderState)),
    portfolioClose:  () => dispatch(closePortfolio()),
    headerStateChange: (newHeaderState) => dispatch(changeHeadingSize(newHeaderState)),
    headerStateReset: () => dispatch(resetHeadingSize()),
    projects: (newProjectsState) => dispatch(expandPortfolioDiv(newProjectsState)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Portfolio);
