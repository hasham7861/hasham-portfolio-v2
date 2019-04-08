import React, { Component } from 'react';
import {
  BrowserView,
  MobileView
} from "react-device-detect";
import './Home.scss';
import { connect } from 'react-redux';
import Heading from './components/Heading/Heading';
import Portfolio from './containers/Portfolio/Portfolio';
import HomeNavBar from './components/HomeNavBar/HomeNavBar';

class Home extends Component {
  headingRef = React.createRef();

  contactButtonRef = React.createRef();

  render() {
    return (
      <div className="Home">

        <BrowserView viewClassName="DesktopViewHome">
          <div className="DesktopScreenSizeError"><h2>Inorder to use this app, you must increase the width of this browser.</h2></div>
          <div className="DesktopScreen">
            <Heading classNames={this.props.headerClassNames}/>
          </div>
        </BrowserView>
         
        <MobileView>
          <div style={this.props.headerStyle} ref={this.headingRef}>
            <Heading classNames={this.props.headerClassNames} />
          </div>
          <div ref={this.contactButtonRef}>
            <HomeNavBar />
          </div>
          <Portfolio
            headingRef={this.headingRef}
            contactButtonRef={this.contactButtonRef}
          />
        </MobileView>
        
      </div>
    );
  }
}

const mapStateToProps = state => ({
  headerStyle: state.headerStateChange.headerStyle,
  headerClassNames: state.headerStateChange.classNames,
});

export default connect(mapStateToProps)(Home);
