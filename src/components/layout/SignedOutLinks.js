import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import Button from '@material-ui/core/Button';
const SignedOutLinks = (props) => {
      
  return (  
    <div>
     
 <Button   ><NavLink  style={{color: 'white'}} to='/signUp'>Sign up</NavLink></Button>
 <Button   ><a  style={{color: 'white'}} onClick={props.signIn}>Login</a></Button>
        
    </div>
  )
}
const mapDispatchToProps = (dispatch) => {
  return {
    signIn: () => dispatch(signIn())
  }
}
export default connect(null, mapDispatchToProps)(SignedOutLinks)
