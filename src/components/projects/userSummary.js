import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

const NoticeSummary = ({ project }) => {
 
  const li="tel:+"
    const wa="https://wa.me/"
    const li2=project.Mobile
    const link=li.concat(li2)
    const walink=wa.concat(li2)
    console.log(project)
    
  return (
    <div className='card'  >
      <div className='col s1 m1'><Link to={'/edit_user/' + project.id}><button>+</button></Link></div>
      <div className='col s1 m1'> <a  href={link}><i class="tiny material-icons">call</i></a></div>
      <div className='col s1 m1'> <a  href={walink}>W</a></div>
      <div className='4'> <span className="black-text" >{project.firstName} {project.lastName} </span>
      {(project.role!=="unknown")? <i class="tiny material-icons">verified_user</i>:null}
      </div>
   {/* <div className='4'>{(project.role!=="unknown")? <span className="black-text" >{project.firstName} {project.lastName} </span>:'not approved'}</div>*/}
     
    </div>
  )
}
export default NoticeSummary
