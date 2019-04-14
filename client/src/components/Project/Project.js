import React from 'react';
import './Project.scss';

const Project = props => (
  <div className="Project">
    <h4>Project {props.id} </h4>
    <p>About: This project makes people's life easier</p>
  </div>
);

export default Project;
