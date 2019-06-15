import React from "react"
import "./projects.css"

import ProjectCard from "../../components/ProjectCard/ProjectCard"

import projects from "../../content/projects"

const Projects = () => {
  return (
    <section id="projects">
      <div className="projects-container">
        <h1 className="projects-title">Project Page</h1>
        <div className="cards-container">
          {projects.map(proj => (
            <ProjectCard
              title={proj.title}
              description={proj.description}
              skills={proj.skills}
              links={proj.links}
              image={proj.image}
              key={proj.title}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
