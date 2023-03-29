import { SkillCardContainer } from "./skill-card.styles";

const SkillCard = ({ skill }) => {
  const { skill: skillName, time } = skill;
  return (
    <SkillCardContainer>
      <h2>{skillName}</h2>
      <p>{time}</p>
    </SkillCardContainer>
  );
};

export default SkillCard;
