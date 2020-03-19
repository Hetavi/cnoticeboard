import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'
import Navbar2 from './Navbar2'
const Navbar = (props) => {
  const { auth, profile } = props;

  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;
  
  return (
    <div>
    <nav style={{lineHeight:1.3,height:40}} className="nav-wrapper grey darken-3" >
      <Link to='/' className="brand-logo left">Home </Link>
      {links}
    </nav>
   
    </div>
  )
}
const mapStateToProps = (state) => {
  console.log(state.firebase.profile)
  
  console.log('dsfdsfsd')
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,  
    
  }
}
export default connect(mapStateToProps)(Navbar)
