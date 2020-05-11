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
    <nav style={{lineHeight:1.3,height:40}} className="nav-wrapper blue darken-4" >
      <Link to='/' className="brand-logo left">મારુ ભરૂચ</Link>
  
  
      {links}
    </nav>
    <div  className="center">
    <Link style={{width:'25%'}} to='/' className="waves-effect waves-light btn-small black">Home</Link>
    <Link style={{width:'25%'}}to='/dash_dr' className="waves-effect   waves-light btn-small  black">Doctors</Link>
    <Link style={{width:'25%'}} to='/dash_hosp' className="waves-effect waves-light btn-small black">Hosp</Link>
    <Link style={{width:'25%'}} to='/lists' className="waves-effect waves-light btn-small black">Dir</Link>
    

   
   
  
    </div></div>
  )
}
const mapStateToProps = (state) => {
  //console.log(state.firebase.profile)
  
  //console.log('dsfdsfsd')
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,  
    
  }
}
export default connect(mapStateToProps)(Navbar)
