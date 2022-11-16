import React from "react";
import { View, Text, Button } from "react-native";

export default function SignUpScreen() {
  return (
    <View>
      <Text>TELA DE CADASTRO</Text>
      <Button
        onPress={() => navigation.navigate("HomeScreenStack")}
        title="fazer cadastro"
      />
    </View>
  );
}
