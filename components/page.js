import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
} from "react-native-reanimated";

const { height, width } = Dimensions.get("window");
const SIZE = width * 0.7;

const Page = ({ index, title, translateX }) => {
  const inputRaneg = [(index - 1) * width, index * width, (index + 1) * width];
  const rStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      translateX.value,
      inputRaneg,
      [0, 1, 0],
      Extrapolate.CLAMP
    );

    const borderRadius = interpolate(
      translateX.value,
      inputRaneg,
      [0, SIZE / 2, 0],
      Extrapolate.CLAMP
    );

    //1st array in input range, 2nd value in output range,
    /// when translateX.value=(index - 1) * width then scale = 0
    /// when translateX.value=index * width then scale = 1
    /// when translateX.value=(index + 1) * width then scale = 0
    return {
      borderRadius,
      transform: [{ scale }],
    };
  });
  return (
    <View
      style={[
        styles.pageContainer,
        { backgroundColor: `rgba(0,0,256, 0.${index + 2})` },
      ]}
    >
      <Animated.View style={[styles.square, rStyle]} />
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    width,
    height,
    alignItems: "center",
    justifyContent: "center",
  },
  square: {
    height: SIZE,
    width: SIZE,
    backgroundColor: "rgba(0,0,256, 0.4)",
  },
});

export default Page;
