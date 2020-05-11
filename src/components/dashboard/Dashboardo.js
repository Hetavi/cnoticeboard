import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import NoticeSummary1 from '../projects/noticeSummary'
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data1: this.props.projects,
      showing: true,
      days: '',
      t1: '',
      value: ''
    }
  }
  handleChange = event => {
    const { value } = event.target;
    this.setState({ value });
  };
  Button1 = () => {
    const { value } = "MECH";
    this.setState({ value });
  };
  render() {
    const { profile, projects, drlist, err, auth, value } = this.props;
    //console.log(this.state.auth)
    //console.log(profile)
    //console.log('profile')
    //if (!projects) return <Redirect to='/edit' />  
   
    if (projects) {
      let Reslt = this.props.projects.filter(
        (projet) => {
          return projet.dept.indexOf(this.state.value) !== -1 ||
            projet.title.indexOf(this.state.value) !== -1 ||
            projet.Body1.indexOf(this.state.value) !== -1
        }
      )
      //console.log('Reslt')
      //console.log(Reslt)
     
      return (
        <div className="dashboard container">
          
          {this.state.showing
            ? null
            : null
          }
          <div className="col s12">
            <h5 >
              <font color="yellow" >Search   </font>
              <div className="input-field inline">
                <input id="search" type="text" value={value} onChange={this.handleChange} />
                <label htmlFor="search" ><h6><font color="white">Dept/Title</font></h6></label>
              </div>
              {/* <label onClick={this.Button1} class="waves-effect waves-light btn-small">Mech </label>*/}
            </h5>
          </div>
          <div className="col s12 m6">
            {Reslt.map(project3 => {
              if (auth.uid) {
                return (<Link to={'/edit/' + project3.id} key={project3.id}>
                  < NoticeSummary1 project4={project3} />
                </Link>
                )
              }
              else {
                return (
                  <Link to={'/edit/' + project3.id} key={project3.id}>
                    < NoticeSummary1 project4={project3} />
                  </Link>
                )
              }
            })
            }
          </div>
        </div>
      )
    }
    else {
      return (
        <div className='container'>
          <div className="card">
            <div className='row'>
              <div className="card-image waves-effect waves-block waves-light col s3">
                <img style={{ width: '60%' }} src="/img/board.jpg" />
              </div>
              <div className="card-content col s9">
                <p>Here is some more information about this product that is only revealed once clicked on.</p>
                <p><a href="#">This is a link</a></p>
              </div>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-9">Card Title<i className="material-icons right">close</i></span>
            </div>
          </div>
          <div className="card">
            <div className='row'>
              <div className="card-image waves-effect waves-block waves-light col s3">
                <img src="/img/board.jpg" />
              </div>
              <div className="card-content col s9">
                <p>Here is some more information about this product that is only revealed once clicked on.</p>
                <p><a href="#">This is a link</a></p>
              </div>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-9">Card Title<i className="material-icons right">close</i></span>
            </div>
          </div>
          <div className="col s12 m7">
            <h2 className="header">Horizontal Card</h2>
            <div className="card horizontal">
              <div className="card-image col s4">
                <img style={{ width: '100%' }} src="/img/board.jpg" />
              </div>
              <div className="card-stacked col s8">
                <div className="card-content">
                  <p>I am a very simple card. I am good at containing small bits of information.<a href="#">This is a link</a></p>
                </div>
                <div className="card-action">
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
  
}
const mapStateToProps = (state) => {
  // //console.log('dashbord--.js mapStateToProps')
  let dayn = new Date().getDay()
  let daynm = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
  //console.log(daynm)
  const dayname = daynm[dayn]
  const t1 = true
  return {
    projects: state.firestore.ordered.notice,
    drlist: state.firestore.ordered.VisitingDr,
    auth: state.firebase.auth,
    dayname: dayname,
    t1: t1
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) => [
    { collection: 'notice', where: [['displayon', '==', true]] },
    { collection: 'VisitingDr', where: [['visitday', 'array-contains', props.dayname]] }
  ])
)(Dashboard)
