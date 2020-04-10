import React from 'react';
import YouTube from 'react-youtube';

const Youtube = (movie) => {
  const opts = {
    height: '100%',
    width: '100%',
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
  console.log(movie)
  console.log('movie')
  return (
    <div>
      <YouTube
        videoId="uqBtUsiKwXw"
        opts={opts}
     // onReady={_onReady}
      // onReady={this.onPlayerReady}
      /></div>
  );
 function  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}
export default Youtube