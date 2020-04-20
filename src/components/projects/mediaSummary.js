import React from 'react'
import moment from 'moment'
import Youtube from './Youtube'
const MediaSummary = ({ media }) => {
  console.log(media)
  return (
    <div  style={{marginBottom:'5px'}} className="card">

     <div style={{ margin:'5px',textAlign: 'justify', color: 'black' }}> {media.title}...(details)</div>
      {media.youtubeID ? <Youtube movie={media.youtubeID} /> : null}
    
    </div>
  )
}
export default MediaSummary
