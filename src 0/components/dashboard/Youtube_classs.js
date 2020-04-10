import React from 'react';
import YouTube from 'react-youtube';
class Youtube extends React.Component {
  render() {
    const opts = {
      height: 'Auto',
      width: 'Auto',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
    function onPlayerReady(event) {
        var embedCode = event.target.getVideoEmbedCode();
        event.target.playVideo();
        if (document.getElementById('embed-code')) {
          document.getElementById('embed-code').innerHTML = embedCode;
        }
      }
    return (
        <div>
      <YouTube
        videoId="2g811Eo7K8U"
        opts={opts}
        onReady={this._onReady}
       // onReady={this.onPlayerReady}
      /></div>
    );
  }
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
  
}
export default Youtube