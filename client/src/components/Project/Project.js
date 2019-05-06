import React from 'react';
import './Project.scss';

const Project = props => (
  <div className="Project">
    <h4>{props.name} </h4>
    <p>{props.about}</p>
  </div>
);

export default Project;
