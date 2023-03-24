import React from 'react'
import Button from '../button/button.component'
import ProjectCard from '../project-card/project-card.component'
import { projects } from './projects-data'



const Projects = () => {
  return (
    <div>
        <h1>Projects<Button>Contact Me</Button></h1>
        <div className="project-grid">
            {projects.map(project => <ProjectCard key={project.id} project={project} />)}
        </div>
        </div>
  )
}

export default Projects