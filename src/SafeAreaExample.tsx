import React from "react";
import { SafeAreaView } from "react-native";
import { YoutubePlayer, ScreenContainer } from "react-native-video-extension";

export type SafeAreaExampleProps = {};

const SafeAreaExample = ({}: SafeAreaExampleProps) => (
  <ScreenContainer>
    {({ fullscreen }) => (
      <SafeAreaView
        style={{
          flex: 1,
          zIndex: fullscreen ? 1 : 0, // depends on your app
          ...(fullscreen && { backgroundColor: "#000" }),
        }}
      >
        <YoutubePlayer
          mode="contain"
          source={require("./assets/horizontal_video.mp4")}
          // source={{
          //   uri:
          //     "https://stream.mux.com/Tyu80069gbkJR2uIYlz2xARq8VOl4dLg3.m3u8",
          // }}
        />
      </SafeAreaView>
    )}
  </ScreenContainer>
);

export default SafeAreaExample;
