import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
const NoticeSummary = ({ list }) => {
 
  const li = "tel:+"
  const wa = "https://wa.me/"
  const walink = wa.concat(list[0])
  const link = li.concat(list[0])
  const approvedby = (e) => {
    alert('Approved by ' + list[4])
  }
  return (
    <div className='card'  >
      {(list[2] !== "unknown") ? <button onClick={approvedby}><i class="tiny material-icons">verified_user</i></button> : null}
      <a href={link}> <button><i class="tiny material-icons">call</i></button> </a>
      <a href={walink}><button>Wa</button></a>
      <span className="black-text" ><b>{list[1]}</b> </span>
      <div>
        {list[3]},
          {list[5]}
      </div>
    </div >
  )
}
export default NoticeSummary
