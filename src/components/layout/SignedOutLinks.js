import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
const SignedOutLinks = (props) => {
  return (
    <div>
      <ul className="right">
        {<li><NavLink to='/signUp'>Sign up</NavLink></li>}
      
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
