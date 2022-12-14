import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  SplashScreen,
  StartScreen,
  LoginScreen,
  SignUpScreen,
  HomeScreen,
  NewDespesaScreen,
  ProfileScreen,
  SearchScreen,
  ReportScreen,
  AboutScreen,
} from "../Screens";

const Stack = createStackNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ tabBarShowLabel: false, headerShown: false }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="NewDespesaTab" component={NewDespesaScreen} />
      <Tab.Screen name="ReportTab" component={ReportScreen} />
    </Tab.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function routes() {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreenStack"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="StartScreenStack"
        component={StartScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="LoginScreenStack" component={LoginScreen} options={{headerShown: false}} />
      <Stack.Screen name="SignUpScreenStack" component={SignUpScreen} />
      <Stack.Screen
        name="HomeScreenStack"
        component={HomeTabs}
        options={{ headerShown: false }}
      />
      
      <Stack.Screen name="NewDespesaScreenStack" component={NewDespesaScreen} />
    </Stack.Navigator>
  );
}
