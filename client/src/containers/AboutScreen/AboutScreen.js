import React, { Component } from 'react';
import './AboutScreen.scss';
import PagesNavbar from '../../components/PagesNavbar/PagesNavbar';
import MyFace from '../../images/MyFace.jpg';
import JSIcon from '../../images/SkillsSetIcons/JSIcon.svg';
import ReactIcon from '../../images/SkillsSetIcons/ReactIcon.svg';
import ReduxIcon from '../../images/SkillsSetIcons/ReduxIcon.svg';
import MySqlIcon from '../../images/SkillsSetIcons/MySqlIcon.svg';
import NodeIcon from '../../images/SkillsSetIcons/NodeIcon.svg';
import AdobeXDIcon from '../../images/SkillsSetIcons/AdobeXDIcon.svg';
import MyResumePdf from '../../documents/Hasham_Alam_Resume.pdf';

class AboutScreen extends Component{

    render(){
        return (
            <>
            <PagesNavbar />
            <div className="AboutScreen">
                <div className="MyFace">
                    <img src={MyFace} alt="My Face"></img>
                </div>
                <section>
                    <h3>Area of Expertise</h3>
                    <p>Full Stack Web Developer</p>
                </section>
                <section>
                    <h3>What I have to Offer</h3>
                    <p>Design and Create Full Web Apps for your buisness</p>
                </section>
                <section>
                    <h3>My Skills</h3>
                    <div className="SkillsIconBar">
                        <img src={JSIcon} alt="JavaScript Icon"></img>
                        <img src={ReactIcon} alt="React Icon"></img>
                        <img src={ReduxIcon} alt="Redux Icon"></img>
                        <img src={MySqlIcon} alt="MySql Icon"></img>
                        <img src={NodeIcon} alt="Node Icon"></img>
                        <img src={AdobeXDIcon} alt="AdobeXd Icon"></img>
                    </div>
                </section>
                <section>
                    <a href={MyResumePdf} target="_blank">View Resume</a>
                </section>
            </div>
            </>

        );

    }
}

export default AboutScreen;