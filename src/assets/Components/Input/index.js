import React, { useState } from 'react';
import { 
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity
    } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

const Input = (props) => {

    const [sec, setSec] = useState(props.secureTextEntry);

    return (
        <View style={styles.containerInput} >
        
            <TextInput
                style={styles.inputArea}
                autoCorrect={false}
                { ... props}
                secureTextEntry={sec}
            /> 

            <Ionicons name={props.iconName} size={25} style={styles.icon} /> 
            {/* O código abaixo está relacionado ao input de senha, ou seja, se o input tiver
            secureTextEntry como verdadeira quer dizer que é um input para senhas */}
            {props.secureTextEntry && (
                <TouchableOpacity onPress={() => setSec(!sec)}>
                    <Ionicons
                        //caso secureTextEntry for true não mostrará a senha, caso contráro mostrará
                        name={sec ? 'eye' : 'eye-off'}
                        size={30}  
                        style={styles.iconSecret}/>
                </TouchableOpacity>
            )}
        
        </View>
    )
}

const styles = StyleSheet.create({
    containerInput:{
        flexDirection: "row",
        //marginBottom: 35,
        borderWidth: 1,
        borderColor: "#494A5130",
        borderRadius: 10,
        height: 60,
        alignItems: 'center'
    },
    inputArea:{
        flex: 1,
        //height: 40,
        paddingLeft: 55,
        fontSize: 18,
        // backgroundColor: "violet"
      },
      icon:{
        position: 'absolute',
        // top: 16,
        marginLeft: 20,
        color:'#494A5130'
      },
      iconSecret:{
        position: 'absolute',
        top: -15,
        right: 20,
        color:'#494A5140'
      }
});

export default Input;