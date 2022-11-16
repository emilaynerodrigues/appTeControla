import React from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

export default function SplashScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <LottieView
        style={styles.containerLottie}
        source={require("./../../assets/Images/splash.json")}
        autoPlay
        speed={1}
        loop={false}
        onAnimationFinish={() => navigation.navigate('StartScreenStack')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
      backgroundColor: "#fff",
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
  },

  containerLottie:{
      // backgroundColor: "#000",
      height: "35%",
      justifyContent: "center",
      alignItems: "center"
      
  },
})