import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/doctorActions'
import { Redirect } from 'react-router-dom'
class CreateProject extends Component {
  state = {
    name: '',
    sp: '',
    visitday: '',
    visitHr: '',
    stats: '',
    visitday1: null,
    visitday: []
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
    console.log(e.target.value)
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
    this.props.createProject(this.state);
    this.props.history.push('/');
    // window.open("http://wa.me/91" + this.state.mobile + "?text=Hi "+this.state.name+", Thank you for choosing us to take care of your "+this.state.modelno+" Your Repair id is "+this.state.mobile +". For any query please contact us on: 9898421074");
  }
  render() {
    const { auth } = this.props;
    //if (!auth.uid) return <Redirect to='/signin' />
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">New Dr </h5>
          <div className="input-field">
            <input type="text" id='name' onChange={this.handleChange} />
            <label className="grey-text text-darken-3" htmlFor="name">Name</label>
          </div>
          <div className="input-field">
            <input type="text" id='sp' onChange={this.handleChange} />
            <label htmlFor="sp">Speciality</label>
          </div>
          <div>
            <p>
              <label>
                <input id="sun" type="checkbox" onChange={this.handlecheckbox} />
                <span>Sun</span>
              </label>
              <label>
                <input id="mon" type="checkbox" className="filled-in" onChange={this.handlecheckbox} />
                <span>Mon</span>
              </label>
              <label>
                <input id="tue" type="checkbox" className="filled-in" onChange={this.handlecheckbox} />
                <span>Tue</span>
              </label>
              <label>
                <input id="wed" type="checkbox" className="filled-in" onChange={this.handlecheckbox} />
                <span>Wed</span>
              </label>
              <label>
                <input id="thu" type="checkbox" className="filled-in" onChange={this.handlecheckbox} />
                <span>Thu</span>
              </label>
              <label>
                <input id="fri" type="checkbox" className="filled-in" onChange={this.handlecheckbox} />
                <span>Fri</span>
              </label>
              <label>
                <input id="sat" type="checkbox" className="filled-in" onChange={this.handlecheckbox} />
                <span>Sat</span>
              </label>
            </p>
          </div>
          <div className="input-field">
            <input type="text" id='visitHr' onChange={this.handleChange} />
            <label htmlFor="visitHr">Visiting Hour</label>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">Save</button>
          </div>
        </form>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}
const mapDispatchToProps = dispatch => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)
