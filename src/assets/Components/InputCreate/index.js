import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity
    } from 'react-native';

const InputCreate = (props) => {

    return (
        <View>
            <Text style={styles.inputTitle}>{props.inputTitle}</Text>
            <View style={styles.containerInput} >
                <TextInput
                    style={styles.inputArea}
                    autoCorrect={false}
                    { ... props}
                />      

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerInput:{
        flexDirection: "row",
        borderWidth: 1,
        borderRadius: 10,
        height: 60,
        borderColor: "#494A5130",
        paddingHorizontal: 20
    },
    inputTitle:{
        color: "#494A5190",
        fontSize: 18,
        marginBottom: 10
    },
    inputArea:{
        flex: 1,
        fontSize: 14,
        // backgroundColor: "violet"
    },
})

export default InputCreate;