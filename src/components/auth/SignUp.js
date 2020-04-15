import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { signUp } from '../../store/actions/authActions'
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
    email: '',
    password: '',
    Valid:null,
    firstName:this.props.profile.firstName ,
    lastName:this.props.profile.lastName ,
    Dept:this.props.profile.Dept,
    Mobile:this.props.profile.Mobile,
    role:this.props.role
  }}
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.firstName.length<1 ){alert('Please enter Name')
  }else if(this.state.lastName.length<1){alert('Please Enter Last Name')
}else if(this.state.Dept.length<1){alert('Please Enter Group')
}else if(this.state.Mobile<10000000000){alert('Please Enter Mobile with contry code without + sign')
}else{this.props.signUp(this.state);
  this.props.history.push('/');
}
   // 
  }
  render() {
    const { auth, authError } = this.props;
    console.log(this.props.profile.firstName)
    console.log(this.state)
 
  //  if (auth.uid) return <Redirect to='/' /> 
  if (this.props.profile.firstName){
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
            <input type="text" defaultValue={this.state.firstName} id='firstName' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label className='active' htmlFor="lastName">Last Name</label>
            <input   defaultValue={this.state.lastName} type="text" id='lastName' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label className='active' htmlFor="Dept">Dept</label>
            <input  defaultValue={this.state.Dept} type="text"  id='Dept' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label className='active' htmlFor="Mobile">Mobile</label>
            <input  defaultValue={this.state.Mobile} type='number'  id='Mobile' onChange={this.handleChange} />
            <span class="helper-text">Country code+ mobile no(without + sign )</span>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Validate </button>
            <div className="center red-text">
              { authError ? <p>{authError}</p> : null }
            </div>
          </div>
        </form>
      </div>
    )}else {return <p>please wait</p>}
  }
}
const mapStateToProps = (state) => {
  console.log(state.firebase.profile)
  let role=''
  if (state.firebase.profile.role){ role =state.firebase.profile.role  }else{{ role='unknown'}} ;
  console.log('gfgsgfsd')
  return {
    auth: state.firebase.auth,
    profile:state.firebase.profile,
    authError: state.auth.authError,
    role:role
  }
}
const mapDispatchToProps = (dispatch)=> {
  return {
    signUp: (creds) => dispatch(signUp(creds))
  }
}
export default  connect(mapStateToProps, mapDispatchToProps)(SignUp)
