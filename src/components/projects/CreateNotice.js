import React, { Component } from 'react'
import { connect } from 'react-redux'
import { generateNotice } from '../../store/actions/noticeActions'
import { Redirect } from 'react-router-dom'
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";
import DatePicker from 'react-date-picker';
class CreateNotice extends Component {
  state = {
    dept: '',
    title: '',
    Body1: '',
    Body2: '',
    Body3: '',
    displayon: true,
    startDate: new Date(),
    filenames: [],
    downloadURLs: [],
    isUploading: false,
    uploadProgress: 0
  }
 
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
    this.props.generateNotice(this.state);
    this.props.history.push('/');
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
        <h3>New Notice   </h3>
        <div className="bg-img"> </div>
        <form className="black" onSubmit={this.handleSubmit}>
          <div className="card z-depth-0">
            <div className="card-content" style={{ padding: '2px' }}>
              <label>
                <input id="displayon" type="checkbox" className='filled-in' onChange={this.handlecheckbox} />
                <span>Display On</span>
              </label>-
              <div>
        
      </div>
            </div>
            <div className="input-field ">
              <input type="text" id='dept' onChange={this.handleChange} />
              <label htmlFor="dept">Department</label></div>
            <div className="input-field ">
              <input type="text" id='title' onChange={this.handleChange} />
              <label htmlFor="title">title</label></div>
            <div>
              <FileUploader
                accept="image/*"
                name="image-uploader"
                randomizeFilename
                storageRef={firebase.storage().ref("images")}
                onUploadStart={this.handleUploadStart}
                onUploadError={this.handleUploadError}
                onUploadSuccess={this.handleUploadSuccess}
                onProgress={this.handleProgress}
                multiple
              />
              <p>Progress: {this.state.uploadProgress}-Filenames: {this.state.filenames.join(", ")}</p>
              <div>
                {this.state.downloadURLs.map((downloadURL, i) => {
                  return <img class="responsive-img" key={i} src={downloadURL} />;
                })}
              </div>
            </div>
            <div className="input-field ">
              <textarea id='Body1' style={{ height: '10rem' }} onChange={this.handleChange} />
              <label htmlFor="Body1">Para-1</label>
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
    generateNotice: (project) => dispatch(generateNotice(project))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateNotice)
