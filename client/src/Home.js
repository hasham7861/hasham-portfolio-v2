import React, { Component } from 'react';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from 'react-device-detect';
import './Home.scss';
import { connect } from 'react-redux';
import Heading from './components/Heading/Heading';
import Portfolio from './containers/Portfolio/Portfolio';
import HomeNavBar from './components/HomeNavBar/HomeNavBar';
import SideNavbar from './components/SideNavbar/SideNavbar';

class Home extends Component {
  headingRef = React.createRef();

  contactButtonRef = React.createRef();

  render() {
    return (
      <div className={`Home ${isBrowser ? 'DesktopScreen' : ''}`}>
        <BrowserView>
          <SideNavbar className="SideBar" />
        </BrowserView>
        <div
          className={isBrowser ? 'Content' : ''}
          // style={this.props.headerStyle}
          ref={this.headingRef}
        >
          <Heading classNames={this.props.headerClassNames} />
        </div>
        <MobileView>
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
