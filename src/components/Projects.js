import React from 'react'
import { Link } from 'react-router-dom'

function Projects() {
  const [projects, setProjects] = React.useState([])

  React.useEffect(() => {
    fetch("api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data.projects))
  }, [])

  const elements = projects.map((project) => (
    <div key={project.id} className='project-card'>
      {/* <Link to={`/projects/:${}`} className='project-link'> */}
      <Link to={`/${project.name}`} className='project-link'>
      <img src={`/images/${project.imgUrl}`}  className='project-img' alt='apps'/>
      <h2 className='project-name'>{project.name}</h2>
      <p className='project-description'>{project.description}</p>
      </Link>
    </div>
  ))
  return (
    <section className='context-home'>
      {elements}
    </section>
  )
}

export default Projects