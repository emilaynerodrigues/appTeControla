import React from 'react';
import { View, Button, Text } from 'react-native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';

export default function HomeScreen({ navigation }) {
 return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>HOME</Text>
  </View>

  );
}