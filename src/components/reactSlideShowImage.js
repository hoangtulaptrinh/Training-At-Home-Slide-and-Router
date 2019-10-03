import React from 'react';
import { Slide } from 'react-slideshow-image';
import './reactSlideShowImage.css'
const slideImages = [
  'https://picsum.photos/800/500',
  'https://picsum.photos/800/500',
  'https://picsum.photos/800/500'
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide {...properties}>
        <div className="each-slide">
          <div className="each-slide111" style={{ 'backgroundImage': `url(${slideImages[0]})` }}>
            <span>Slide 111</span>
            <button>{`${slideImages[0]}`}</button>
          </div>
        </div>
        <div className="each-slide">
          <div className="each-slide111" style={{ 'backgroundImage': `url(${slideImages[1]})` }}>
            <span>Slide 222</span>
            <button>{`${slideImages[1]}`}</button>
          </div>
        </div>
        <div className="each-slide">
          <div className="each-slide111" style={{ 'backgroundImage': `url(${slideImages[2]})` }}>
            <span>Slide 333</span>
            <button>{`${slideImages[2]}`}</button>
          </div>
        </div>
      </Slide>
    </div>
  )
}

export default Slideshow;