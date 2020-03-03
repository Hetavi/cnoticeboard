import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { editNoticeActions } from '../../store/actions/editNoticeActions'
import { Redirect } from 'react-router-dom'
import moment from 'moment'
{/* use for edit notice */ }
class NoticeDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dept: this.props.project.dept,
      title: this.props.project.title,
      Body1: this.props.project.Body1,
      Body2: this.props.project.Body2,
      Body3: this.props.project.Body3,
      docid: this.props.docid,
      downloadURLs: this.props.downloadURLs,
      displayon: this.props.project.displayon
    }
  }
  handleChange = (e) => {
    console.log(this.state.data)
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handlecheckbox = (e) => {
    console.log(this.state.displayon)
    if (e.target.checked) {
      this.setState({ displayon: true })
    }
    else {
      this.setState({ displayon: false });
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.displayon)
    this.props.editNoticeActions(this.state);
    this.props.history.push('/');
  }
  render() {
    //if (!auth.uid) return <Redirect to='/signin' /> 
    //if (project) {xx
    console.log(this.props)
    console.log('this.state')
    return (
      <div className="container section project-editing">
        {this.props.auth.uid ? <h3>Edit Notice</h3> : <h3>Notice</h3>}
        <form className="black" onSubmit={this.handleSubmit}>
          <div className="card z-depth-0">
            <div className="card-content" style={{ padding: '0px' }}>
              <div className="row">
                <label className="col s4" style={{ display: (this.props.auth.uid ? 'block' : 'none') }}>
                  <input id="displayon" type="checkbox" checked={this.state.displayon} className='filled-in' onChange={this.handlecheckbox} />
                  <span>Display On</span>
                </label>
                <span style={{ padding: '0px' }} className="col s6"> Dept:{this.props.project.dept}  </span>
              </div>
            </div>
            <div className="row"> <h5 className='col s2' htmlFor="title">Title</h5>
              <input className='col s10' type="text" id='title' defaultValue={this.state.title} onChange={this.handleChange} />
             
            </div>
            {this.props.project.downloadURLs ? <div className='row' >
              {this.props.project.downloadURLs.map((downloadURL, i) => {
                return <img className="responsive-img col s6 m6" key={i} src={downloadURL} />;
              })}
            </div> : null}
            <div className="input-field ">
              <textarea id='Body1' style={{ height: '15rem' }} defaultValue={this.state.Body1} onChange={this.handleChange} />
              <label className='active' htmlFor="Body1">Para-1</label>
            </div>
            <div style={{ display: (this.props.auth.uid ? 'block' : 'none') }} className="input-field">
              <button className="btn pink lighten-1">Save</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
  //}
}
const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.notice;
  const project = projects ? projects[id] : null
  return {
    docid: id,
    project: project,
    auth: state.firebase.auth
  }
}
const mapDispatchToProps = dispatch => {
  return {
    editNoticeActions: (project) => dispatch(editNoticeActions(project))
  }
}
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{
    collection: 'projects'
  }])
)(NoticeDetails)
