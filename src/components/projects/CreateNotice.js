import React, { Component } from 'react'
import { connect } from 'react-redux'
import { generateNotice } from '../../store/actions/noticeActions'
import { Redirect } from 'react-router-dom'
import firebase from "firebase";
//import FileUploader from "react-firebase-file-uploader";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
class CreateNotice extends Component {
  state = {
    dept: this.props.project ? this.props.project.dept : '',
    title: this.props.project ? this.props.project.title : '',
    Body1: this.props.project ? this.props.project.Body1 : '',
    displayon: this.props.project ? this.props.project.displayon : true,

    startDate: new Date(),
    endDate: new Date(),
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
  back = (e) => {
    e.preventDefault();
    this.props.history.push('/');
  }
  render() {
    console.log(this.props)

    const { auth, profile } = this.props;
    let link = null   
    let Enab=true
    // if (!auth.uid) return <Redirect to='/signin' />
    if (this.props.id === this.props.auth.uid) {
      link = <button className="btn green lighten-1">Save</button>;
      Enab=false
    }



    return (
      <div className="container section project-editing">
        <h5>Advertise   </h5>

        <div className="bg-img"> </div>
        <form className="black" onSubmit={this.handleSubmit}>

          <div className="card z-depth-0">
      <div > 
              {/* <div className="card-content" style={{ padding: '2px' }}>
              <div> <h6>Display from </h6>
                <DatePicker
                  selected={this.state.startDate}
                  onChange={this.handleDate}
                  showTimeSelect
                  dateFormat=" d -MM -yyyy h:mm aa"
                />
              </div>
              <div> <h6>Display to</h6>
                   <DatePicker
                  selected={this.state.endDate}
                  onChange={this.handleDate_end}
                  showTimeSelect
                  dateFormat="Pp"
                />
              </div>
    </div>*/}

              <div className="input-field ">
                <input disabled={Enab}type="text" id='dept' defaultValue={this.state.dept} onChange={this.handleChange} />
                <label className='active' htmlFor="dept">Target Group</label>
              </div>
              <div className="input-field ">
                <input disabled={Enab} type="text" id='title' defaultValue={this.state.title} onChange={this.handleChange} />
                <label className='active' htmlFor="title">Title</label>
              </div>
              {/* following for future use */}
              {/*<div>
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
            </div>*/}
              <div className="input-field ">
                <textarea  disabled={Enab} id='Body1' defaultValue={this.state.Body1} style={{ height: '10rem' }} onChange={this.handleChange} />
                <label className='active' htmlFor="Body1">Detail</label>
              </div>
            </div>
            <div className="input-field"> {link}
              <button className="btn pink lighten-1" onClick={this.back}>Back</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  let id = state.firebase.auth.uid
  if (ownProps.match.params.id) { id = ownProps.match.params.id }
  const projects = state.firestore.data.notice;
  const project = projects ? projects[id] : null
  console.log(state.firestore)
  return {
    project: project,
    id: id,
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}
const mapDispatchToProps = dispatch => {
  return {
    generateNotice: (project) => dispatch(generateNotice(project))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateNotice)
