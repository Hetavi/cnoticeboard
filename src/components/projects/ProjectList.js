import React, { Component } from 'react'
import ProjectSummary from './noticeSummary'
import { Link } from 'react-router-dom'

class ProjectList extends Component {
    render(){
  return (
    <div  className="project-list section">
      { this.props.projects && this.props.projects.map(project => {
       if(project.displayon){ return (
          <Link   to={'/edit/' + project.id} key={project.id}>
            <ProjectSummary   project={project} />
          </Link>
        )}else{return null}
      })}  
    </div>
  )
}
}
export default ProjectList