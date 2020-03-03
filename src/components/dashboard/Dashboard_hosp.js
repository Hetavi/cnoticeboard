import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import HospSummary from '../projects/hospSummary'

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
   
      showing: true,
      days: '',
      t1: '',
      value: ''
    }
  }
  handleChange = event => {
    const { value } = event.target;
    this.setState({ value });
  };
  Button1 = () => {
    const { value } = "MECH";
    this.setState({ value });
  };
  render() {
    const { hosp_props, err, auth, value } = this.props;
    if (hosp_props) {
      let hosp_array = this.props.hosp_props.filter(
        (hosp_elements) => {
          return hosp_elements.city.indexOf(this.state.value) !== -1 ||
          hosp_elements.hospName.indexOf(this.state.value) !== -1 ||
          hosp_elements.sp.indexOf(this.state.value) !== -1 
        }
      )
      return (
        <div className="dashboard container">
          <div className="col s12">
            <h5 >
              <font color="yellow" >Search   </font>
              <div className="input-field inline">
                <input id="search" type="text" value={value} onChange={this.handleChange} />
                <label htmlFor="search" ><h6><font color="white">City/Name/Specility</font></h6></label>
              </div>
             </h5>
          </div>
          <div className="col s6 m6">
            {hosp_array.map(sigle_hosp => {
              if (auth.uid) {
                return ( <Link to={'/edit_hosp/' + sigle_hosp.id} key={sigle_hosp.id}>
                   < HospSummary passing_hosp={sigle_hosp} />
                   </Link>
                 
                )
              }
            })
            }
          </div>
        </div>
      )
    }
    else {
      return(
        <div>Please wait.....</div>
        
      )
    }
  }
}
const mapStateToProps = (state) => {
  // console.log('dashbord--.js mapStateToProps')
  let dayn = new Date().getDay()
  let daynm = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
  //console.log(daynm)
  const dayname = daynm[dayn]
  const t1 = true
  return {
    hosp_props: state.firestore.ordered.hosp,
    auth: state.firebase.auth,
    dayname: dayname,
    t1: t1
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect(() => [
     { collection: 'hosp' }
    //{ collection: 'notice', where: [['visitday', 'array-contains', props.dayname]] }
  ])
)(Dashboard)
