import React, { Component } from 'react';
// import { MobileView } from 'react-device-detect';
import './HomeScreen.scss';
import { connect } from 'react-redux';
import Heading from '../../components/Heading/Heading';
// import Portfolio from '../Portfolio/Portfolio';
// import HomeNavBar from '../../components/HomeNavBar/HomeNavBar';
import Layers from '../../images/RandomIcons/layers.svg';

class HomeScreen extends Component {
  headingRef = React.createRef();

  contactButtonRef = React.createRef();

  render() {
    return (
      <div className="Home">
        <img className="HomeIcon" src={Layers} alt="home img"></img>
        <Heading/>
        {/* <MobileView> */}
          <div ref={this.contactButtonRef}>
            {/* <HomeNavBar /> */}
          </div>
          {/* <Portfolio
            headingRef={this.headingRef}
            contactButtonRef={this.contactButtonRef}
          /> */}
        {/* </MobileView> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  headerStyle: state.headerStateChange.headerStyle,
  headerClassNames: state.headerStateChange.classNames,
});

export default connect(mapStateToProps)(HomeScreen);
