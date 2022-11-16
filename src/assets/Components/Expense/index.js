import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Checkbox } from "react-native-paper";

export default function Expense() {
  const [checked, setChecked] = useState(false);
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.payIndicator} />
      <View style={styles.infoArea}>
          <View>
            <Text style={{ fontSize: 18, fontWeight: "500", color: "#494A51" }}>
              Netflix
            </Text>
            <View style={{ flexDirection: "row", marginTop: 5 }}>
              <Text style={[styles.textValue, { marginRight: 5 }]}>R$</Text>
              <Text style={styles.textValue}>39,90</Text>
            </View>
          </View>

          <Checkbox
            status={checked ? "checked" : "unchecked"}
            onPress={() => {
              setChecked(!checked);
            }}
          />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    width: "100%",
    height: 100,
    borderRadius: 10,
    marginTop: 15,
    elevation: 5,
  },

  payIndicator: {
    backgroundColor: "#E35D4D",
    width: 15,
    borderBottomStartRadius: 10,
    borderTopStartRadius: 10,
  },

  infoArea: {
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },

  textValue: {
    fontSize: 16,
    color: "#494A51",
  },

  btnCheck:{
    backgroundColor: 'red'
  },
});
