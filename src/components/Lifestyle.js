import React from 'react';
import Video1 from '../video/video-1.mp4';
import Video2 from '../video/video-2.mp4';
import SectionHeader from './SectionHeader';
import VideoPlayer from './VideoPlayer';
import '../scss/Lifestyle.scss';

const Lifestyle = props => {
  return (
    <div id="lifestyle">
      <SectionHeader
        title="lifestyle"
        subtext="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
      />
      <div className="video-categories">
        <VideoPlayer video={Video1} />
        <VideoPlayer video={Video2} />
      </div>
    </div>
  );
};

export default Lifestyle;
