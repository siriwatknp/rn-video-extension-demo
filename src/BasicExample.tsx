import React from 'react';
import {YoutubePlayer} from 'react-native-video-extension';

const BasicExample = () => (
  <YoutubePlayer
    mode={'contain'}
    source={require('./horizontal_video.mp4')}
    initialPaused
  />
);

export default BasicExample;
