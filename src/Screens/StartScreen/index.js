import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import LottieView from "lottie-react-native";

import Logo from "../../assets/Components/Logo";
import * as Animatable from "react-native-animatable";
import MyButton from "../../assets/Components/MyButton";

export default function StartScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Logo />
      </View>

      <View style={styles.containerBody}>
        <Animatable.View
          animation="fadeInLeft"
          delay={200}
          style={styles.containerText}
        >
          <Text style={styles.welcomeText}>Bem-vindo ao Te Controla</Text>
          <Text style={styles.text}>
            Aplicativo que ajuda você a ter maior controle sobre suas despesas
          </Text>
        </Animatable.View>

        <Animatable.View
          animation="fadeInLeft"
          delay={200}
          style={styles.containerImg}
        >
          <LottieView
            style={{ width: "100%" }}
            source={require("../../assets/Images/girl.json")}
            autoPlay
            speed={1.5}
            loop
          />
        </Animatable.View>

        <Animatable.View
          animation="fadeInUp"
          delay={200}
          style={styles.containerBtn}
        >
          <MyButton
            text={"LOGIN"}
            func={() => navigation.navigate("LoginScreenStack")}
          />

          <TouchableOpacity
            style={styles.btnAreaCadastro}
            onPress={() => navigation.navigate("SignUpScreenStack")}
          >
            <Text style={styles.btnCadastro}>CADASTRO</Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#fff",
  },

  containerBody: {
    paddingHorizontal: 15,
    flex: 1,
    // backgroundColor:'pink'
  },

  containerText: {
    flex: 2,
    justifyContent: "flex-end",
    // backgroundColor: "red",
  },

  welcomeText: {
    // flex: 1,
    color: "#494A51",
    fontSize: 27.5,
    fontWeight: "600",
    marginBottom: 10,
    textAlign: "center",
    // backgroundColor: 'red'
  },

  text: {
    // flex: 1,
    color: "#494A51",
    fontSize: 18,
    textAlign: "justify",
    // backgroundColor: 'violet'
  },

  containerImg: {
    flex: 6,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "blue",
  },

  containerBtn: {
    flex: 2,
    justifyContent: "center",
    // backgroundColor: "pink"
  },

  btnAreaCadastro: {
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#309F5F",
    borderWidth: 1.3,
    backgroundColor: "#FFF",
    width: "100%",
    height: 60,
    borderRadius: 10,
    elevation: 5,
  },

  btnCadastro: {
    fontSize: 20,
    color: "#494A51",
    fontWeight: "600",
  },
});
