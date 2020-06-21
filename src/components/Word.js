import React from 'react';
import { useSpring, animated } from 'react-spring';

const calc = (x, y) => [x / 2 / 10, -(y / 2) / 10, 1.1];
const trans = (x, y, s) =>
  `perspective(700px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Word = w => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 }
  }));
  return (
    <animated.div
      className="text-effect"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    >
      <p className={`${w.type}`}>{w.word}</p>
    </animated.div>
  );
};

export default Word;
