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
        My initiative and ownership is great and I can work independently with
        occasional supports from senior developers/designers as my experience in
        certain area is limited. At the same time, I always study and keep
        learning to improve myself as a UX developer. I believe my disadvantage
        is only reflected from the lack of in-house experience, not my
        capabilities as a UX developer.
      </div>
    </div>
  );
};

export default Hello;
