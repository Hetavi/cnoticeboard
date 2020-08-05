import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import DataDisplay from './Business_Display'
import DataEditing from './CreateBusiness_dataEntry'
import { generateBusiness } from '../../store/actions/businessActions'
class CreateBusiness extends Component {
  render() {   
    if(this.props.project){
    console.log(this.props)
    console.log(this.props.project.authorId)
    console.log(this.state);
    if(this.props.project.authorId===this.props.auth.uid){
    return(<div>
    <DataEditing data={this.props.project}/>
    </div>)}else{
      return(<div>
        <DataDisplay data={this.props.project}/>
        </div>)
    }
    }
else{return(<div><h5>Add New Data</h5>
   <DataEditing data1={[]}/>
  </div>
  
  )}
}}
const mapStateToProps = (state, ownProps) => {
  let id = null
  if (ownProps.match.params.id) { id = ownProps.match.params.id }
  const projects = state.firestore.data.business;
  const temp_proj={
    proj:projects?projects[id]:null,
   id:id
  }
  const project = projects ? temp_proj : null
  console.log(temp_proj)
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
