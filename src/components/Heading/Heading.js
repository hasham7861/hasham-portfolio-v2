import React from 'react';
import './Heading.scss';

const Heading = props => (
  <div ref={props.reference} className="heading">
    <h1>Hasham</h1>
    <h1>Alam</h1>
    <h3>Software Engineer</h3>
  </div>
);

export default Heading;
