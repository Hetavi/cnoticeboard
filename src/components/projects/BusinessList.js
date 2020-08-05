import React, { Component, useState, useEffect } from 'react'
import ReactDOM from "react-dom";
//import UserDash from './userDash0'
import BusinessCard from '../projects/businesscard'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
let ListBoard = (props) => {
    //console.log(props.lists ? Object.entries(props.lists) : 'aaaa')
    //console.log(props.lists?props.lists.length:'bbbb')
    console.log(props)
    const { lists } = props
    const [value, setList] = useState( '')
    const [Dd, setDd] = useState(Date(2018, 1, 1))
    const [updateOn, setupdateOn] = useState(false)
    var link = null
    if (props) {
        //if (value === 'xx') { props.profile.Dept ? setList(props.profile.Dept) : setList('') }
        // setDd((props.lists[0].createdAt).toDate())
        // console.log( JSON.stringify(props.lists[0]))
        var i;
        var ii
        var mylist1 = []
        var mylist=props.list//[]
        console.log(props.list.length)
        for (i = 0; i < (props.list.length); i++) {
            console.log(props.list[i])
             //mylist=mylist.concat(props.lists[i])
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
                   { /*<div className='col s4'><button onClick={all}>All</button></div>*/}
                </div>
                <Link to ={'/businessdata/1'}> <button>Add New Data</button></Link>
    
                {dr_array.map((person, index) => (
                    <div>
                    
                        <BusinessCard person={person} />
                    </div>
                ))}
            </div>
        } else { return <div>preparing</div> }
    } else { return <div>Wait for business List....</div> }
}

export default ListBoard