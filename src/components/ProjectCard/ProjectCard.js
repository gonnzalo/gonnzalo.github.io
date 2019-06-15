import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faPodcast } from "@fortawesome/free-solid-svg-icons"
import { Image } from "../image"

import "./ProjectCard.css"

const ProjectSkill = ({ skill }) => {
  return <span className="project-skill">{skill}</span>
}

const ProjectSkills = ({ skills }) => {
  return (
    <div className="project-skills">
      {skills.map((skill, index) => {
        return <ProjectSkill skill={skill} key={index} />
      })}
    </div>
  )
}

const ProjectLinks = ({ links: { preview, github } }) => {
  return (
    <div className="project-links">
      <a href={preview} rel="noopener" target="_blank" className="project-link">
        Live Demo <FontAwesomeIcon icon={faPodcast} />
      </a>
      <a
        href={github}
        rel="noopener"
        target="_blank"
        className="project-link secondary"
      >
        <FontAwesomeIcon icon={faGithub} className="icon" /> View Source
      </a>
    </div>
  )
}

const ProjectCard = ({ title, description, skills, links, image, key }) => {
  const MyImg = image
  return (
    <div className="project-card">
      <div className="image-container">
        <MyImg />
      </div>
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <ProjectSkills skills={skills} />
        <ProjectLinks links={links} />
      </div>
    </div>
  )
}

export default ProjectCard
