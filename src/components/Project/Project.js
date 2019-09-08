import React from 'react';
import './Project.scss';
import image1 from '../../images/RandomIcons/colony.svg';
import image2 from '../../images/RandomIcons/hand.svg';
import image3 from '../../images/RandomIcons/layers.svg';
import image4 from '../../images/RandomIcons/network.svg';
import image5 from '../../images/RandomIcons/project-management.svg';
import image6 from '../../images/RandomIcons/start-up.svg';


function getBlockComponent(){
  let rand = Math.floor(Math.random() * 6);
  switch (rand) {
    case 1:
      return <img src={image1} alt="project icon"></img>;
    case 2:
      return <img src={image2} alt="project icon"></img>;
    case 3:
      return <img src={image3} alt="project icon"></img>;
    case 4:
      return <img src={image4} alt="project icon"></img>;
    case 5:
      return <img src={image5} alt="project icon"></img>;
    case 6:
      return <img src={image6} alt="project icon"></img>;
    default:
      return <img src={image3} alt="project icon"></img>;

  }
}
const Project = props => (
  <div className="Project">
     {getBlockComponent()}
    <h4>{props.name} </h4>   
    <p>{props.about}</p>
  </div>
);

export default Project;
