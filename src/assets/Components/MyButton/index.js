import React from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
    StyleSheet
    } from 'react-native';


const MyButton = (props) => {

    return (
        <View style={styles.containerButton}>
            
            <TouchableOpacity style={styles.btnArea} onPress={props.func}>
                <Text style={styles.btnText}>{props.text}</Text>
            </TouchableOpacity> 
           
        </View>
    )
}

const styles = StyleSheet.create({
btnArea:{
    backgroundColor: "#309F5F",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 60,
    borderRadius: 10,
    elevation: 5
},
btnText:{
    color: "#ffff",
    fontSize: 20,
    fontWeight: "bold"
},
});

export default MyButton;