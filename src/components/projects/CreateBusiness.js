import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import DataEntry from './CreateBusiness_dataEntry'
import { generateBusiness } from '../../store/actions/businessActions'
class CreateBusiness extends Component {
  render() {   
    if(this.props.project){
    console.log(this.props)
    console.log(this.state);
    return(<div><h4>Sanjay</h4>
    <DataEntry data={this.props.project}/>
    </div>)
    }
else{return(<h4>Sanjay else</h4>)}
}}
const mapStateToProps = (state, ownProps) => {
  let id = null
  if (ownProps.match.params.id) { id = ownProps.match.params.id }
  const projects = state.firestore.data.business;
  const project = projects ? projects[id] : null
  console.log(project)
  return {
    project: project,
    id: id,
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}
const mapDispatchToProps = dispatch => {
  return {
    generateBusiness: (project) => dispatch(generateBusiness(project))
  }
}
export default compose(connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{
    collection: 'business'
  }]))
  (CreateBusiness)
