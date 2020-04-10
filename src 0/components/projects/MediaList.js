import React, { Component } from 'react'
import MediaSummary from './mediaSummary'
import { Link } from 'react-router-dom'
class MediaList extends Component {
    render() {
        console.log(this.props.media)
        console.log('this.props.media')
        return (
            <div className="Media-list ">
                
                {this.props.media && this.props.media.map(media => {
                    return (
                        <Link   to={'/edit_media/' + media.id} key={media.id}>
                        <MediaSummary media={media} />
                        </Link>
                    )
                })
                }
            </div >
        )
    }
}
export default MediaList