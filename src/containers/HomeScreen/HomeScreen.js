import React, { Component } from 'react';
import './HomeScreen.scss';
import Heading from '../../components/Heading/Heading';
import Layers from '../../images/RandomIcons/layers.svg';

class HomeScreen extends Component {
  render() {
    return (
      <div className="Home">
        <img className="HomeIcon" src={Layers} alt="splash page icon"></img>
        <Heading/>
      </div>
    );
  }
}

export default HomeScreen;
