import React from 'react';
import { NavLink } from 'react-router-dom';
import './PagesNavbar.scss';
import HomeIcon from '../../images/HomeIcon.svg';
import AboutIcon from '../../images/AboutIcon.svg';
import ContactIcon from '../../images/ContactIcon.svg';
import NavbarSeprator from '../../images/NavbarSeprator.svg';

const PagesNavbar = () => (
  <div className="PagesNavbar">
    <NavLink to="/">
      <img src={HomeIcon} alt="Home Icon" />
    </NavLink>
    <img src={NavbarSeprator} alt="alt seprator" />
    <NavLink to="/about" activeClassName="NavLinkActive">
      <img src={AboutIcon} alt="About Icon" />
    </NavLink>
    <img src={NavbarSeprator} alt="alt seprator" />
    <NavLink to="/contact" activeClassName="NavLinkActive">
      <img src={ContactIcon} alt="Contact Icon" />
    </NavLink>
  </div>
);

export default PagesNavbar;
