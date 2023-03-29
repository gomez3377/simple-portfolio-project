import React from 'react'
import ProjectImage from '../project-image/project-image.component'
import { ProjectCardContainer } from './project-card.styles'

const ProjectCard = ({project}) => {
    const {projectName, languages, img} = project
  return (
    <ProjectCardContainer>
        <ProjectImage img={img} />
        <div className="description">
            <h3>{projectName}</h3>
            <div className="language-list">
            {languages.map((language, index) => <p key={index}>{language}</p>)}
            </div>
        </div>
    </ProjectCardContainer>
  )
}

export default ProjectCard