import React from 'react'
import { Link } from 'react-router-dom'
import style from './Projects.module.css'

function Projects() {
  const [projects, setProjects] = React.useState([])

  React.useEffect(() => {
    fetch("api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data.projects))
  }, [])

  const elements = projects.map((project) => (
    <div key={project.id} className={`${style.projectCard}`}>
      {/* <Link to={`/projects/:${}`} className='project-link'> */}
      <Link to={`/${project.name}`} className={`${style.projectLink}`}>
      <img src={`/images/${project.imgUrl}`}  className={`${style.projectImg}`} alt='apps'/>
      <h2 className={`${style.projectName}`}>{project.name}</h2>
      <p className={`${style.projectDescription}`}>{project.description}</p>
      </Link>
    </div>
  ))
  return (
    <section className={`${style.contextHome}`}>
      
      {elements}
    </section>
  )
}

export default Projects