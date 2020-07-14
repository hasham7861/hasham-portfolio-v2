import React from 'react';
import { NavLink } from 'react-router-dom';
import './SideNavbar.scss';
import HomeIcon from '../../images/HomeIcon.svg';
import AboutIcon from '../../images/AboutIcon.svg';
import PortfolioIcon from '../../images/PortfolioIcon.svg';


const SideNavbar = () => (
  <div className="SideNavbar">
    <NavLink to="/" activeClassName="navlinkSelected" exact>
      <img src={HomeIcon} alt="Home Icon" />
      <p>Home</p>
    </NavLink>
    <NavLink to="/about" activeClassName="navlinkSelected" exact>
      <img src={AboutIcon} alt="About Icon" />
      <p>About</p>
    </NavLink>
    <NavLink to="/portfolio" activeClassName="navlinkSelected" exact>
      <img src={PortfolioIcon} alt="Portfolio Icon" />
      <p>Portfolio</p>
    </NavLink>
  </div>
);

export default SideNavbar;
