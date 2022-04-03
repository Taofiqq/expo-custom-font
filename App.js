import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Oxanium from "./components/Oxanium";
import AppLoading from "expo-app-loading";
import { useFonts } from "./hooks/useFonts";
import Poppins from "./components/Poppins";
import WorkSans from "./components/WorkSans";

const App = () => {
  //setting the initial loading to false
  const [isLoading, setIsLoading] = useState(false);

  // loading the fonts
  const LoadFonts = async () => {
    await useFonts();
  };

  if (!isLoading) {
    return (
      // if the font is not loaded return AppLoading
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => setIsLoading(true)}
        onError={() => {}}
      />
    );
  }
  return (
    <View style={styles.container}>
      <Oxanium />
      <Poppins />
      <WorkSans />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
