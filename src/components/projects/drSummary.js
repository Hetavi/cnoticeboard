import React from 'react'
import moment from 'moment'
const NoticeSummary = ({ project }) => {
  console.log()
  return (
    <div  >
      <span className="black-text" >Dr. <b>{project.name}</b> ({project.sp})  {project.visitHr} </span>
    </div>
  )
}
export default NoticeSummary
