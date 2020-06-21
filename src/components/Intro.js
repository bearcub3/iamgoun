import React, { useState, useEffect } from 'react';
import ResizeObserver from 'react-resize-observer';
import Circle from './../images/intro-circle.svg';
import Polygon from './../images/intro-polygon.svg';
import Rect from './../images/intro-rect.svg';
import AnimatedSVG1 from './../images/intro-animated-shape.svg';
import AnimatedSVG2 from './../images/intro-animated-shape2.svg';
import ZigZag from './../images/zigzag.svg';
import CirclePath from './../images/circle-02.svg';
import IntroCentering from './IntroCentering';

const cubicle = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 500 500"
    className="intro-rect-animation"
  >
    <g>
      <path
        strokeWidth="8"
        stroke="#000"
        opacity="0"
        fill="none"
        d="M182 182h256v256H182z"
        className="intro-rect-path1"
      >
        <animate
          attributeName="opacity"
          from="0"
          to="1"
          begin="0s"
          dur="0.6s"
          fill="freeze"
        />
        <animateTransform
          attributeName="transform"
          type="scale"
          from="0"
          to="1"
          begin="-0.3s"
          dur="0.6s"
          fill="freeze"
        />
      </path>
      <path
        strokeWidth="8"
        stroke="#000"
        opacity="0"
        fill="none"
        d="M96 102h256v256H96z"
        className="intro-rect-path2"
      >
        <animate
          attributeName="opacity"
          from="0"
          to="1"
          begin="1s"
          dur="0.4s"
          fill="freeze"
        />
      </path>
      <path
        stroke="#000"
        opacity="0"
        strokeLinecap="null"
        strokeLinejoin="null"
        strokeOpacity="null"
        strokeWidth="8"
        fill="none"
        d="M97 102.548l85.054 80.054M352 101.548l85.054 80.054M96 358.548l85.054 80.054M352 357.548l85.054 80.054"
        className="intro-rect-path3"
      >
        <animate
          attributeName="opacity"
          from="0"
          to="1"
          begin="1.2s"
          dur="0.4s"
          fill="freeze"
        />
      </path>
    </g>
  </svg>
);

const Intro = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const scaledRect = document.querySelector('.intro-rect-1');
    scaledRect.addEventListener('animationend', function() {
      this.classList.add('scaled-rect');
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="intro-container">
        <IntroCentering />
      </div>
      <ResizeObserver
        onResize={rect => {
          setWidth(window.innerWidth);
        }}
      />
      <div className="shapes">
        <AnimatedSVG2 className="stroke-w10 green-stroke intro-tri-3" />
        <Rect className="orange intro-rect-1" />
        <Rect className="orange intro-rect-2" />
        <Polygon className="blue intro-tri-1" />
        <AnimatedSVG2 className="stroke-w3 yellow-stroke intro-tri-2" />
        <Circle className="green intro-circ-1" />
        <Circle className="orange intro-circ-2" />
        <Circle className="green intro-circ-3" />
        <AnimatedSVG1 className="blue-stroke stroke-w5 intro-rect-path-01" />
        <ZigZag className="orange intro-zigzag-01" />
        {cubicle}
        <AnimatedSVG1 className="orange-stroke stroke-w10 intro-rect-path-02" />
        <CirclePath className="blue-stroke stroke-w3 intro-circle-path-01" />
        <Circle className="blue intro-circ-4" />
      </div>
    </div>
  );
};

export default Intro;
