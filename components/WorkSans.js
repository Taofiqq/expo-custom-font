import { StyleSheet, Text, View } from "react-native";
import React from "react";

const WorkSans = () => {
  return (
    <View>
      <Text style={styles.text}>WorkSans</Text>
    </View>
  );
};

export default WorkSans;

const styles = StyleSheet.create({
  text: {
    fontFamily: "WorkSansRegular",
    fontSize: 40,
  },
});
