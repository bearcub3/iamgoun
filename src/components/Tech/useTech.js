import { useContext } from 'react';
import { SkillContext } from './TechContext';

const useTech = () => {
  const [state, setState] = useContext(SkillContext);

  function showThis(index) {
    setState({ ...state, currentSkill: index });
  }

  return {
    current: state.currentSkill,
    skillList: state.mySkills,
    showThis,
  };
};

export default useTech;
