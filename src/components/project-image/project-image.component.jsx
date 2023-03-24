import React from 'react'

const ProjectImage = ({img}) => {
    const {small, large} = img
  return (
   <img src={large} alt="project-image" />
  )
}

export default ProjectImage