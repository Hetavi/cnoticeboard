import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'
import Button from '@material-ui/core/Button';
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
    link=<Button  ><NavLink to='/adminboard'><u style={{color: 'white'}}>{props.profile.firstName}</u></NavLink></Button>
}else{link=<Button><NavLink to='/userboard'><u>{props.profile.firstName?props.profile.firstName:'Add Profile '}</u></NavLink></Button>}
  return (
    <div>
      {link}
       {/* <NavLink to='/' className="btn btn-pink lighten-1">
  </NavLink>*/}
    </div>
  )
}
const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}
export default connect(null, mapDispatchToProps)(SignedInLinks)
