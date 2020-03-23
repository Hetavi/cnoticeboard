import React from 'react'
import moment from 'moment'
import Youtube from './Youtube'
const MediaSummary = ({ media }) => {
  console.log(media)
  return (
    <div className=" container ">
      today's video
      { <Youtube movie={media.youtubeID} />}
      <div style={{textAlign:'justify' }}>{media.description}</div>
    </div>
  )
}
export default MediaSummary
