import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import * as Animatable from "react-native-animatable";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Image,
} from "react-native";

import Input from "../../assets/Components/Input";
import MyButton from "../../assets/Components/MyButton";

export default function SignUpScreen({navigation}) {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{ flex: 1, backgroundColor: "#fff" }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          {/*MENSAGEM DE CADASTRA-SE */}
          <Animatable.View animation="fadeInLeft" delay={200}>
            <Text style={styles.registerMessage}>Cadastre-se</Text>
          </Animatable.View>

          <View style={styles.userPhoto}>
            <TouchableOpacity style={styles.btnUserPhoto}>
              <Text>CLICA AQUI</Text>
            </TouchableOpacity>
          </View>

          {/* LOGIN CONTAINER */}
          <View style={styles.containerRegister}>
            {/* AREA INPUTS */}
            <Animatable.View
              animation="fadeInUp"
              delay={200}
              style={styles.inputArea}
            >
              {/* Input nome */}
              <View style={styles.input}>
                <Input
                  iconName={"person-outline"}
                  placeholder="Nome"
                  autoCapitalize="none"
                  autoCorrect={false}
                />
              </View>

              {/* Input do e-mail */}
              <View style={styles.input}>
                <Input
                  iconName={"mail-outline"}
                  placeholder="E-mail"
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="email-address"
                />
              </View>

              {/* Input do senha */}
              <View style={styles.input}>
                <Input
                  iconName={"lock-closed-outline"}
                  placeholder="Senha"
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry
                />
              </View>

              {/* Input confirmação de senha */}
              <View style={styles.input}>
                <Input
                  iconName={"lock-closed-outline"}
                  placeholder="Confirmar a senha"
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry
                />
              </View>

              {/* AREA DO BOTÃO */}
              <View>
                <MyButton text={"Cadastrar"} />
              </View>
            </Animatable.View>
          </View>

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
            style={styles.containerLogin}
          >
            <Text style={styles.text}>Já tem cadastro? </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("LoginScreenStack")}
            >
              <Text style={styles.textLogin}>Entre com seu login</Text>
            </TouchableOpacity>
          </Animatable.View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingBottom: 30,
  },

  containerLogo: {
    flex: 1,
  },

  registerMessage: {
    height: 40,
    fontSize: 30,
    fontWeight: "bold",
    color: "#309F5F",
    marginTop: 10,
    // backgroundColor: "pink",
  },

  containerRegister: {
    // flex: 2,
    justifyContent: "center",
    // backgroundColor: "yellow",
  },

  input: {
    marginBottom: 15,
  },

  orArea: {
    marginTop: 30,
    alignItems: "center",
  },

  orLines: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // backgroundColor: "pink",
    marginBottom: 18,
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
  },

  imgGoogle: {
    height: 30,
  },

  containerLogin: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingBottom: 6,
  },

  text: {
    fontSize: 16,
    color: "#494A51",
    textAlign: "center",
  },

  textLogin: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#309F5F",
    //backgroundColor: "pink"
  },
});
