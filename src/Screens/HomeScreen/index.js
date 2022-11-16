import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Button,
  Text,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { Provider } from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons";
import BottomSheet from "../../assets/Components/BottomSheet";
import Expense from "../../assets/Components/Expense";
import { windowHeight, windowWidth } from "../../utils";
import { expenseData } from "../../Data";
import { BottomPopUp } from "../../assets/Components/BottomPopUp";


const popuList = [
  {
    id: 1, 
    name: 'Todos'
  },
  {
    id: 2, 
    name: 'Categorias'
  }
]

export default function HomeScreen({ navigation }) {
  let popupRef = React.createRef();

  const onShowPopUp = () => {
    popupRef.show();
  };

  const onClosePopUp = () => {
    popupRef.close();
  };

  return (
    <Provider>
      <SafeAreaView style={styles.container}>
        {/* <StatusBar style="auto" /> */}
        {/* HEADER */}
        <View>
          <View style={styles.headerNav}>
            <View style={styles.btnSheet}>
              <TouchableOpacity style={styles.selectScreen} onPress={onShowPopUp}>
                <Text style={[styles.text, styles.textWeight, {marginRight: 5}]}>Todos</Text>
                <Ionicons name="chevron-down-outline" color="#fff" size={25} />
              </TouchableOpacity>
              <BottomPopUp
                title="Ver despesas: "
                ref={(target) => (popupRef = target)}
                onTouchOutside={onClosePopUp}
                data={popuList}
              />
            </View>
            {/* ICON PROFILE USER */}
            <TouchableOpacity>
              <ImageBackground
                source={require("./../../assets/Images/user-icon.png")}
                style={{ width: 35, height: 35 }}
                imageStyle={{ borderRadius: 25 }}
              />
            </TouchableOpacity>
          </View>
          {/* SELECT MONTH */}
          <View style={styles.selectMonth}>
            <TouchableOpacity style={styles.btnMonth}>
              <Ionicons name="chevron-back-outline" size={20} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.textMonth}>Setembro</Text>
            <TouchableOpacity style={styles.btnMonth}>
              <Ionicons name="chevron-forward" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
        {/* DESPESAS CONTAINER */}
        <View style={styles.expenseContainer}>
          {/* PODE SE TORNAR UM COMPONENTE */}
          <View style={{ alignItems: "center" }}>
            <View style={styles.infoExpense}>
              <View style={styles.infoTotalExpense}>
                <Text style={styles.commonText}>Total do mês:</Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={[styles.totalValueText, { marginRight: 5 }]}>
                    R$
                  </Text>
                  <Text style={styles.totalValueText}>47,90</Text>
                </View>
              </View>

              <View style={styles.paymentInfo}>
                <View style={styles.payInfo}>
                  <Text style={styles.commonText}>PAGO</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text
                      style={[
                        styles.commonText,
                        { color: "#309F5F", marginTop: 5 },
                      ]}
                    >
                      R$
                    </Text>
                    <Text
                      style={[
                        styles.commonText,
                        { color: "#309F5F", marginTop: 5 },
                      ]}
                    >
                      39,90
                    </Text>
                  </View>
                </View>
                <View style={styles.payInfo}>
                  <Text style={styles.commonText}>FALTA PAGAR</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text
                      style={[
                        styles.commonText,
                        { color: "#E35D4D", marginTop: 5 },
                      ]}
                    >
                      R$
                    </Text>
                    <Text
                      style={[
                        styles.commonText,
                        { color: "#E35D4D", marginTop: 5 },
                      ]}
                    >
                      7,90
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          {/* DESPESAS */}
          <Text
            style={{
              fontWeight: "600",
              fontSize: 20,
              color: "#494A51",
              marginTop: 20,
            }}
          >
            Despesas
          </Text>

          <View style={{ flex: 1 }}>
            <Expense />
          </View>
        </View>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#309F5F",
  },

  selectScreen: {
    flexDirection: "row",
    alignItems: "center",
  },

  headerNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },

  text: {
    fontSize: 20,
    color: "#fff",
  },

  textWeight: {
    fontWeight: "500",
  },

  selectMonth: {
    flexDirection: "row",
    justifyContent: "center",
  },

  textMonth: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
  },

  btnMonth: {
    alignItems: "center",
  },

  expenseContainer: {
    backgroundColor: "#fff",
    height: windowHeight,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 12,
  },

  infoExpense: {
    backgroundColor: "#fff",
    width: "100%",
    height: 120,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#494A5110",
    marginTop: 10,
    elevation: 5,
  },

  infoTotalExpense: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },

  commonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#494A51",
  },

  totalValueText: {
    fontSize: 20,
    fontWeight: "500",
    color: "#494A51",
  },

  paymentInfo: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderColor: "#494A5130",
  },

  payInfo: {
    width: "50%",
    alignItems: "center",
    paddingTop: 10,
  },
});
