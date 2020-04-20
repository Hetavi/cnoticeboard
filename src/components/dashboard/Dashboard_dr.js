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
    console.log(this.props)
    if(this.props.history.action==='POP')return <Redirect to='/' /> 
    const { VisitingDr } = this.props;
    if (VisitingDr) {
      let dr_array = VisitingDr.filter(
        (dr_elements) => {
          return dr_elements.name.toLowerCase().indexOf(this.state.value.toLowerCase()) !== -1 ||
            dr_elements.sp.toLowerCase().indexOf(this.state.value.toLowerCase()) !== -1 ||
            dr_elements.visitday.includes(this.state.value.toLowerCase())
        }
      )
      return (
        <div className="dashboard container">
          <div style={{margin:'12px'}}className="card tiny">
            <div>
              <i style={{width:'6%'}} class="material-icons prefix">phone</i>
              <a href="tel:+912642203090"> <button style={{width:'22%'}}className='btn-tiny'  >Regi..</button></a>
              <a href="tel:+912642203093"> <button style={{width:'22%'}}className='btn-tiny'  >Dispensing</button></a>
              <a href="tel:+912642203091"> <button style={{width:'22%'}}className='btn-tiny'  >Nursing </button></a>
              <a href="tel:+91264220304"> <button style={{width:'22%'}} className='btn-tiny'  >Bill-Help </button></a>
            </div>
            <div class="input-field col s6">
              <i class="material-icons prefix">search</i>
              <input id="search" type="text" value={this.state.value} onChange={this.handleChange} />
              
            </div>
          </div>
          <div className="row">
            <div className="col s12 m5 ">
              <DrList VisitingDr={dr_array} />
            </div>
          </div>
        </div>
      )
    } else { return <div>please wait...</div> }
    // if (!auth.uid) return <Redirect to='/signin' /> 
  }
}
const mapStateToProps = (state) => {
  let dayn = new Date().getDay()
  let daynm = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
  const dayname = daynm[dayn]
  //console.log(state);
  return {
    VisitingDr: state.firestore.ordered.VisitingDr,
    auth: state.firebase.auth,
    dayname: dayname,
    value: dayname
  }
}
export default compose(
  connect(mapStateToProps)
)(Dashboard)