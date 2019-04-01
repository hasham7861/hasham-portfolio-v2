import React from 'react';
import { NavLink } from 'react-router-dom';
import './ProjectNavbar.scss';

const ProjectNavbar = (props) => {
    return (
        <div className="ProjectNavbar">
           <NavLink className="NavLink" to="/">Home</NavLink> 
           <NavLink 
                className="NavLink"to={"/project/"+props.projectRoute} 
                activeClassName="NavLinkActive">
            {props.projectRoute}</NavLink> 
        </div>
    );
}

export default ProjectNavbar;
