import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Transition, animated as ani } from 'react-spring/renderprops';
import blobs from 'blobs';

const options = {
  complexity: 0.7,
  contrast: 0.5,
  guides: true,
  size: 600,
  color: '#FFB6C1',
  stroke: {
    width: 0
  }
};

const IntroCentering = () => {
  const [index, set] = useState(0);

  const introText = [
    style => (
      <ani.a
        style={{
          ...style
        }}
        className="intro-title"
      >
        Front-End Developer
      </ani.a>
    ),
    style => (
      <ani.a
        style={{
          ...style
        }}
        className="intro-title"
      >
        UI Developer
      </ani.a>
    ),
    style => (
      <ani.a
        style={{
          ...style
        }}
        className="intro-title"
      >
        Multi-Disciplinary Designer
      </ani.a>
    ),
    style => (
      <ani.a
        style={{
          ...style
        }}
        className="intro-title"
      >
        Mother
      </ani.a>
    ),
    style => (
      <ani.a
        style={{
          ...style
        }}
        className="intro-title"
      >
        Wife
      </ani.a>
    ),
    style => (
      <ani.a
        style={{
          ...style
        }}
        className="intro-title"
      >
        Global Citizen
      </ani.a>
    ),
    style => (
      <ani.a
        style={{
          ...style
        }}
        className="intro-title"
      >
        Human-being
      </ani.a>
    ),
    style => (
      <ani.a
        style={{
          ...style
        }}
        className="intro-title"
      >
        and many more...
      </ani.a>
    )
  ];

  const BlobBG = ({ svg, fill }) => (
    <svg viewBox="0 0 600 600" width="530" height="530">
      <defs>
        <path
          id="blob-colour"
          d="M453.2 114.1c28.8 27.6 24.5 91.5 35.1 152.6 10.7 61.1 36.3 119.4 21.4 162.9-14.9 43.5-70.4 72-128 91.5-57.5 19.5-117.2 29.8-163.9 10.3-46.7-19.4-80.6-68.7-104.3-119.2-23.7-50.5-37.3-102.3-29.6-151.1 7.7-48.8 36.7-94.6 76.3-120.2 39.5-25.7 89.7-31.3 145.8-38.5 56.1-7.1 118.3-15.8 147.2 11.7z"
          fill="#FFB6C1"
        />
      </defs>
      <g transform="translate(0,0)">
        <animated.path className="blob" d={svg} />
      </g>
    </svg>
  );

  const toggle = () => {
    set(index => (index + 1) % 8);
    changeBlob(blobs.editable(options));
  };

  const [blob, changeBlob] = useState(blobs.editable(options));
  const props1 = useSpring({
    svg: blob.children[0].children[0].attributes.d,
    fill: blob.children[0].children[0].attributes.fill
  });

  return (
    <div className="intro-interactive" onClick={toggle}>
      <Transition
        native
        reset
        unique
        items={index}
        from={{
          opacity: 0,
          transform: 'translate3d(100%,0,0)'
        }}
        enter={{
          opacity: 1,
          transform: 'translate3d(0,0,0)'
        }}
        leave={{
          opacity: 0,
          transform: 'translate3d(-100%,0,0)'
        }}
      >
        {index => introText[index]}
      </Transition>
      <BlobBG svg={props1.svg} fill={props1.fill} />
    </div>
  );
};

export default IntroCentering;
