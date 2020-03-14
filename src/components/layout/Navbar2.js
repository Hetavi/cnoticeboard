import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
const Navbar2 = (props) => {
  return (
    <nav style={{lineHeight:1.2,height:20}}>
       <ul className="left" >
     <li ><Link to='/dr'>+Dr</Link></li> 
     <li ><Link to='/hosp'>+Hosp</Link></li> 
     <li > <Link to='/create'>+NEWS</Link></li>
     <li > <Link to='/'>+Adv</Link></li>
     <li > <Link to='/signUp'>Profile</Link></li>
    </ul>
    </nav>
  )
}
export default Navbar2
