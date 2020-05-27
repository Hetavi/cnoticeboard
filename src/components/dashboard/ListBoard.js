import React, { Component, useState, useEffect } from 'react'
import ReactDOM from "react-dom";
import UserDash from './userDash0'
import UserList0 from '../projects/UserList0'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
let ListBoard = (props) => {
    //console.log(props.lists ? Object.entries(props.lists) : 'aaaa')
    //console.log(props.lists?props.lists.length:'bbbb')
    console.log(props)
    const { lists } = props
    const [value, setList] = useState(props.profile.Dept ? props.profile.Dept : 'xx')
    const [Dd, setDd] = useState(Date(2018, 1, 1))
    const [updateOn, setupdateOn] = useState(false)
    var link = null
    if (props.lists) {
        if (value === 'xx') { props.profile.Dept ? setList(props.profile.Dept) : setList('') }
        // setDd((props.lists[0].createdAt).toDate())
        // console.log( JSON.stringify(props.lists[0]))
        var i;
        var ii
        var mylist1 = []
        var mylist=[]
        console.log(props.lists.length)
        for (i = 0; i < (props.lists.length); i++) {
            console.log(props.lists[i].list_arr)
             mylist=mylist.concat(props.lists[i].list_arr)
        }
        //console.log(mylist)
        if (mylist) {
            const handleChange = event => {
                // const { value1 } = event.target;
                setList(event.target.value)
                // console.log(event.target.value)
            };
            const all = e => {
                setList('')
            }
            let dr_array = mylist.filter(
                (dr_elements) => {
                    return dr_elements.toLowerCase().indexOf(value.toLowerCase()) !== -1
                }
            )
            if (!updateOn) {
               // setupdateOn('List updated on: ' + (props.lists[0].createdAt).toDate().toString())
                // alert('List updated on: '+(props.lists[0].createdAt).toDate().toString())
            }
            // console.log(dr_array)
            return <div>
                <div className='row'>
                    {updateOn}
                    <div className="input-field col s8">
                        <i className="material-icons prefix">search</i>
                        <input id="search1" defaultValue={value} type="text" onChange={handleChange} />
                    </div>
                    <div className='col s4'><button onClick={all}>All</button></div>
                </div>
                {dr_array.map((person, index) => (
                    <div>
                        <UserList0 person={person} />
                    </div>
                ))}
            </div>
        } else { return <div>preparing</div> }
    } else { return <div>Wait....</div> }
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        lists: state.firestore.ordered.usersarray,
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}
export default compose(
    connect(mapStateToProps)
)(ListBoard)