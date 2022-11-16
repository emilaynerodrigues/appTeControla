import React from "react";
import {
  Modal,
  Dimensions,
  TouchableWithoutFeedback,
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { windowHeight, windowWidth } from "../../../utils";

export class BottomPopUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  show = () => {
    this.setState({ show: true });
  };

  close = () => {
    this.setState({ show: false });
  };

  renderOutsideTouchable(onTouch) {
    const view = <View style={{ flex: 1, width: "100%" }} />;
    if (!onTouch) return view;

    return (
      <TouchableWithoutFeedback
        onPress={onTouch}
        style={{ flex: 1, width: "100% " }}
      >
        {view}
      </TouchableWithoutFeedback>
    );
  }

  renderTitle = () => {
    const { title } = this.props;
    return (
      <View style={{ height: 70 }}>
        <View
          style={{
            flexDirection: "row",
            paddingVertical: 20,
            paddingHorizontal: 20,
            justifyContent: 'space-between'
          }}
        >
          <Text
            style={{
              color: "#494A51",
              fontSize: 20,
              fontWeight: "500",
            }}
          >
            {title}
          </Text>
          <TouchableOpacity onPress={this.close}>
            <Ionicons name="close" color="#494A51" size={30} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "100%",
            borderWidth: 1,
            borderColor: "#494A5130",
            margin: 0,
          }}
        ></View>
      </View>
    );
  };

  renderContent = () => {
    const { data } = this.props;
    return (
      <View>
        <FlatList
          style={{ marginBottom: 20 }}
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={this.renderItem}
          extraData={data}
          keyExtractor={(item, index) => index.toString()}
          //   ItemSeparatorComponent={this.renderSeparator}
          contentContainerStyle={{
            paddingBottom: 40,
          }}
        />
      </View>
    );
  };

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={{
          height: 60,
          flex: 1,
          paddingHorizontal: 60,
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 18, color: "#494A51" }}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  //   renderSeparator = () => {
  //     <View
  //       style={{ opacity: 0.1, backgroundColor: "#494A51", height: 1 }}
  //     ></View>;
  //   };

  render() {
    let { show } = this.state;
    const { onTouchOutside, title } = this.props;

    return (
      <Modal
        animationType={"fade"}
        transparent={true}
        visible={show}
        onRequestClose={this.close}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "#494A5150",
            justifyContent: "flex-end",
          }}
        >
          {this.renderOutsideTouchable(onTouchOutside)}
          <View
            style={{
              backgroundColor: "#fff",
              width: "100%",
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              maxHeight: windowHeight * 0.26,
            }}
          >
            {this.renderTitle()}
            {this.renderContent()}
          </View>
        </View>
      </Modal>
    );
  }
}
