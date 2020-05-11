import React, { Component } from 'react'
import UserDash from './userDash'
import Temp from './temp'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
const Dashboard = (props) => {
    console.log(props)
    //if(props.history.action==='POP')return <Redirect to='/' /> 
      if (props.users) {
       if( props.profile.email==='visharaddhruv@gmail.com'){
        return (<div><Temp projects={props.users}/></div>)}
       else{
       return (<div><UserDash projects={props.users}/></div>)}
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
         roles: [ 'unknown','admin'],
       // roles: ['admin', 'unknown','owner','approved'],
        td: state.auth.td
    }
   
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect((state) => [
      //  { collection: 'users',limit:3}
        { collection: 'users',orderBy: ['firstName', 'asc']}
    ]
    )
)(Dashboard)