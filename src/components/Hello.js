import React, { useState } from 'react';
import ResizeObserver from 'react-resize-observer';

const Hello = () => {
  const [gradient, setGradient] = useState(false);
  const [width, reset] = useState(window.innerWidth);

  console.log(width);
  return (
    <div className="hello" id="hello">
      <ResizeObserver
        onResize={rect => {
          reset(window.innerWidth);
        }}
      />
      <h2
        className={`heading show-on-scroll ${
          width < 750 ? 'visually-hidden' : ''
        }`}
      >
        Hello{' '}
        <span role="img" aria-label="waving hands">
          &#9995;
        </span>
      </h2>
      <div className={`text-effect ${gradient ? 'text-gradient' : ''}`}>
        As a self-taught developer with a keen interest in web technology and
        with web design experience, I love this work and would love to further
        my career as a Front-end/UI Designer. Even though I have a rather short
        experience, I am a well-versed problem-solver when it comes to front-end
        development and web design. Please drop me a line!
      </div>
    </div>
  );
};

export default Hello;
