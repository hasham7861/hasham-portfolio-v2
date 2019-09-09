import React, { Component } from 'react';
import './AboutScreen.scss';
import MyFace from '../../images/MyFace.jpg';
import JSIcon from '../../images/SkillsSetIcons/JSIcon.svg';
import ReactIcon from '../../images/SkillsSetIcons/ReactIcon.svg';
import ReduxIcon from '../../images/SkillsSetIcons/ReduxIcon.svg';
import MySqlIcon from '../../images/SkillsSetIcons/MySqlIcon.svg';
import NodeIcon from '../../images/SkillsSetIcons/NodeIcon.svg';
import AdobeXDIcon from '../../images/SkillsSetIcons/AdobeXDIcon.svg';
import MyResumePdf from '../../documents/Hasham_Alam_Resume.pdf';

class AboutScreen extends Component {
  render() {
    return (
      <>
        <div className="AboutScreen">
          <div className="MyFace">
            <img src={MyFace} alt="My Face" />
            <h1>HASHAM ALAM</h1>
          </div>
         
          <div className="Info">
          <section>
            <h3>Area of Expertise</h3>
            <p>Full Stack Developer</p>
          </section>
          <section>
            <h3>What I have to Offer</h3>
            <p>Design and create Web and Mobile Apps for your buisness</p>
          </section>
          <section>
            <h3>Few of my Skills</h3>
            <div className="SkillsIconBar">
              <img src={JSIcon} alt="JavaScript Icon" />
              <img src={ReactIcon} alt="React Icon" />
              <img src={ReduxIcon} alt="Redux Icon" />
              <img src={MySqlIcon} alt="MySql Icon" />
              <img src={NodeIcon} alt="Node Icon" />
              <img src={AdobeXDIcon} alt="AdobeXd Icon" />
            </div>
          </section>
          <section>
            <a href={MyResumePdf} target="_blank" rel="noopener noreferrer">
              View Resume
            </a>
          </section>
          </div>
        </div>
        
      </>
    );
  }
}

export default AboutScreen;
