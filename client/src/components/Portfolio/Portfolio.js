import React from 'react';
import './Portfolio.css';

// The following touch events only work with touch devices
const handleTouchStart = (touchStartEvent) => {
  console.log("Touch Start on peek portfolio");
}

const handleTouchMove = (touchMoveEvent) => {
  console.log("Touch Move on peek portfolio");
}

const handleTouchEnd = () => {
  console.log("Touch End on peek portfolio");
}

const Portfolio = (props) => {
  return (
    <div className="portfolio"
      onTouchStart={touchStartEvent => handleTouchStart(touchStartEvent)}
      onTouchMove={touchMoveEvent => handleTouchMove(touchMoveEvent)}
      onTouchEnd={()=>handleTouchEnd()}>
      <h2 className="upArrow">▲</h2>
      <h4>Swipe Up To Peek Portfolio</h4>
    </div>
)};

export default Portfolio;
