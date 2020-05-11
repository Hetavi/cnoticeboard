import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
const NoticeSummary = ({ person }) => {
  //console.log(person)
  var splt = person.split("#");
  // console.log(splt)
  const li = "tel:+"
  const wa = "https://wa.me/"
  const walink = wa.concat(splt[1])
  const link = li.concat(splt[1])
                const approvedby = (e) => {
                  alert('Approved by ' + person[4])
                }
  return (
    <div className='card'  >
       <a href={link}> <button ><i className="tiny material-icons">call</i></button> </a>
      <a href={walink}><button>Wa</button></a>
      <span className="black-text" ><b>{splt[0]}</b> </span>{splt[2]}
      <div>
        
      </div>
    </div >
  )
}
export default NoticeSummary
