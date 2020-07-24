import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { generateBusiness } from '../../store/actions/businessActions'

class CreateBusiness extends Component {
  
  render() {   
    console.log(this.props)
    console.log(this.state);

  if(!this.props.project){
    return(<div><h3>Not ok</h3>
    <h1>x</h1>
    </div>)}
    else{
      if(this.props.project.bName){
      return(<h6>this.props.project.bId not found</h6>)
      }
      else{ return(<h1> Availble</h1>)}
    }
 
   
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
