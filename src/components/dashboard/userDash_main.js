import React, { Component } from 'react'
import UserDash from './userDash'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
const Dashboard = (props) => {
    console.log(props)
    if(props.history.action==='POP')return <Redirect to='/' /> 
      if (props.users) {
        return (<div><UserDash/></div>)
    }
    else {
      return (<div>xxxxxxx</div>)
    }
   
}
const mapStateToProps = (state) => { 
    return {
        users: state.firestore.ordered.users,
        auth: state.firebase.auth,
        profile: state.firebase.profile,
        depts: ['meth2', 'sport'],
        roles: ['admin', 'unknown','owner'],
        td: state.auth.td
    }
   
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect((state) => [

        // { collection: 'notice', where: [['displayon', '==', true],['dept','in',state.depts] ]},
        //,where:[['startDate','<',new Date(props.td)]]
        // { collection: 'notice', where: [['endDate', '>', new Date(props.td + (0 * 24 * 60 * 60 * 1000))]], orderBy: ['endDate', 'desc'] },
        // { collection: 'VisitingDr', where: [['visitday', 'array-contains', props.value]] },
        { collection: 'users',where:[['role','in',state.roles]] }
    ]
    )
)(Dashboard)