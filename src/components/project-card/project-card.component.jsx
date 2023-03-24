import React from 'react'
import ProjectImage from '../project-image/project-image.component'

const ProjectCard = ({project}) => {
    const {projectName, languages, img} = project
  return (
    <div>
        <ProjectImage img={img} />
        <div className="description">
            <p>{projectName}</p>
            <div className="language-list">
            {languages.map((language, index) => <p key={index}>{language}</p>)}
            </div>
        </div>
    </div>
  )
}

export default ProjectCard