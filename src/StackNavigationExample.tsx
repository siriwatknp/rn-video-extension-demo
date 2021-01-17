import React, { useEffect } from "react";
import { ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import {
  ScreenContainer,
  useVideoCtx,
  YoutubePlayer,
} from "react-native-video-extension";
import PostContent from "./components/PostContent";

type RootStackParamList = {
  Home: undefined;
};
type NavigationExampleProps = {
  navigation: StackNavigationProp<RootStackParamList, "Home">;
};

const Stack = createStackNavigator();

const HeaderAdjustment = ({ navigation }: NavigationExampleProps) => {
  const { fullscreen } = useVideoCtx();
  useEffect(() => {
    navigation.setOptions({
      gestureEnabled: false,
    });
    navigation.setOptions({ headerShown: !fullscreen });
  }, [fullscreen, navigation]);
  return null;
};

const Home = ({ navigation }: NavigationExampleProps) => (
  <ScreenContainer>
    {/* If you want to wrap with View, don't forget to add flex: 1 or flexGrow: 1 */}
    <HeaderAdjustment navigation={navigation} />
    <YoutubePlayer
      mode="auto-fit"
      source={require("./assets/horizontal_video.mp4")}
      // source={{
      //   uri: "https://stream.mux.com/Tyu80069gbkJR2uIYlz2xARq8VOl4dLg3.m3u8",
      // }}
    />
    <ScrollView style={{ flex: 1 }}>
      <PostContent />
    </ScrollView>
  </ScreenContainer>
);

const StackNavigationExample = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default StackNavigationExample;
