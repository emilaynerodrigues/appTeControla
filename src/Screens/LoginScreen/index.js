import React, { useState } from "react";
import * as Animatable from "react-native-animatable";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";

import Input from "../../assets/Components/Input";
import MyButton from "../../assets/Components/MyButton";
export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");

  return (
    //<KeyboardAvoidingView  enable style={{flex: 1}}>
    <ScrollView
      contentContainerStyle={{ flex: 1, backgroundColor: "#fff" }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        {/* LOGO CONTAINER */}
        <View style={styles.containerLogo}>
          <Image
            source={require("./../../assets/Images/logo-tc.png")}
            style={styles.img}
            resizeMode="contain"
          />
        </View>

        <View style={styles.containerBody}>

          {/* LOGIN CONTAINER */}
          <View style={styles.containerLogin}>
            <View style={styles.loginArea}>
              {/*AREA MENSAGEM DE BOAS VINDAS */}
              <Animatable.View
                animation="fadeInLeft"
                delay={200}
                style={styles.welcomeArea}
              >
                <View style={styles.welcomeMessage}>
                  <Text style={styles.welcomeText}>Bem-vindo ao </Text>
                  <Text style={styles.welcomeTextGreen}>Te Controla</Text>
                </View>

                <Text style={styles.Text}>Faça login para continuar</Text>
              </Animatable.View>

              {/* AREA INPUTS */}
              <Animatable.View
                animation="fadeInUp"
                delay={200}
                style={styles.inputArea}
              >
                {/* Input do e-mail */}
                <View style={styles.input}>
                  <Input
                    iconName={"mail-outline"}
                    placeholder="E-mail"
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="email-address"
                    onChangeText={setEmail}
                  />
                </View>
                {/* Input do e-mail */}
                <View style={styles.input}>
                  <Input
                    iconName={"lock-closed-outline"}
                    placeholder="Senha"
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry
                  />
                </View>

                {/* AREA DO BOTÃO */}
                <View>
                  <MyButton
                    text={"Entrar"}
                    func={() => navigation.navigate("HomeScreenStack")}
                  />
                </View>
                {/* AREA ESQUECEU DA SENHA */}
                <View style={styles.forgetPasswordArea}>
                  <TouchableOpacity
                    // onPress={() => {})}
                  >
                    <Text style={styles.text}>Esqueceu a senha?</Text>
                  </TouchableOpacity>
                </View>
              </Animatable.View>
            </View>
          </View>

          {/* OUTRA FORMA DE LOGAR */}

          <View style={styles.orArea}>
            <View style={styles.orLines}>
              <View style={styles.line}></View>
              <Text style={styles.orText}>ou</Text>
              <View style={styles.line}></View>
            </View>

            <TouchableOpacity style={styles.googleLogin}>
              <Image
                source={require("./../../assets/Images/google-logo.png")}
                style={styles.imgGoogle}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>

          {/*  */}
          <Animatable.View
            animation="fadeInUp"
            delay={200}
            style={styles.containerRegister}
          >
            <Text style={styles.text}>Novo no app? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("SignUpScreenStack")}>
              <Text style={styles.textRegister}>Cadastre-se</Text>
            </TouchableOpacity>
          </Animatable.View>

        </View>
      </View>
    </ScrollView>
    // </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#fff",
  },

  containerLogo: {
    flex: 1.2,
    justifyContent: "center",
    alignItems: "center",

    // backgroundColor: "blue",
  },

  img: {
    height: '70%',
    // backgroundColor: 'pink'
  },

  containerBody:{
    flex: 3,
    paddingHorizontal: 15,

    // backgroundColor: "gray"
  },

  containerLogin: {
    // flex: 4,
    justifyContent: "center",
    // backgroundColor: "red"
  },

  welcomeMessage: {
    flexDirection: "row",
    marginBottom: 10,
  },

  welcomeText: {
    fontSize: 27,
    fontWeight: "bold",
    color: "#494A51",
  },

  welcomeTextGreen: {
    fontSize: 27,
    fontWeight: "bold",
    color: "#309F5F",
  },

  Text: {
    fontSize: 18,
    color: "#494A51",
  },

  inputArea: {
    marginTop: 40,
    //backgroundColor: "violet"
  },

  input: {
    marginBottom: 15,
  },

  forgetPasswordArea: {
    marginTop: 15,
  },

  text: {
    fontSize: 16,
    color: "#494A51",
    textAlign: "center",
  },

  orArea: {
    // flex: 1,
    marginTop: 25,
    alignItems: "center",
    // backgroundColor: 'green'
  },

  orLines: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // backgroundColor: "pink",s
  },

  line: {
    width: "45%",
    borderWidth: 1,
    borderColor: "#494A5130",
  },

  orText: {
    fontSize: 16,
    color: "#494A5150",
    marginLeft: 7,
    marginRight: 7,
  },

  googleLogin: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "#494A5150",
    elevation: 4,
    marginTop: 25,
    marginBottom: 25
  },

  imgGoogle: {
    height: 30,
  },

  containerRegister: {
    flexDirection: "row",
    justifyContent: "center",

    // backgroundColor: "pink"
  },

  textRegister: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#309F5F",
    // backgroundColor: "pink"
  },
});
