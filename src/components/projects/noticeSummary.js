import React from 'react'
import moment from 'moment'
const NoticeSummary = ({ project}) => {
  console.log(project.createdAt)
  console.log('project.createdAt')
  return (
    <div className=" container ">
      <div className='card z-depth-1'  >
      <div className="card-content grey-text text-darken-3">
      <b>{project.dept} </b><div style={{ textAlign: 'justify' }}>{(project.title).slice(0,56)}..</div>
     
     { <div style={{ display: 'bloack' }}><i>By: {project.authorFirstName} {project.authorLastName},{moment(project.createdAt.toDate()).format('DD-MM-YYYY')  }</i></div>}
      
      </div>
      </div>
    </div>
  )
}
export default NoticeSummary
