import React, { Component } from 'react'
import UserSummary from './userSummary'
import { Link } from 'react-router-dom'
class DrList extends Component {
    render() {
        console.log(this.props)
        var _queryURL = window.location.href;
        var n = _queryURL.includes("dash_dr");
        if (this.props.projects.users.length > 0) {
            const links = !n ? <b><u>users List</u></b> : <b>All users List</b>;
           
            return (
                <div >
                     {links}
             
                    <div className="User-list section card ">
                        
                        {this.props.projects.users && this.props.projects.users.map(project => {
                           if(this.props.projects.profile.role=='admin'||this.props.projects.profile.role=='owner') return (
                                (project.role==='unknown')? <UserSummary project={project} /> :null 
                            )
                        })}
                        <p>Admin List</p>
                         {this.props.projects.users && this.props.projects.users.map(project => {
                           return (
                                (project.role==='admin'||project.role==='owner')? <UserSummary project={project} /> :null 
                            )
                        })}

                    </div>
                    
                </div>
            )
        } else {
            return (<div>No New Members
               
            </div>)
        }
    }
}
export default DrList