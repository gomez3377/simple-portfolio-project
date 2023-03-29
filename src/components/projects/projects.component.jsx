import React from 'react'
import Button from '../button/button.component'
import ProjectCard from '../project-card/project-card.component'
import { projects } from './projects-data'
import { ProjectSection, ProjectGrid, ProjectsHeader } from './projects.styles'



const Projects = () => {
  return (
    <ProjectSection>
      <ProjectsHeader>
        <h1>Projects</h1>
        <Button>Contact Me</Button>
      </ProjectsHeader>
        <ProjectGrid>
            {projects.map(project => <ProjectCard key={project.id} project={project} />)}
        </ProjectGrid>
        </ProjectSection>
  )
}

export default Projects