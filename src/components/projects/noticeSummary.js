import React from 'react'
import moment from 'moment'
const NoticeSummary = ({ project}) => {
  console.log(project.createdAt)
  console.log('project.createdAt')
  return (
    <div className=" container ">
      <div className='card z-depth-1'  >
      <div className="card-content grey-text text-darken-3">
      <p><b>{project.dept} {project.title}</b>:{project.Body1} </p>
     
     { <div style={{ display: 'bloack' }}>By: {project.authorFirstName} {project.authorLastName},{moment(project.createdAt.toDate()).calendar()}</div>}
      
      </div>
      </div>
    </div>
  )
}
export default NoticeSummary
