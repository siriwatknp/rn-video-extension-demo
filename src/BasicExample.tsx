import React from "react";
import { FacebookPlayer } from "react-native-video-extension";

const BasicExample = () => (
  <FacebookPlayer
    mode={"contain"}
    source={require("./assets/horizontal_video.mp4")}
    initialPaused
  />
);

export default BasicExample;
