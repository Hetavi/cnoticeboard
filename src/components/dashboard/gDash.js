import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList'
import DrList from '../projects/DrList'
import MediaList from '../projects/MediaList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
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
  componentDidMount(){
    console.log(this.state.usersarray)
    
  }
  render() {
    const { profile, auth,usersarray, media, projects, VisitingDr, dayname } = this.props;
    //alert(this.props.td)
   if (usersarray){console.log(usersarray.length)}
    //console.log(this.props.td)
    //console.log('profile')
    let i=0
    for (let key in usersarray) {
      i=i+1
      // keys
     // alert( key );  // name, age, isAdmin
      // values for the keys
      console.log( usersarray[key]); // John, 30, true
    }
console.log(i)
    const link1 = VisitingDr ? <DrList VisitingDr={VisitingDr} /> : <p>Please wait..</p>
    const link2 = projects ? <ProjectList projects={projects} /> : <div class="progress">
    <div class="indeterminate"></div>
</div>
    // if (!auth.uid) return <Redirect to='/signin' /> 
    return (
      <div className="dashboard container">
        <div>{moment(this.props.td).format('MMMM Do YYYY, h:mm:ss a')}
       {/* <h6>આપણો બ્લોગ</h6> */}
        </div>
        <div className="row">
          <div className="col s12 m6 ">
          
            {<MediaList media={media} />}
          </div>
          
          <div className="col s12 m6">
            <h5>Advertisement by our members</h5>
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
  // 
 // console.log(this.state.usersarray)
  return {
    projects: state.firestore.ordered.notice,
    VisitingDr: state.firestore.ordered.VisitingDr,
    media: state.firestore.ordered.media,
    auth: state.firebase.auth,
    usersarray:state.firestore.ordered.usersarray,
    profile: state.firebase.profile,
    notifications: state.firestore.ordered.notifications,
    depts: ['meth2', 'sport'],
    value: dayname,
    td: state.auth.td
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect(
    
    (props) => [
    // { collection: 'notice', where: [['displayon', '==', true],['dept','in',state.depts] ]},
    //,where:[['startDate','<',new Date(props.td)]]
    { collection: 'notice', where: [ ['createdAt', '>', new Date(props.td - (7 * 24 * 60 * 60 * 1000))]], orderBy: ['createdAt', 'desc'] },
    { collection: 'VisitingDr' },
    {collection: 'usersarray'},
    { collection: 'media',where: [['endDate', '>', new Date(props.td - (1 * 24 * 60 * 60 * 1000))]],orderBy: ['endDate', 'desc'] } 
  ]
  )
)(Dashboard)