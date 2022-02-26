import React, { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withRepeat,
  useAnimatedScrollHandler,
} from "react-native-reanimated";
import Page from "./components/page";

const WORDS = ["what's", "up", "mobile", "devs?"];

export default function App() {
  const scrollHandler = useAnimatedScrollHandler((event) => {
    console.log(event.contentOffset.x);
  });
  return (
    <Animated.ScrollView
      onScroll={scrollHandler}
      horizontal
      style={styles.container}
    >
      {WORDS.map((title, index) => {
        return <Page key={index.toString()} title={title} index={index} />;
      })}
    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
