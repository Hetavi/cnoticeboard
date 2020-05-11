import React, { Component } from 'react'
import UserSummary from './userSummary'
import { Link } from 'react-router-dom'
class DrList extends Component {
    render() {
        //console.log(this.props)
        var _queryURL = window.location.href;
        var n = _queryURL.includes("dash_dr");
        var i = 0
        var bigi = '###*'
        var midd = '##*'
        var str = ''
        if (this.props.projects.users.length > 0) {
            const links = !n ? <b><u>users List</u></b> : <b>All users List</b>;
            return (
                <div >
                    {links}
                    <div className="User-list section card ">
                        <p>Approved users</p>
                        {this.props.projects.users && this.props.projects.users.map(project => {
                            var res = str.concat( project.Mobile, midd, project.firstName, ' ', project.lastName, midd,project.role,midd, project.Dept, midd,project.approvedby,midd,project.email,bigi);
                            str = res
                            i=i+1
                            //console.log(str)
                            if (this.props.projects.profile.role == 'admin' || this.props.projects.profile.role == 'owner') return (
                                (project.role === 'approved') ? <UserSummary project={project} /> : null
                            )
                        })
                        }
                       
                        <p>Admin List</p>
                        {this.props.projects.users && this.props.projects.users.map(project => {
                            return (
                                (project.role === 'admin' || project.role === 'owner') ? <UserSummary project={project} /> : null
                            )
                        })}
                          <input className='col s10' type="text" id='title' defaultValue={str}  />
          
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