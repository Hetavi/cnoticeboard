import React, { Component } from 'react'
import { connect } from 'react-redux'
import { generateNotice } from '../../store/actions/listingActions'
import firebase from "firebase";
class CreateNotice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: '',
      list1: JSON.stringify(this.props.projects)
    }
  }
  handleChange = (e) => {
    this.setState({
      list1: JSON.stringify(this.props.projects)
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      list1: JSON.stringify(this.props.projects)
    })
    //console.log(this.state.list1)
    var i
    var n = this.state.list1.length / (1000000)
    //console.log(n)
    if(this.state.list1){for (i = 0; i < n; i++) {
      var list2 = this.state.list1.substr(i, (i + 1) * 1000000)
      this.setState({
        list: list2
      })
      // this.props.generateNotice(this.state.list);
      alert ('done')
    }}else {alert ('click after a while')}
    
    //console.log(this.state.list)
    //this.props.history.push('/');
  }
  render() {
    //console.log(this.props)
    var a = JSON.stringify(this.props.projects)
    return (
      <div className="container section project-editing">
        <h5>Creating List of all users   </h5>
        <div className="bg-img"> </div>
        <form onSubmit={this.handleSubmit}>
          <button className="btn green lighten-1" onClick={this.handleChange}>Refresh Data</button>
         Total Charactors= {a.substr(0,100)}
          <br />
          <button className="btn green lighten-1">Save</button>
        </form>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  const projects = state.firestore.data.users;
  return {
    project: projects,
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}
const mapDispatchToProps = dispatch => {
  return {
    generateNotice: (project) => dispatch(generateNotice(project))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateNotice)
