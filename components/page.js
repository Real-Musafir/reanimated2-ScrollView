import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";

const { height, width } = Dimensions.get("window");

const Page = ({ index, title }) => {
  return (
    <View
      style={[
        styles.pageContainer,
        { backgroundColor: `rgba(0,0,256, 0.${index + 2})` },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    width,
    height,
  },
});

export default Page;
