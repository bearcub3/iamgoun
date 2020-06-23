import React, { useState, createContext } from 'react';

const SkillContext = createContext([{}, () => {}]);

const SkillContextProvider = (props) => {
  const skills = {
    currentSkill: 0,
    mySkills: [
      { id: 0, type: 'circle', tech: 'HTML5', proficiency: 95 },
      { id: 1, type: 'rect', tech: 'CSS3', proficiency: 90 },
      { id: 2, type: 'poly', tech: 'JavaScript', proficiency: 85 },
      { id: 3, type: 'circle', tech: 'RESTful API', proficiency: 68 },
      { id: 4, type: 'poly', tech: 'Nodejs', proficiency: 35 },
      { id: 5, type: 'rect', tech: 'React', proficiency: 70 },
      { id: 6, type: 'circle2', tech: 'Terminal', proficiency: 45 },
      { id: 7, type: 'rect', tech: 'Figma', proficiency: 90 },
      { id: 8, type: 'circle2', tech: 'NPM', proficiency: 80 },
      { id: 9, type: 'rect', tech: 'Github', proficiency: 90 },
      { id: 10, type: 'poly', tech: 'Webpack', proficiency: 50 },
      { id: 11, type: 'circle', tech: 'Passion', proficiency: 10000 },
    ],
  };

  const [state, setState] = useState(skills);

  return (
    <SkillContext.Provider value={[state, setState]}>
      {props.children}
    </SkillContext.Provider>
  );
};

export { SkillContext, SkillContextProvider };
