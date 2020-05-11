import React from 'react';
import YouTube from 'react-youtube';

const Youtube = (movie) => {
  const opts = {
    height: '100%',
    width: '100%',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 0
    }
  };
  function onPlayerReady(event) {
   
    var embedCode = event.target.getVideoEmbedCode();
   // event.target.playVideo();
    if (document.getElementById('embed-code')) {
      document.getElementById('embed-code').innerHTML = embedCode;
    }
  }
  //console.log(movie.movie)
  //console.log('movie')
  
  return (
    <div>
      <YouTube
       
        opts={opts}
      onReady={_onReady}
      videoId={movie.movie}
      onReady={onPlayerReady}
      /></div>
  );
 function  _onReady(event) {
   alert('ready')
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}
export default Youtube