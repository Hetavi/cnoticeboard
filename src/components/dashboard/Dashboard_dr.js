import React, { Component } from 'react'
import DrList from '../projects/DrList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    }
  }
  handleChange = event => {
    const { value } = event.target;
    this.setState({ value });
  };
  render() {
    const { VisitingDr } = this.props;
    if (VisitingDr) {
      let dr_array = VisitingDr.filter(
        (dr_elements) => {
          return dr_elements.name.toLowerCase().indexOf(this.state.value.toLowerCase()) !== -1||
          dr_elements.sp.toLowerCase().indexOf(this.state.value.toLowerCase()) !== -1||
          dr_elements.visitday.includes(this.state.value.toLowerCase())
        }
      )
      return (
        <div className="dashboard container">
          <br></br>
          <div  className="col s6">
            <font color="blue" >Search   </font>
            <div className="input-field inline">
              <input id="search" type="text" value={this.state.value} onChange={this.handleChange} />
              <label className="active" htmlFor="search" ><font color="black">Day/Name/Specility</font></label>
            </div>
          </div>
          <div className="row">
            <div className="col s12 m5 offset-m1">
              <DrList VisitingDr={dr_array} />
            </div>
          </div>
        </div>
      )


    } else { return <div>please wait...</div>}
   
    // if (!auth.uid) return <Redirect to='/signin' /> 
   
  }
}
const mapStateToProps = (state) => {
  let dayn = new Date().getDay()
  let daynm = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
  const dayname = daynm[dayn]
  // console.log(state);
  return {
    VisitingDr: state.firestore.ordered.VisitingDr,
    auth: state.firebase.auth,
    dayname: dayname,
    value: dayname
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect((state) => [
    { collection: 'VisitingDr' }
  ])
)(Dashboard)