import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions'

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName:this.props.Profile.firstName ,
    lastName: this.props.Profile.lastName,
    Dept:this.props.Profile.Dept,
    Mobile:this.props.Profile.Mobile,
    role:this.props.Profile.role
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  }
  render() {
    const { auth, authError } = this.props;
    console.log(this.props.Profile.firstName)
  //  if (auth.uid) return <Redirect to='/' /> 
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Profile</h5>
          <p></p>
        {/*  <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id='email' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' onChange={this.handleChange} />
    </div>*/}
          <div className="input-field ">
            <label  className='active' htmlFor="firstName">First Name</label>
            <input type="text" defaultValue={this.props.Profile.firstName} id='firstName' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label className='active' htmlFor="lastName">Last Name</label>
            <input   defaultValue={this.props.Profile.lastName} type="text" id='lastName' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label className='active' htmlFor="Dept">Dept</label>
            <input  defaultValue={this.props.Profile.Dept} type="text" id='Dept' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label className='active' htmlFor="Mobile">Mobile</label>
            <input  defaultValue={this.props.Profile.Mobile} type="text" id='Mobile' onChange={this.handleChange} />
          </div>



          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Validate </button>
            <div className="center red-text">
              { authError ? <p>{authError}</p> : null }
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state.firebase.profile)
  console.log('gfgsgfsd')
  return {
    auth: state.firebase.auth,
    Profile:state.firebase.profile,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    signUp: (creds) => dispatch(signUp(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
