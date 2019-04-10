import React from 'react';
import { NavLink } from 'react-router-dom';
import './SideNavbar.scss';
import HomeIcon from '../../images/HomeIcon.svg';
import AboutIcon from '../../images/AboutIcon.svg';
import ContactIcon from '../../images/ContactIcon.svg';
import PortfolioIcon from '../../images/PortfolioIcon.svg';

const SideNavbar = () => (
  <div className="SideNavbar">
    <NavLink to="/" activeClassName="navlinkSelected">
      <img src={HomeIcon} alt="Home Icon" />
      <p>Home</p>
    </NavLink>
    <NavLink to="/about" activeClassName="navlinkSelected">
      <img src={AboutIcon} alt="About Icon" />
      <p>About</p>
    </NavLink>
    <NavLink to="/portfolio" activeClassName="navlinkSelected">
      <img src={PortfolioIcon} alt="Portfolio Icon" />
      <p>Portfolio</p>
    </NavLink>
    <NavLink to="/contact" activeClassName="navlinkSelected">
      <img src={ContactIcon} alt="Contact Icon" /> <p>Contact</p>
    </NavLink>
  </div>
);

export default SideNavbar;
