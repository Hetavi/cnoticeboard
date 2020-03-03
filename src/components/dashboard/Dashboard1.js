import React, { Component } from 'react'

import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import NoticeSummary1 from '../projects/noticeSummary'
class Dashboard1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data1: this.props.projects,
      showing: true,
      days: '',
      value: ''
    }
  }
  handleChange = event => {
    const { value } = event.target;
    this.setState({ value });
  };
  render() {
    const { projects, err, auth, value } = this.props;
    // console.log(this.state)
    console.log(this.props)
    console.log('auth')
    //if (!projects) return <Redirect to='/edit' />  
    if (projects) {
      let Reslt = this.props.projects.filter(
        (projet) => { return projet.dept.indexOf(this.state.value) !== -1 || projet.title.indexOf(this.state.value) !== -1 }
      )
      console.log('Reslt')
      console.log(Reslt)
      return (
        <div className="dashboard container">
          {this.state.uid ? null: null    }
          <div >
            {/*  <div className="col s12 m2">
                            <Notifications notifications={notifications} />
                    </div>
                          <div className="col s12 m2">
                            <ProjectList projects={projects} />
             
            </div> */}
            <div className="row">
              <div className="col s12">
             <h3 > <font color="yellow" >Search   </font> 
                    <div className="input-field inline">
                  <input   id="search" type="text" value={value} onChange={this.handleChange}  />
                    <label htmlFor="search"><h6><font color="white">Dept/Title</font></h6></label>
                 
                </div>
                </h3>
              </div>
            </div>
            <div className="col s12 m6">
              {Reslt.map(project3 => {
                if (auth.uid) {
                  return (<Link to={'/edit/' + project3.id} key={project3.id}>
                    < NoticeSummary1 project4={project3} />
                  </Link>)
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
        </div>
      )
    }
    else {
      return (<h4>Please wait...</h4>)
    }
  }
}
const mapStateToProps = (state) => {
  console.log('dashbord--.js mapStateToProps')

  return {
    projects: state.firestore.ordered.notice,
    auth: state.firebase.auth
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) => [
    { collection: 'notice', where: [['displayon', '==', false]] }
    //{ collection: 'notice', where: [['visitday', 'array-contains', props.dayname]] }
  ])
)(Dashboard1)
