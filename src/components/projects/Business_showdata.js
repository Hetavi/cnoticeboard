import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import firebase from "firebase";
import { generateBusiness } from '../../store/actions/businessActions'
import FileUploader from "react-firebase-file-uploader";
//import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import one from "./imgs/1.jpg";
import two from "./imgs/1.jpg";
import three from "./imgs/1.jpg";
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
      filenames: this.props.data.filenames ? this.props.data.filenames : [],
      downloadURLs: this.props.data.downloadURLs ? this.props.data.downloadURLs : [],
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
      fullWidth:true,
      indicators: true,
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
        <div >
          <div className="container section project-editing">
          
              <div
                ref={Carousel => {
                  this.Carousel = Carousel;
                }}
                className="carousel "
              >
               <a className="carousel-item">
                  <img alt="1" src={one} />
                </a>
                <a className="carousel-item">
                  <img alt="2" src={two} />
                </a>
                <a className="carousel-item">
                  <img alt="3" src={three} />
                </a>
                
              </div>
            
            <div className="col s12">
              <div>Advertise by  {this.props.data ? this.props.data.authorFirstName : 'You'}
              </div>
              <h5>{this.state.bName}</h5>
              <h6>{this.state.bOwner}</h6>
              <h6>{this.state.bPhone}</h6>
              {this.state.bProducts}
              <p class="flow-text">{this.state.bAddress}</p>
            </div>
            {/* following for future use */}
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1" onClick={this.back}>Back</button>
          </div>
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
