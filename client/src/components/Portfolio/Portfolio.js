import React from 'react';
// import './Portfolio.css';

const portfolioHeader = React.createRef();
const portfolioHeaderStyle = {
  marginTop: '100px',
  lineHeight: '0.2em',
  cursor: 'grab'
};
// The following touch events only work with touch devices
const handleTouchStart = (touchStartEvent) => {
  console.log("Touch Start on peek portfolio");
}

const handleTouchMove = (touchMoveEvent) => {
  const portfolioHeaderOffsetY=touchMoveEvent.changedTouches[0].clientY;
  portfolioHeaderStyle.marginTop = portfolioHeaderOffsetY;
  console.log("Touch Move on peek portfolio");

  // console.log(touchMoveEvent.changedTouches[0].clientY);
  // console.log(portfolioHeader.current);
}

const handleTouchEnd = () => {
  console.log("Touch End on peek portfolio");
}

const Portfolio = (props) => {
  return (
    <div ref={portfolioHeader} className="portfolio" style={portfolioHeaderStyle}
      onTouchStart={touchStartEvent => handleTouchStart(touchStartEvent)}
      onTouchMove={touchMoveEvent => handleTouchMove(touchMoveEvent)}
      onTouchEnd={()=>handleTouchEnd()}>
      <h2 className="upArrow">▲</h2>
      <h4>Swipe Up To Peek Portfolio</h4>
    </div>
)};

export default Portfolio;
