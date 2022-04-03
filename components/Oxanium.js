import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Oxanium = () => {
  return (
    <View>
      <Text style={styles.text}>Oxanium</Text>
    </View>
  );
};

export default Oxanium;

const styles = StyleSheet.create({
  text: {
    fontFamily: "OxaniumBold",
    fontSize: 40,
  },
});
