import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'
const SignedInLinks = (props) => {
  const { auth, profile } = props;
  //console.log(profile.id)
  let link=null
  {/*
  switch case
  approved user
  admin=x 

  */}
 
  if (profile.role==="admin" ||profile.role==="owner"){
    link=<li><NavLink to='/adminboard'><u>{props.profile.firstName}</u></NavLink></li>
}else{link=<li><NavLink to='/userboard'><u>{props.profile.firstName?props.profile.firstName:'Add Profile '}</u></NavLink></li>}
  return (
    <div>
     
      <ul className="right">
      <li><a style={{color:'white'}} href="https://samvad.gnfc.in/"> SAMVAD </a></li>  
        {link}
       
      
        <li><a onClick={props.signOut}>Logout</a></li>
        {/*<li><NavLink to='/' className="btn btn-floating pink lighten-1">
          
  </NavLink></li>*/}
      </ul>
    </div>
  )
}
const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}
export default connect(null, mapDispatchToProps)(SignedInLinks)
