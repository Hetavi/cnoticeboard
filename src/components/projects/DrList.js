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
                     <div>
                     Call:
                     <a  href="tel:+912642203090"><u>Reg-Desk</u>  </a>
                        <a  href="tel:+912642203091"><u> Nursing </u></a>
                        <a  href="tel:+91264220309"> <u>Despenng </u></a>
                        <a  href="tel:+91264220304"><u>Bill-Help </u></a>
                        
                    </div>
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