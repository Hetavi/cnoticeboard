import React, { Component } from 'react'
import { connect } from 'react-redux'
import { generateMedia } from '../../store/actions/mediaActions'
import { Redirect } from 'react-router-dom'
import firebase from "firebase";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//import FileUploader from "react-firebase-file-uploader";
class CreateNotice extends Component {
  state = {
    title: '',
    description: '',
    youtubeID: '',
    startDate: new Date(),
    endDate: new Date(),
    //followings are for futre use
    filenames: [],
    downloadURLs: [],
    isUploading: false,
    uploadProgress: 0
  }
  handleDate = date => {
    this.setState({
      startDate: date
    });
  };
  handleDate_end = date => {
    this.setState({
      endDate: date
    });
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
    console.log(e.target.value)
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
    this.props.generateMedia(this.state);
    this.props.history.push('/admin');
  }
  handleUploadStart = () =>
    this.setState({
      isUploading: true,
      uploadProgress: 0
    });
  handleProgress = progress =>
    this.setState({
      uploadProgress: progress
    });
  handleUploadError = error => {
    this.setState({
      isUploading: false
      // Todo: handle error
    });
    console.error(error);
  };
  handleUploadSuccess = async filename => {
    const downloadURL = await firebase
      .storage()
      .ref("images")
      .child(filename)
      .getDownloadURL();
    this.setState(oldState => ({
      filenames: [...oldState.filenames, filename],
      downloadURLs: [...oldState.downloadURLs, downloadURL],
      uploadProgress: 100,
      isUploading: false
    }));
  };
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />
    return (
      <div className="container section project-editing">
        <h5>Add Media Clip   </h5>
        <div className="bg-img"> </div>
        <form onSubmit={this.handleSubmit}>
          <div className="card z-depth-0">
            <div className="card-content" style={{ padding: '2px' }}>
              <div>
              </div>
            </div>
            <div className="input-field ">
              <input type="text"  id='title' onChange={this.handleChange} />
              <label htmlFor="title">Title</label>
            </div>
            <div>
            </div>
            <div className="input-field ">
              <input type="text" id='youtubeID' onChange={this.handleChange} />
              <label htmlFor="youtubeID">You Tube ID</label>
            </div>
            <div className="input-field ">
              <textarea id='description' style={{ height: '3rem' }} onChange={this.handleChange} />
              <label class='active' htmlFor="description">Description</label>
            </div>
            <div> <span>Display from </span>
              <DatePicker
                selected={this.state.startDate}
                onChange={this.handleDate}
                showTimeSelect
                dateFormat="Pp"
              />
            </div>
            <div><span> Display   to   </span>
            <DatePicker
                selected={this.state.endDate}
                onChange={this.handleDate_end}
                showTimeSelect
                dateFormat="Pp"
              />
            </div>
            <div className="input-field">
              <button className="btn pink lighten-1">Save</button>
            </div>
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
    generateMedia: (project) => dispatch(generateMedia(project))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateNotice)
