import React, { Component } from 'react'
import DrSummary from './drSummary'
import DrSummaryall from './drSummaryall'
import { Link } from 'react-router-dom'
class DrList extends Component {
    render() {
        var _queryURL = window.location.href;
        var n = _queryURL.includes("dash_dr");
        if (this.props.VisitingDr.length > 0) {
            const links = !n ? <h5><u>Today's Visiting Dr</u></h5> : <h5>List Of Visiting Dr.</h5>;
            //console.log(this.props)
            return (
                <div >
                    {links}
                   
                    <div className="Dr-list section card ">
                        {this.props.VisitingDr && this.props.VisitingDr.map(project => {
                            return (
                                !n ?
                                    <DrSummary project={project} /> :
                                    (<Link to={'/edit_dr/' + project.id} key={project.id}>
                                        <DrSummaryall project={project} />
                                    </Link>)
                            )
                        })}
                    </div>
                </div>
            )
        } else {
            return (<div>No Visiting Dr. Today.
            </div>)
        }
    }
}
export default DrList