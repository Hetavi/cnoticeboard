import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'
const SignedInLinks = (props) => {
  const { auth, profile } = props;
  console.log(profile.id)
  let link=null
  {/*
  switch case
  approved user
  admin=x 
  */}
  if (profile.Dept="meth2"){
    link=<li><NavLink to='/admin'><b>Dashboard</b></NavLink></li>
}
  return (
    <div>
      {console.log(props.profile)}
      <ul className="right">
        {link}
       
        
        <li><a onClick={props.signOut}>{props.profile.firstName} </a></li>
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