import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Poppins = () => {
  return (
    <View>
      <Text style={styles.text}>Poppins</Text>
    </View>
  );
};

export default Poppins;

const styles = StyleSheet.create({
  text: {
    fontFamily: "PoppinsRegular",
    fontSize: 40,
  },
});
