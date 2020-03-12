import React from 'react'
import moment from 'moment'
const NoticeSummary = ({ project}) => {
  console.log()
  
  return (
    <div className='card' >
      
      <span className="black-text" >Dr. <b>{project.name}</b><i>({project.sp})</i>{project.visitHr} </span>
      <br></br>
     {project.visitday[0]?<span>{project.visitday[0]}</span>:null}
     {project.visitday[1]?<span>{project.visitday[1]}</span>:null}
     {project.visitday[2]?<span>{project.visitday[2]}</span>:null}
     {project.visitday[3]?<span>{project.visitday[3]}</span>:null}
     {project.visitday[4]?<span>{project.visitday[4]}</span>:null}
     {project.visitday[5]?<span>{project.visitday[5]}</span>:null}
     {project.visitday[6]?<span>{project.visitday[6]}</span>:null}
    </div>
  )
}
export default NoticeSummary
