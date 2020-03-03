import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'
import DrList from '../projects/DrList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
class Dashboard extends Component {
  render() {
    const { projects, VisitingDr,auth, notifications,dayname } = this.props;
  
    console.log(dayname )
   
    console.log('VisitingDr')

   // if (!auth.uid) return <Redirect to='/signin' /> 
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1">
          <DrList VisitingDr={VisitingDr} />
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  let dayn = new Date().getDay()
  let daynm = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
  const dayname = daynm[dayn]
  // console.log(state);
  return {
    projects: state.firestore.ordered.notice,
    VisitingDr:state.firestore.ordered.VisitingDr,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications,
    dayname: dayname
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) =>[
    { collection: 'notice', where: [['displayon', '==', true]]},
    { collection: 'VisitingDr', where: [['visitday', 'array-contains', props.dayname]]},
    { collection: 'notifications', limit: 3, orderBy: ['time', 'desc']}
  ])
)(Dashboard)