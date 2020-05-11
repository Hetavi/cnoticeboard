import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { upgradeActions } from '../../store/actions/upgradeActions'
import { Redirect } from 'react-router-dom'
import moment from 'moment'

{/* use for edit notice */ }

class NoticeDetails extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      Dept: this.props.project.Dept,
      docid: this.props.docid,
      firstname: this.props.firstName,
      email:this.props.project.email
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
    this.props.upgradeActions(this.state);
    this.props.history.push('/dash_user');
  }
 back = (e) => {
    e.preventDefault();
    this.props.history.push('/Dashboard_user_back');
  }
  
  render() {
   // if (!this.props.project) return <Redirect to='/dash_user' /> 
  
    //console.log(this.props)
    //console.log('this.state')
    let btnlink=null  
    //if (this.props.profile.identity='admin'){alert({this.props.profile.identity})}
   if(this.props.project.role==='unknown')
    if ((this.props.profile.role==='admin'||this.props.profile.role==='owner')){ btnlink= <button className="btn green lighten-1">Approved above person</button>}
    else{btnlink=null}
    const li="tel:+"
    const wa="https://api.whatsapp.com/send?phone="
    const li2=this.props.project.Mobile
    const link=li.concat(li2)
    const walink=wa.concat(li2)
   
    return (
     
      <div className="container section user-editing">
       
        {this.props.profile.role ? <h3>Users Details</h3> : <h3>Details</h3>}
        {<form className="teal" onSubmit={this.handleSubmit}>
          <div className="card">
            <div className="card-content" style={{ padding: '0px' }}>
              <div className="row">
                {/*  <span style={{ padding: '0px' }} className="col s6"> Dept:{this.props.project.dept}  </span>*/}
             
             Name: {this.props.project.firstName } {this.props.project.lastName} <b>{(this.props.project.role!=="")? <i class="small material-icons">verified_user</i>:<div>Approved if U know him/her?</div>}</b>
             <p>Dept:  {this.props.project.Dept } </p>
             <p>Mobile : <u><a  href={link}>   {this.props.project.Mobile }</a>  ,  <a  href={walink}>whatsapp</a></u></p>
             <p>Eamil:  {this.props.project.email } </p>
              </div>
            </div>
        {btnlink}
        <button className="btn pink lighten-1" onClick={this.back}>Back</button> <i>Approved by:{this.props.project.approvedby }</i> 
          </div>
        </form>}
      </div>
    )

  }
  //}
}
const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.users;
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
    upgradeActions: (project) => dispatch(upgradeActions(project))
  }
}
export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(NoticeDetails)
