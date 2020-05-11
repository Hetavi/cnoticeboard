import React, { Component } from 'react'
import UserList from '../projects/UserList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'mon',
    }
  }
  handleChange = event => {
    const { value } = event.target;
    this.setState({ value });
  };
  render() {
    const { profile, auth, users } = this.props;
    const link2 = users ? <UserList projects={this.props} /> : <p>Please wait..</p>
     if (!auth.uid) return <Redirect to='/signin' /> 
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
          {link2} 
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  //console.log(state)
  let dayn = new Date().getDay()
  let daynm = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
  const dayname = daynm[dayn]
  // how to where more than one onsitions ? for sbscription of various notice
  return {
    users: state.firestore.ordered.users,
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    depts: ['meth2', 'sport'],
    value: dayname,
    td: state.auth.td
  }
}
export default compose(
  connect(mapStateToProps)
)(Dashboard)