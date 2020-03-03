import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

const Navbar2 = (props) => {
  
  return (
    <nav className="nav grey darken-1" >
       <ul className="left">
       <li><Link to='/'>Home</Link></li> 
     <li><Link to='/edit'>Drs</Link></li> 
     <li><Link to='/signin'>Hosp</Link></li> 
     <li><Link to='/signin'>Club</Link></li> 
     <li> <Link to='/signin'>sale</Link></li>
    </ul>
    </nav>
  )
}



export default Navbar2
