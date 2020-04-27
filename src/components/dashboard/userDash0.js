import React, { Component } from 'react'
import UserList from '../projects/UserList0'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.profile.Dept,
    }
  }
  handleChange = event => {
    const { value } = event.target;
    this.setState({ value });
  };
  render() {
    // if(this.props.history.action==='POP')return <Redirect to='/' /> 
    const { profile, auth, lists } = this.props;
    
    const link2 = lists ? <UserList projects={this.props} /> : <p>Please wait..</p>
    if (!auth.uid) return <Redirect to='/signin' />
    //console.log(lists[0].list)
    //alert(profile.Dept)
    var splitted = lists[0].list.split("###*");
    // spliting 
    var a = []
    splitted.map(list => {
      return (a.push(list.split("##*")))
    })
    // console.log(a)
    //make search component
    if (a.length > 1) { 
      let dr_array = a.filter(
        (dr_elements) => {
          return dr_elements[0].toLowerCase().indexOf(this.state.value.toLowerCase()) !== -1 ||
            dr_elements[1].toLowerCase().indexOf(this.state.value.toLowerCase()) !== -1 ||
            dr_elements[3].toLowerCase().indexOf(this.state.value.toLowerCase()) !== -1
        })
      return (
        <div className="dashboard container">
          <div class="input-field col s6">
            <i class="material-icons prefix">search</i>
            <input id="search" type="text" value={this.state.value} onChange={this.handleChange} />
          </div>
          <div className="row">
            <div className="col s12 m6">
              {dr_array.map(list => {
                return <UserList list={list} />
              })}
            </div></div></div>
      )
    } else { return <div>Please Wait</div>}
   
  }
}
const mapStateToProps = (state) => {
  // console.log(state)
  return {
    lists: state.firestore.ordered.lists,
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  }
}
export default compose(
  connect(mapStateToProps)
)(Dashboard)