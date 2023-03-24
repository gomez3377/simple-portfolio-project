import SkillCard from "../skill-card/skill-card.component"
import { skills } from "./experience-data"

const Experience = () => {
  return (
    <div>
        {skills.map(skill => <SkillCard key={skill.id} skill={skill}  />)}
    </div>
  )
}

export default Experience