import React, { Component } from 'react'
import MediaSummary from './mediaSummary'
import { Link } from 'react-router-dom'
class MediaList extends Component {
    render() {
        console.log(this.props.media)
        console.log('this.props.media')
        return (
            <div className="Media-list section">
                {this.props.media && this.props.media.map(media => {
                    return (
                        <MediaSummary media={media} />
                    )
                })
                }
            </div >
        )
    }
}
export default MediaList