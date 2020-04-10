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
             
                    <div className="Dr-list section card ">
                        {this.props.projects.users && this.props.projects.users.map(project => {
                            return (
                                (this.props.projects.profile.role=='admin')? <UserSummary project={project} /> :<UserSummary project={project} />
                            )
                        })}
                    </div>
                    
                </div>
            )
        } else {
            return (<div>dara not availbale.
               
            </div>)
        }
    }
}
export default DrList