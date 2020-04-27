import React, { Component } from 'react'
import UserDash from './userDash0'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
const ListBoard = (props) => {
    console.log(props.lists)
    const {lists}=props
    if (props.lists) {
        return (
            <div><UserDash/></div>
        )
    } else {
        return (
            <div>
                Data avilable, check Internet...
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        lists: state.firestore.ordered.lists,
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect((state) => [
        // { collection: 'notice', where: [['displayon', '==', true],['dept','in',state.depts] ]},
        //,where:[['startDate','<',new Date(props.td)]]
        // { collection: 'notice', where: [['endDate', '>', new Date(props.td + (0 * 24 * 60 * 60 * 1000))]], orderBy: ['endDate', 'desc'] },
        // { collection: 'VisitingDr', where: [['visitday', 'array-contains', props.value]] },
        { collection: 'lists' }
    ]
    )
)(ListBoard)