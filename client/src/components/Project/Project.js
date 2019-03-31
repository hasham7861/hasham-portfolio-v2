import React from 'react';
import './Project.css';

const Project = (props) => {

    return (
        <div className="Project">
            <h4>Project {props.id} </h4>
            <p>
                About: 
                This project makes people's life easier
            </p>
        </div>
    )
}

export default Project;