import React, { Component } from 'react'

import BusinessList from '../projects/BusinessList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
//import moment from 'moment'
class BusinessDash extends Component {
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

    const { profile, auth,  projects } = this.props;
     // if (!auth.uid) return <Redirect to='/signin' /> 
    //alert(this.props.td)
   if(this.props.businessarray){
      console.log(this.props.businessarray.length)
     var  totallist=[]
     var mylist=[]
     var i=0
     for (i = 0; i < (this.props.businessarray.length); i++) {
      console.log(this.props.businessarray[i].list)
       mylist=mylist.concat(this.props.businessarray[i].list)
  }
  console.log(mylist)
    return (
      <div className="dashboard container">
        <div>
        <h6>Business Dir.</h6> 
        </div>
        <div className="row">
          <div className="col s12 m12 ">
      
        {  <BusinessList list={mylist}/>}
          </div>
        </div>
      </div>
    )}else{return(<h1>Pease Wait</h1>)}
  }
}
const mapStateToProps = (state) => { 
  return {
    businessarray: state.firestore.ordered.businessarray,
    auth: state.firebase.auth,
    profile: state.firebase.profile,   
    td: state.auth.td
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect(
    (props) => [
    { collection: 'businessarray' } 
  ]
  )
)(BusinessDash)