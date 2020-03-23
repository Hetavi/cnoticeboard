import React from 'react'
import moment from 'moment'
const NoticeSummary = ({ project}) => {
  console.log()
  
  return (
    <div className='card' >
     
      <span className="black-text" >Dr. <b>{project.name}</b>({project.sp}) <br></br> </span>
     
     {project.visitday[0]?<span>{project.visitday[0].toUpperCase()}</span>:null}
     {project.visitday[1]?<span>{project.visitday[1].toUpperCase()}</span>:null}
     {project.visitday[2]?<span>{project.visitday[2].toUpperCase()}</span>:null}
     {project.visitday[3]?<span>{project.visitday[3].toUpperCase()}</span>:null}
     {project.visitday[4]?<span>{project.visitday[4].toUpperCase()}</span>:null}
     {project.visitday[5]?<span>{project.visitday[5].toUpperCase()}</span>:null}
     {project.visitday[6]?<span>{project.visitday[6].toUpperCase()}</span>:null}
     <span><i>-{project.visitHr}</i></span>
     
    </div>
  )
}
export default NoticeSummary
