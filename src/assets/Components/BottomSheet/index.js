import React, { useEffect, useRef, useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Dimensions,
  Animated,
  Pressable,
  StyleSheet,
} from "react-native";
import { Portal } from "react-native-paper";
import { PanGestureHandler } from "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";

const BottomSheet = ({ show, onDismiss, enableBackdropDismiss }) => {
  const bottomSheetHeight = Dimensions.get("window").height * 0.25;
  const deviceWidth = Dimensions.get("window").width;
  const [open, setOpen] = useState(show);

  const bottom = useRef(new Animated.Value(-bottomSheetHeight)).current;

  const onGesture = (event) => {
    if (event.nativeEvent.translationY > 0) {
      bottom.setValue(-event.nativeEvent.translationY);
    }
  };

  const onGestureEnd = (event) => {
    if (event.nativeEvent.translationY > bottomSheetHeight / 2) {
      onDismiss();
    } else {
      bottom.setValue(0);
    }
  };

  useEffect(() => {
    if (show) {
      setOpen(show);
      Animated.timing(bottom, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(bottom, {
        toValue: -bottomSheetHeight,
        duration: 500,
        useNativeDriver: false,
      }).start(({}) => {
        setOpen(false);
      });
    }
  }, [show]);

  if (!open) {
    return null;
  }

  return (
    <Portal>
      <Pressable
        onPress={enableBackdropDismiss ? onDismiss : undefined}
        style={styles.backDrop}
      />

      <Animated.View
        style={[
          styles.containerBottomSheet,
          { height: bottomSheetHeight, bottom: bottom },
        ]}
      >
        <PanGestureHandler onGestureEvent={onGesture} onEnded={onGestureEnd}>
          <View>
            <View style={[styles.header, styles.common]}>
              <View
                style={{
                  width: 40,
                  height: 3,
                  borderRadius: 1.5,
                  position: "absolute",
                  top: 15,
                  left: (deviceWidth - 30) / 2,
                  zIndex: 10,
                  backgroundColor: "#494A5150",
                }}
              />

              <Text style={[styles.text, {marginTop: 10}]}>Ver despesas: </Text>

              <TouchableOpacity>
                <Ionicons
                  name="close"
                  size={25}
                  color="#494A51"
                  onPress={onDismiss}
                  style={{marginTop: 10}}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.optionsBtnSheet}>
              <TouchableOpacity style={styles.options}>
                <Text style={styles.text}>Todos</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.options}>
                <Text style={styles.text}>Categorias</Text>
              </TouchableOpacity>
            </View>
          </View>
        </PanGestureHandler>
      </Animated.View>
    </Portal>
  );
};

const styles = StyleSheet.create({
  containerBottomSheet: {
    position: "absolute",
    left: 0,
    right: 0,
    zIndex: 100,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#000",
    overflow: "hidden", //apaga a sombra acima da header
  },
  header: {
    height: 70,
    backgroundColor: "#fff",
    paddingHorizontal: 25,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#494A5130",
  },

  common: {
    elevation: 3,
  },

  text: {
    fontSize: 18,
    color: "#494A51",
  },

  optionsBtnSheet: {
    paddingHorizontal: 70,
    backgroundColor: "#fff",
  },

  options: {
    height: 60,
    justifyContent: "center",
    // backgroundColor: 'green'
  },
  backDrop:{
    ... StyleSheet.absoluteFillObject,
    zIndex: 80,
    backgroundColor: 'rgba(0,0,0,0.20)'
  }
});

export default BottomSheet;
