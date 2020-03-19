import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'
const SignedInLinks = (props) => {
  const { auth, profile } = props;
  let link=null
  if (profile.Dept="meth2"){
    link=<li><NavLink to='/admin'><b>Admin</b></NavLink></li>
}
  return (
    <div>
      {console.log(props.profile)}
      <ul className="right">
        {link}
        <li><NavLink to='/dash_hosp'><b>Hsop</b></NavLink></li>
        <li><NavLink to='/dash_dr'><b>Dr.s</b></NavLink></li>
        
        <li><a onClick={props.signOut}>Logout </a></li>
        {/*<li><NavLink to='/' className="btn btn-floating pink lighten-1">
          {props.profile.initials}
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