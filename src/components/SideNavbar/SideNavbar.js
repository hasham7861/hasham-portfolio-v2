import React from 'react';
import { NavLink } from 'react-router-dom';
import './SideNavbar.scss';
import { Home, BookOpen, Code } from 'react-feather';

const SideNavbar = () => (
  <div className="SideNavbar">
    <NavLink to="/" activeClassName="navlinkSelected" exact>
      <Home size={35}/>
      <p>Home</p>
    </NavLink>
    <NavLink to="/blogs" activeClassName="navlinkSelected" exact>
      <BookOpen size={35}/>
      <p>Blogs</p>

    </NavLink>
    <NavLink to="/portfolio" activeClassName="navlinkSelected" exact>
      <Code size={35}/>
      <p>Portfolio</p>
    </NavLink>
  </div>
);

export default SideNavbar;
