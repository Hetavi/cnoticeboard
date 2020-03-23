import React, { Component } from 'react'
import DrSummary from './drSummary'
import DrSummaryall from './drSummaryall'
import { Link } from 'react-router-dom'
class DrList extends Component {
    render() {
        var _queryURL = window.location.href;
        var n = _queryURL.includes("dash_dr");
        if (this.props.VisitingDr.length > 0) {
            const links = !n ? <b><u>Today's Visiting Dr</u></b> : <b>List Of Visiting Dr.</b>;
            console.log(this.props)
            return (
                <div >
                     {links}
                     <div>{/*<font color='blue'>CALL</font>*/}
                     Call:
                     <a  href="tel:+912642203090"> Reg-Desk </a>
                        <a  href="tel:+912642203091"> Nursing</a>
                        <a  href="tel:+91264220309"> Despenng</a>
                        <a  href="tel:+91264220304"> Bill-Help</a>
                    </div>
                    <div className="Dr-list section ">
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