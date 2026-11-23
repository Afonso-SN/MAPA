import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Stylesheet} from 'react-native';
import {globalStyles, CORES} from '../styles/globalStyles';
import {tarefaStyles} from '../styles/tarefaStyles';

export function Botao ({titulo, onPress, cor}) 
{
    return(
        <TouchableOpacity
            style={[globalStyles.botao, cor ? {backgroundColor: cor} : null]},
            onPress={onPress}
        >
            <Text style={globalStyles.texoBotao}>{titulo}</Text>
        </TouchableOpacity>
    );
}

export function CampoTexto({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  multiline = false,
  keyboardType = 'default',

}) {
    return(

        <View>
            {label ? <Text style={globalStyles.label}></Text> : null}
            <TextInput style={[globalStyles.input, multiline ? {heigh}]}>

            </TextInput>
        </View>
    );
}