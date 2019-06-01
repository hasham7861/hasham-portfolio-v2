import React from 'react';
import './Heading.scss';

const Heading = props => (
  <div ref={props.reference} className={props.classNames}>
    <h1>Hasham</h1>
    <h1>Alam</h1>
    <h3>&lt; Aspiring Web Developer /&gt;</h3>
  </div>
);

export default Heading;
