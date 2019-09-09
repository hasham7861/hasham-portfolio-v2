import React, { Component } from 'react';
import './HomeScreen.scss';
import { connect } from 'react-redux';
import Heading from '../../components/Heading/Heading';
import Layers from '../../images/RandomIcons/layers.svg';

class HomeScreen extends Component {
  headingRef = React.createRef();
  contactButtonRef = React.createRef();

  render() {
    return (
      <div className="Home">
        <img className="HomeIcon" src={Layers} alt="home img"></img>
        <Heading/>
          <div ref={this.contactButtonRef}>
          </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  headerStyle: state.headerStateChange.headerStyle,
  headerClassNames: state.headerStateChange.classNames,
});

export default connect(mapStateToProps)(HomeScreen);
