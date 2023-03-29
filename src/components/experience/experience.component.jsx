import SkillCard from "../skill-card/skill-card.component"
import { skills } from "./experience-data"
import { ExperienceContainer } from "./experience.styles"

const Experience = () => {
  return (
    <ExperienceContainer>
        {skills.map(skill => <SkillCard key={skill.id} skill={skill}  />)}
    </ExperienceContainer>
  )
}

export default Experience