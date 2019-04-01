import React from 'react';
import { NavLink } from 'react-router-dom';
import './ProjectNavbar.scss';

const ProjectNavbar = (props) => {
    return (
        <div className="ProjectNavbar">
           <NavLink to="/">Home</NavLink> 
           <NavLink to={"/project/"+props.projectRoute}
            activeStyle={{
                backgroundColor:'#301e1e',
            }
            }
            >{props.projectRoute}</NavLink> 
        </div>
    );
}

export default ProjectNavbar;
