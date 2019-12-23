import React from 'react';

const VideoPlayer = props => {
  const videoStyle = {
    margin: "2rem"
  }
  return (
    <div className="videoplayer">
      <video style={videoStyle} width="320" height="240" controls>
        <source src={props.video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
