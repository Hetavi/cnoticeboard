import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList'
import DrList from '../projects/DrList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
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
    const {profile,auth, projects, VisitingDr, notifications, dayname } = this.props;
    console.log(projects)
    console.log(dayname)
    console.log('profile')
  const link1=VisitingDr? <DrList VisitingDr={VisitingDr} />:<p>Please wait..</p>
  const link2=projects?  <ProjectList projects={projects} />:<p>Please wait..</p>
    // if (!auth.uid) return <Redirect to='/signin' /> 
    return (
      <div className="dashboard container">
        <div className="row">
          <div  className="col s12 m5 ">
           {/* <DrList VisitingDr={VisitingDr} />*/}
            {link1}
          </div>
          <div  className="col s12 m6">
           {link2}
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
  // how to where more than one onsitions ? for sbscription of various notice
  return {
    projects: state.firestore.ordered.notice,
    VisitingDr: state.firestore.ordered.VisitingDr,
    auth: state.firebase.auth,
    profile:state.firebase.profile,
    notifications: state.firestore.ordered.notifications,
    dayname: dayname,
    depts:['meth2','sport'],
    value: dayname
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect((state) => [
  { collection: 'notice', where: [['displayon', '==', true],['dept','in',state.depts] ]},
    { collection: 'VisitingDr', where: [['visitday', 'array-contains', state.value]] },
    { collection: 'notifications', limit: 3, orderBy: ['time', 'desc'] } 
  ]
  )
)(Dashboard)