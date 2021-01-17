/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import { Colors } from "react-native/Libraries/NewAppScreen";
import BasicExample from "./src/BasicExample";
import SafeAreaExample from "./src/SafeAreaExample";
import ScrollViewExample from "./src/ScrollViewExample";
import FlatListExample from "./src/FlatListExample";
import ConnectInsetsExample from "./src/ConnectInsetsExample";
import { connectUseInsets } from "react-native-video-extension";

declare const global: { HermesInternal: null | {} };

const SCREENS = [
  "Basic",
  "SafeArea",
  "ScrollView",
  "FlatList",
  "ConnectInsets",
  "Navigation",
  "MuxData",
] as const;

const App = () => {
  const [screen, setScreen] = useState<typeof SCREENS[number] | null>(null);
  // this useEffect is for demo purpose only
  // don't use it in your application
  useEffect(() => {
    if (screen === 'ConnectInsets') {
      connectUseInsets(useSafeAreaInsets);
      return () => {
        connectUseInsets(() => {
          useSafeAreaInsets();
          return undefined;
        });
      };
    }
  }, [screen]);
  // ---------------------------------------
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
      {global.HermesInternal == null ? null : (
        <View style={styles.engine}>
          <Text style={styles.footer}>Engine: Hermes</Text>
        </View>
      )}
      {!screen && (
        <View
          style={{
            flex: 1,
            width: "100%",
            justifyContent: "center",
            padding: 16,
          }}
        >
          {SCREENS.map((screen) => (
            <TouchableOpacity
              key={screen}
              style={{ ...styles.btn, marginBottom: 16 }}
              onPress={() => setScreen(screen)}
            >
              <Text style={styles.text}>{screen}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
      {screen === "Basic" && <BasicExample />}
      {screen === "SafeArea" && <SafeAreaExample />}
      {screen === "ScrollView" && <ScrollViewExample />}
      {screen === "FlatList" && <FlatListExample />}
      {screen === "ConnectInsets" && <ConnectInsetsExample />}
      {screen && (
        <TouchableOpacity
          onPress={() => setScreen(null)}
          style={{
            ...styles.btn,
            ...styles.back,
          }}
        >
          <Text style={styles.text}>Back to Main</Text>
        </TouchableOpacity>
      )}
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  engine: {
    position: "absolute",
    right: 0,
  },
  btn: {
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 16,
    width: "100%",
    backgroundColor: "tomato",
  },
  back: {
    position: "absolute",
    bottom: 48,
    left: "30%",
    right: "30%",
    width: "auto",
    backgroundColor: "tomato",
    marginHorizontal: 16,
  },
  text: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: "600",
    padding: 4,
    paddingRight: 12,
    textAlign: "right",
  },
});

export default App;
