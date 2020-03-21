import React, { Component } from 'react'
import Gdash from './gDash'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import Youtube from './Youtube'
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'mon'
    }
  }
  handleChange = event => {
    const { value } = event.target;
    this.setState({ value });
  };
  render() {
    const { profile } = this.props;
    const link1 = profile.Dept ? <Gdash /> : <Gdash />
    // if (!auth.uid) return <Redirect to='/signin' /> 
    return (
      <div className="dashboard container">
        {link1}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  // how to where more than one onsitions ? for sbscription of various notice
  return {
    profile: state.firebase.profile,
  }
}
export default compose(connect(mapStateToProps))(Dashboard)