import React from 'react';
import { NavLink } from 'react-router-dom';
import './ProjectNavbar.scss';
import HomeIcon from '../../images/HomeIcon.svg';

const ProjectNavbar = (props) => {
    return (
        <div className="ProjectNavbar">
           <NavLink to="/">
                    <img src={HomeIcon} alt="HomeIconImage"></img>
            </NavLink>
        </div>
    );
}

export default ProjectNavbar;
