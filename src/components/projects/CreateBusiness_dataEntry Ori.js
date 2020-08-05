import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import firebase from "firebase";
import { generateBusiness } from '../../store/actions/businessActions'
import FileUploader from "react-firebase-file-uploader";
//import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import M from "materialize-css";

class DataEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bId: this.props.data ? this.props.data.bId : null,
      bName: this.props.data ? this.props.data.bName : '',
      bProducts: this.props.data ? this.props.data.bProducts : '',
      bOwner: this.props.data ? this.props.data.bOwner : '',
      bAddress: this.props.data ? this.props.data.bAddress : '',
      bPhone: this.props.data ? this.props.data.bPhone : '',
      //bAuthorFirstName:this.props.profile.firstName,
      filenames:this.props.data.filenames ? this.props.data.filenames :  [],
      downloadURLs:this.props.data.downloadURLs ? this.props.data.downloadURLs:  [],
      isUploading: false,
      uploadProgress: 0
    }
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
    //console.log(e.target.value)
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
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.generateBusiness(this.state);
    console.log(this.state)
    //this.props.history.push('/');
  }
  componentDidMount() {
    const options = {
      duration: 300,
      indicators:true,
      numVisible:10,
      fullWidth:false,
      onCycleTo: () => {
        console.log("New Slide");
      }
    };
    M.Carousel.init(this.Carousel, options);
  }
  render() {
    //if(this.props.history.action==='POP')return <Redirect to='/' /> 
    console.log(this.props.data.downloadURLs.length)
    console.log(this.state);
    const { auth, profile } = this.props;
    let link = null
    let Enab = true
    link = <button className="btn green lighten-1">Save</button>;
    Enab = false;
    if (this.state.bName) {
      return (
        <div className="container section project-editing">
          <h5>Details:  </h5>
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
                <div
                  ref={Carousel => {
                    this.Carousel = Carousel;
                  }}
                  className="carousel"
                >
                  {this.props.data.downloadURLs.length<1?
                  <a className="carousel-item">
                  <img alt="2" src={'two'} />
                </a>:null}
                  {this.props.data.downloadURLs.map(
                    (value, index) => {
                      return ( <a className="carousel-item">
                    <img  alt={index.toString} src={this.props.data.downloadURLs[index]} />
                  </a>)
                    }
                  )}
                 
                </div>
                <div className='row'>
                  {/* <div className="input-field col s3 ">
                  <input disabled={Enab} type="text" id='dept' defaultValue={this.state.dept} onChange={this.handleChange} />
                  {this.state.dept ? null : <label htmlFor="dept">Group</label>}
  </div>*/}
                  <div className="col s12">
                    <div>Advertise by  {this.props.project ? this.props.project.authorFirstName : 'You'} {this.props.project ? this.props.project.authorLastName : ''}
                    </div>
                    <label  >
                      <input id="displayon" type="checkbox" checked={this.state.displayon} className='filled-in' onChange={this.handlecheckbox} />
                      <span>Display</span>
                    </label>
                    <div className="input-field" >
                      <input disabled={Enab} type="text" id='bName' defaultValue={this.state.bName} onChange={this.handleChange} />
                      {this.state.bName ? null : <label htmlFor="bName">Name</label>}
                    </div>
                    <div className="input-field" >
                      <input disabled={Enab} type="text" id='bOwner' defaultValue={this.state.bOwner} onChange={this.handleChange} />
                      {this.state.bOwner ? null : <label htmlFor="bOwner">Owner</label>}
                    </div>
                    <div className="input-field" >
                      <input disabled={Enab} type="text" id='bPhone' defaultValue={this.state.bPhone} onChange={this.handleChange} />
                      {this.state.bPhone ? null : <label htmlFor="bPhone">Phone</label>}
                    </div>
                    <br />
                    <br />
                    <div className="input-field ">
                      <textarea disabled={Enab} id='bProducts' defaultValue={this.state.bProducts} style={{ height: '4rem', textAlign: 'justify', lineHeight: '1.6rem' }} onChange={this.handleChange} />
                      {this.state.bProducts ? null : <label className='active' htmlFor="bProducts">Products and Brands</label>}
                    </div>
                    <div className="input-field ">
                      <textarea disabled={Enab} id='bAddress' defaultValue={this.state.bAddress} style={{ height: '4rem', textAlign: 'justify', lineHeight: '1.6rem' }} onChange={this.handleChange} />
                      {this.state.bAddress ? null : <label className='active' htmlFor="bAddress">Address</label>}
                    </div>
                  </div>
                </div>
                {/* following for future use */}
                <div>
                  <FileUploader
                    accept="image/*"
                    name="image-uploader"
                    randomizeFilename
                    storageRef={firebase.storage().ref("images")}
                    // onUploadStart={this.handleUploadStart}
                    onUploadError={this.handleUploadError}
                    onUploadSuccess={this.handleUploadSuccess}
                    onProgress={this.handleProgress}
                    multiple
                  />
                  {/* <p>Progress: {this.state.uploadProgress}-Filenames: {this.state.filenames.join(", ")}</p>
           */}   <div>
                    {this.state.downloadURLs.map((downloadURL, i) => {
                      return <img class="responsive-img" key={i} src={downloadURL} />;
                    })}
                  </div>
                </div>
              </div>
              <div className="input-field"> {link}
                <button className="btn pink lighten-1" onClick={this.back}>Back</button>
              </div>
            </div>
          </form>
        </div>
      )
    } else { return <h3>Data not availble</h3> }
  }
}
const mapDispatchToProps = dispatch => {
  return {
    generateBusiness: (project) => dispatch(generateBusiness(project))
  }
}
export default compose(connect(null, mapDispatchToProps),
)
  (DataEntry)
