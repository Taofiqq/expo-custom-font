import * as Font from "expo-font";

export const useFonts = async () => {
  await Font.loadAsync({
    OxaniumBold: require("../assets/fonts/Oxanium/Oxanium-Bold.ttf"),
    PoppinsRegular: require("../assets/fonts/Poppins/Poppins-Regular.ttf"),
    WorkSansRegular: require("../assets/fonts/WorkSans/WorkSans-Regular.ttf"),
  });
};

// YOU CAN MAKE THE CODE MORE CLEANER BY DECLARING ALL THE NEEDED FONTS AND SPREAD IT IN THE FONT.LOADASYNC FUNCTION

// const customFonts = {
//   OxaniumRegular: require("../assets/fonts/Oxanium-Regular.ttf"),
//   OxaniumSemiBold: require("../assets/fonts/Oxanium-SemiBold.ttf"),
//   WorkSansRegular: require("../assets/fonts/WorkSans/WorkSans-Regular.ttf"),
// };

// export const useFonts = async () => {
//   await Font.loadAsync({
//   ...customFonts
//   });
// };
