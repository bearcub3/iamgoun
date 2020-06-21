import React, { useState } from 'react';
import ResizeObserver from 'react-resize-observer';
import { useSpring, animated } from 'react-spring';
import TechShape from './Tech/TechShape';
import useTech from './Tech/useTech';
import BlobIMG from './../images/blob.svg';

const Techstacks = () => {
  const { current, skillList } = useTech();
  const props = useSpring({
    numb: skillList[current]['proficiency'],
    from: { numb: 0 }
  });

  const [shapeLoc, setShapeLoc] = useState([
    window.innerWidth,
    window.innerHeight
  ]);

  return (
    <div className="techstacks" id="techstacks">
      <ResizeObserver
        onResize={rect => {
          setShapeLoc([rect.width, rect.Height]);
        }}
      />
      <h2 className="heading show-on-scroll">Tech Stacks</h2>
      <div className="shapes">
        <div className="tech-proficiency">{skillList[current]['tech']}</div>
        <animated.div style={props} className="score">
          {props.numb.interpolate(x => x.toFixed(0))}
        </animated.div>
        {skillList.map((item, index) => (
          <TechShape key={index} id={item.id} type={item.type} />
        ))}
      </div>
      <BlobIMG className="blob-center" />
    </div>
  );
};

export default Techstacks;
