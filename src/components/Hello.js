import React, { useState } from 'react';
import ResizeObserver from 'react-resize-observer';

const Hello = () => {
  const [width, reset] = useState(window.innerWidth);

  return (
    <div className="hello" id="hello">
      <ResizeObserver
        onResize={(rect) => {
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
      <div className={`text-effect`}>
        My motto : He can do it, She can do it, why not me?
        <br />
        Even though I have a rather limited experience as a developer, I am
        enthusiastic about learning new web technologies and love the
        problem-solving in terms of UI and UX. Please drop me a line!
      </div>
    </div>
  );
};

export default Hello;
