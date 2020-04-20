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
  render() {
    const { profile, auth, media, projects, VisitingDr, dayname } = this.props;
    //alert(this.props.td)
    console.log(media)
    console.log(this.props.td)
    console.log('profile')
 
    // if (!auth.uid) return <Redirect to='/signin' /> 
    return (
      <div className="dashboard container">
        <div>{moment(this.props.td).format('MMMM Do YYYY, h:mm:ss a')}
       {/* <h6>આપણો બ્લોગ</h6> */}
        </div>
        <div className="row">
          <div className="col s12 m6 ">
          <h5>News </h5>
            {<MediaList media={media} />}
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  console.log(state)
  let dayn = new Date().getDay()
  let daynm = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
  const dayname = daynm[dayn]
  // 
  return {
    media: state.firestore.ordered.media,
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    value: dayname,
    td: state.auth.td
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect(
    (props) => [
    { collection: 'media',where: [['endDate', '<', new Date(props.td)]],orderBy: ['endDate', 'asc'] } 
  ]
  )
)(Dashboard)