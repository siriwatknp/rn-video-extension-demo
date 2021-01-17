import React, { useEffect } from "react";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
  SafeAreaView,
} from "react-native-safe-area-context";
import { FlatList } from "react-native";
import {
  FacebookPlayer,
  ScreenContainer,
  connectUseInsets,
} from "react-native-video-extension";
import { MoreVideo } from "./components/PostContent";

// Should call connect here!
// Don't call it inside the component
connectUseInsets(useSafeAreaInsets);

const ConnectInsetsExample = () => {
  return (
    <SafeAreaProvider>
      <ScreenContainer
      // ScreenContainer store some state that we can hook in
      // ex, fullscreen, seeking, consoleHidden, loading
      >
        {({ fullscreen, seeking }) => {
          return (
            <SafeAreaView
              style={{
                flex: 1,
                zIndex: fullscreen ? 1 : 0, // depends on your app
                backgroundColor: fullscreen ? "#000" : "#fff",
              }}
            >
              <FlatList
                data={[...Array(8)]}
                ListHeaderComponent={
                  <FacebookPlayer
                    mode="contain"
                    source={require("./assets/horizontal_video.mp4")}
                    // source={{
                    //   uri:
                    //     "https://stream.mux.com/Tyu80069gbkJR2uIYlz2xARq8VOl4dLg3.m3u8",
                    // }}
                  />
                }
                ListHeaderComponentStyle={{ flex: 1 }}
                keyExtractor={(item, index) => index.toString()}
                renderItem={() => (fullscreen ? null : <MoreVideo />)}
                // disable scrolling inside scroll view while in fullscreen or seeking
                scrollEnabled={!fullscreen && !seeking}
                style={{ flex: 1 }}
                // need to stretch with flex: 1 when fullscreen
                // because VideoPlayer will be absolute
                contentContainerStyle={{
                  flex: fullscreen ? 1 : 0,
                }}
              />
            </SafeAreaView>
          );
        }}
      </ScreenContainer>
    </SafeAreaProvider>
  );
};

export default ConnectInsetsExample;
