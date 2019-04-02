import React from 'react';
import { Link } from 'react-router-dom';
import './HomeNavBar.scss';
import AboutIcon from '../../images/AboutIcon.svg';
import ContactIcon from '../../images/ContactIcon.svg';
import NavbarSeprator from '../../images/NavbarSeprator.svg';

const HomeNavBar = () => {
    return (
        <div className="HomeNavbar">
            <Link to="/About">
             <img src={AboutIcon} alt="About Icon"/>
            </Link>
            <img src={NavbarSeprator} alt="Navbar Seprator"/>
            <Link to="/Contact">
                <img src={ContactIcon} alt="Contact Icon"/>
            </Link>
        </div>
    )
}

export default HomeNavBar;