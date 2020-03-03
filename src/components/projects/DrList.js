import React, { Component } from 'react'
import DrSummary from './drSummary'
import { Link } from 'react-router-dom'
class DrList extends Component {
    render() {
        return (
            <div className="Dr-list section">
                {this.props.VisitingDr && this.props.VisitingDr.map(project => {
                    return (
                        <Link to={'/dr/' + project.id} key={project.id}>
                        <DrSummary project={project} />
                      </Link>
                    )
                })}
            </div>
        )
    }
}
export default DrList