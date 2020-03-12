import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
const SignedOutLinks = (props) => {
  return (
    <div>
      <ul className="right">
        {/*<li><NavLink to='/signUp'>Sign up</NavLink></li>*/}
        <li><NavLink to='/dash_hosp'><b>Hsop</b></NavLink></li>
        <li><NavLink to='/dash_dr'>Drs</NavLink></li>
        <li><NavLink to='/dash_dir'>Dir</NavLink></li>
        <li><a onClick={props.signIn}>Login</a></li>
      </ul>
    </div>
  )
}
const mapDispatchToProps = (dispatch) => {
  return {
    signIn: () => dispatch(signIn())
  }
}
export default connect(null, mapDispatchToProps)(SignedOutLinks)
