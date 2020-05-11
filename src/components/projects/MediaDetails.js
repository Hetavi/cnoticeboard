import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
///import { editMediaActions } from '../../store/actions/editMediaActions'
import { Redirect } from 'react-router-dom'
import moment from 'moment'
{/* use for edit Media */ }
class MediaDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.media.title,
      docid: this.props.docid,
    }
  }
  handleChange = (e) => {
    //console.log(this.state.data)
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    //console.log(this.state)
    //this.props.editMediaActions(this.state);
    this.props.history.push('/');
  }
  render() {
    //if (!auth.uid) return <Redirect to='/signin' /> 
    //console.log(this.props.auth.id)
    //console.log('this.state')
    return (
      <div disable className="container section media-editing">
        {this.props.auth.uid ? <h3>Edit NEWS</h3> : <h3>NEWS</h3>}
        <form className="black" onSubmit={this.handleSubmit}>
          <div className="card z-depth-0">
            <div className="row"> <h5 className='col s2' htmlFor="title">Title</h5>
              <input className='col s10' type="text" id='title' defaultValue={this.state.title} onChange={this.handleChange} />
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
  const medias = state.firestore.data.media;
  const media = medias ? medias[id] : null
  return {
    docid: id,
    media: media,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps)
)(MediaDetails)
