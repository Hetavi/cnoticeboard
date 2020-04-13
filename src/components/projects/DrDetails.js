import React, { Component } from 'react'
import { connect } from 'react-redux'

import { compose } from 'redux'
import { editDrActions } from '../../store/actions/editDrActions'
import { Redirect } from 'react-router-dom'

{/* use for edit notice */ }
class HospDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      docid: this.props.docid,
      name: this.props.project.name,
      sp: this.props.project.sp,
      visitday: this.props.project.visitday,
      visitHr: this.props.project.visitHr,
      stats: '',
    }
  }
  handleChange = (e) => {
    console.log(this.state.data)
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handlecheckbox = (e) => {
    this.setState({
    })
    if (this.state.visitday.includes(e.target.id)) {
      console.log('loop operated')
      this.state.visitday = this.state.visitday.filter(val => val !== e.target.id);
    } else {
      this.state.visitday.push(e.target.id)
    }
    console.log(this.state.visitday.includes(e.target.id))
    console.log(this.state.visitday)
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
    this.props.editDrActions(this.state);
    this.props.history.push('/dash_dr');
  }
  render() {
    //if (!auth.uid) return <Redirect to='/signin' /> 
    console.log(this.props)
    console.log('this.state')
    var n0 = this.state.visitday.includes("sun")
    var n1 = this.state.visitday.includes("mon")
    var n2 = this.state.visitday.includes("tue")
    var n3 = this.state.visitday.includes("wed")
    var n4 = this.state.visitday.includes("thu")
    var n5 = this.state.visitday.includes("fri")
    var n6 = this.state.visitday.includes("sat")
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3"> Edit Dr. Details </h5>
          <div className="input-field">
            <input id='name' defaultValue={this.state.name} onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <input type="text" id='sp' defaultValue={this.state.sp} onChange={this.handleChange} />
          </div>
          {/* <div className="input-field">
            <input type="text" id='visitHr' defaultValue={this.state.visitHr} onChange={this.handleChange} />
            <label className="grey-text text-darken-3 active" htmlFor="sp">Speciality</label>
    </div>*/}
          <div>
            <p>
              <label>
                <input id="sun" type="checkbox" className="filled-in" checked={n0} onChange={this.handlecheckbox} />
                <span>Sun</span>
              </label>
              <label>
                <input id="mon" type="checkbox" className="filled-in" checked={n1} onChange={this.handlecheckbox} />
                <span>Mon</span>
              </label>
              <label>
                <input id="tue" type="checkbox" className="filled-in" checked={n2} onChange={this.handlecheckbox} />
                <span>Tue</span>
              </label>
              <label>
                <input id="wed" type="checkbox" className="filled-in" checked={n3} onChange={this.handlecheckbox} />
                <span>Wed</span>
              </label>
              <label>
                <input id="thu" type="checkbox" className="filled-in" checked={n4} onChange={this.handlecheckbox} />
                <span>Thu</span>
              </label>
              <label>
                <input id="fri" type="checkbox" className="filled-in" checked={n5} onChange={this.handlecheckbox} />
                <span>Fri</span>
              </label>
              <label>
                <input id="sat" type="checkbox" className="filled-in" checked={n6} onChange={this.handlecheckbox} />
                <span>Sat</span>
              </label>
            </p>
          </div>
          <div className="input-field">
            <input type="text" id='visitHr' defaultValue={this.state.visitHr} onChange={this.handleChange} />
            <label className='active' htmlFor="visitHr">Visiting Hour</label>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">Save</button>
          </div>
        </form>
      </div>
    )
  }
  //}
}
const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.VisitingDr;
  const project = projects ? projects[id] : null
  return {
    docid: id,
    project: project,
    auth: state.firebase.auth
  }
}
const mapDispatchToProps = dispatch => {
  return {
    editDrActions: (project) => dispatch(editDrActions(project))
  }
}
export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(HospDetails)
