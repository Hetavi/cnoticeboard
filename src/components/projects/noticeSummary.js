import React from 'react'
import moment from 'moment'
const NoticeSummary = ({ project}) => {
  console.log(project)
  return (
    <div className=" container ">
      <div className='card z-depth-5' style={{border: '1px'}} >
      <p>Posted by {project.authorFirstName} </p>

      </div>
    </div>
  )
}
export default NoticeSummary
