import React, { Component } from 'react';
import './HomeScreen.scss';
import Heading from '../../components/Heading/Heading';
import MyFace from '../../images/MyFace.jpg';


class HomeScreen extends Component {
  render() {
    return (
      <div className="Home">
          <div className="MyFace">
            <img src={MyFace} alt="My Face" />
          </div>
        <Heading/>
         
          <div className="Info">
          <section>
            <h3>What I have to Offer</h3>
            <p>Will create scalable web & mobile apps for your business</p>
          </section>
          </div>
        </div>
    );
  }
}

export default HomeScreen;
