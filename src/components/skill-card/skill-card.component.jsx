const SkillCard = ({ skill }) => {
  const { skill: skillName, time } = skill;
  return (
    <div>
      <h2>{skillName}</h2>
      <p>{time}</p>
    </div>
  );
};

export default SkillCard;
