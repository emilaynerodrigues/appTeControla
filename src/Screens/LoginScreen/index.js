import React from 'react';
import { View, Text, Button } from 'react-native';

export default function LoginScreen({ navigation }) {
 return (
   <View>
    <Text>TELA DE LOGIN</Text>
    <Button
      onPress={() => navigation.navigate('HomeScreenStack')}
      title="ir para home"
    />
   </View>
  );
}