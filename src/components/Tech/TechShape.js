import React, { useEffect } from 'react';
import { useTrail, animated } from 'react-spring';
import useTech from './useTech';

const fast = { tension: 1200, friction: 40 };
const slow = { mass: 10, tension: 200, friction: 50 };
const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;
let x, y;

const getArbitraryNum = function (max) {
  return Math.floor(Math.random() * Math.floor(max));
};

const TechShape = (props) => {
  const [trail, set] = useTrail(3, () => ({
    xy: [
      getArbitraryNum(window.innerWidth - 150),
      getArbitraryNum(window.innerHeight - 150),
    ],
    config: (i) => (i === 0 ? fast : slow),
  }));

  useEffect(() => {
    ['resize', 'load'].forEach((evt) =>
      window.addEventListener(evt, () => {
        set({
          xy: [
            getArbitraryNum(window.innerWidth - 150),
            getArbitraryNum(window.innerHeight - 150),
          ],
        });
      })
    );
  }, [set]);

  const { showThis } = useTech();

  return (
    <div className="shape-container">
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
          <feColorMatrix
            in="blur"
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7"
          />
        </filter>
      </svg>
      <div
        className={`tech-shape-${props.type}`}
        onMouseOver={(e) => {
          set({
            xy:
              e.clientX >= x && e.clientY >= y
                ? [window.innerWidth, window.innerHeight]
                : [e.clientX, e.clientY],
          });
          e.target.parentElement.style.zIndex = '100';
        }}
        onMouseOut={(e) => {
          e.target.parentElement.style.zIndex = '0';
          set({ xy: [e.clientX, e.clientY] });
        }}
        onClick={() => {
          showThis(props.id);
        }}
      >
        {trail.map((props, index) => (
          <animated.div
            key={index}
            style={{
              transform: props.xy.interpolate(trans),
            }}
          ></animated.div>
        ))}
      </div>
    </div>
  );
};

export default TechShape;
