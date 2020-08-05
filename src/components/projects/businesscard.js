import React from 'react'

import { Link } from 'react-router-dom'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import CallIcon from '@material-ui/icons/Call';

const NoticeSummary = ({ person }) => {
  //console.log(person)
  var splt = person.split("#");
  // console.log(splt)
  const li = "tel:+"
  const wa = "https://wa.me/"
  const walink = wa.concat(splt[0])
  const link = li.concat(splt[0])
                const approvedby = (e) => {
                  alert('Approved by ' + person[4])
                }
  return (
    <div className='card'  >
       <a href={link}> <CallIcon/> </a>
      <a href={walink}><WhatsAppIcon/></a>
      
      <Link to={'/businessdata/'+splt[0]}>
      <b>{splt[0]}</b>{splt[2]}
     </Link>
    
    </div >
  )
}
export default NoticeSummary
