import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { editHospActions } from '../../store/actions/editHospActions'
import { Redirect } from 'react-router-dom'
import moment from 'moment'

class HospDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: this.props.project?this.props.project.city:'',
      hospName: this.props.project?this.props.project.hospName:'',
      address: this.props.project?this.props.project.adress:'',
      sp: this.props.project?this.props.project.sp:'',
      phone1: this.props.project?this.props.project.phone1:'',
      phone2: this.props.project?this.props.project.phone2:'',
      docid: this.props.docid?this.props.docid:'',
      // downloadURLs: this.props.downloadURLs,
      // displayon: this.props.project.displayon
    }
  }
  handleChange = (e) => {
    //console.log(this.state.data)
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handlecheckbox = (e) => {
    //console.log(this.state.displayon)
    if (e.target.checked) {
      this.setState({ displayon: true })
    }
    else {
      this.setState({ displayon: false });
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    //console.log(this.state.displayon);
    hospName: this.state.hospName.trim();
    city: this.state.city.trim();
    this.props.editHospActions(this.state);
    this.props.history.push('/dash_hosp');
  }
  back = (e) => {
    e.preventDefault();
    this.props.history.push('/dash_hosp');
  }
  render() {
    //if (!auth.uid) return <Redirect to='/signin' /> 
    if(this.props.history.action==='POP')return <Redirect to='/' /> 
  
    //console.log(this.props)
    //console.log('this.state')
    let btnlink = null
    let Enab = true
    if (this.props.profile.isEmpty === true) { Enab = true }
    else {
      if (this.props.profile.role === 'admin' || this.props.profile.role ==='owner') {
        btnlink = <button className="btn green lighten-1">Save</button>;
        Enab = false
      } else { Enab = true }
    }

    return (

      <div className="container">
      <form className="black" onSubmit={this.handleSubmit}>
      <div className="card z-depth-0">
        <h5 className="grey-text text-darken-3"> Hospital </h5>
        <div className="input-field">
          <input disabled={Enab} type="text" id='city' defaultValue={this.state.city} onChange={this.handleChange} />
         
        </div>
        <div className="input-field">
          <input disabled={Enab} type="text" id='hospName' defaultValue={this.state.hospName} onChange={this.handleChange} />
          </div>
        <div className="input-field">
          <input disabled={Enab} type="text" id='sp' defaultValue={this.state.sp} onChange={this.handleChange} />
          <label  className="grey-text text-darken-3 active" htmlFor="sp">Speciality</label>
        </div>
        <div className="row col s12 ">
          <div className='input-field col s6'>
            <input disabled={Enab} type="number" id='phone1' defaultValue={this.state.phone1} onChange={this.handleChange} />
            <label  className="grey-text text-darken-3 active" htmlFor="phone1">Phone 1</label>
          </div>
          <div className='input-field col s6'>
            <input disabled={Enab} type="number" id='phone2' defaultValue={this.state.phone2} onChange={this.handleChange} />
            <label  className="grey-text text-darken-3 active" htmlFor="phone2">Phone 2</label>
          </div>
        </div>
        <div className="input-field">
          <textarea disabled={Enab} id='adress' style={{ height: '3rem' }} defaultValue={this.state.address} onChange={this.handleChange} />
          <label className='active' htmlFor="adress">Address</label>
        </div>
        {btnlink}
            <button className="btn pink lighten-1" onClick={this.back}>Back</button> <i>Added by:{this.props.project.authorFirstName} {this.props.project.authorLastName}</i>
        
        </div>
      </form>
    </div>
    )
  }
  //}
}
const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.hosp;
  const project = projects ? projects[id] : null
  return {
    docid: id,
    project: project,
    profile: state.firebase.profile,
    auth: state.firebase.auth
  }
}
const mapDispatchToProps = dispatch => {
  return {
    editHospActions: (project) => dispatch(editHospActions(project))
  }
}
export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(HospDetails)
