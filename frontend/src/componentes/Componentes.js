import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Stylesheet} from 'react-native';
import {globalStyles, CORES} from '../styles/globalStyles';
import {tarefaStyles} from '../styles/tarefasStyles';

export function Botao({titulo, onPress, cor}) 
{
    return(
        <TouchableOpacity
            style={[globalStyles.botao, cor ? {backgroundColor: cor} : null,]}
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
            {label ? <Text style={globalStyles.label}>{label}</Text> : null}
            <TextInput 
                style={[globalStyles.input, multiline ? {heigh: 148, textAlignVertical: 'top', paddingTop: 12} : null]}
                placeholder= {placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                multiline={multiline}
                keyboardType={keyboardType}
                autoCapitalize={keyboardType === 'email-adress' ? 'none' : 'sentences'}

            />
        </View>
    );
}

export function CardTarefa({tarefa, onPress, onExcluir})
{
    return(
        <TouchableOpacity style={globalStyles.card} onPress={onPress}>
            <View style={tarefaStyles.linhaCard}>
                <Text style={tarefaStyles.disciplina}>{tarefa.disciplina}</Text>
                <Text 
                    style={[tarefaStyles.status, {color: tarefa.concluida ? CORES.sucesso : CORES.primaria},

                   ]}
                >
                    {tarefa.concluida ? '✓ Concluída' : '• Pendente'}
                </Text>
            </View>

            <Text style={tarefaStyles.tituloTarefa}>{tarefa.titulo}</Text>

            {tarefa.anotacao ? (
                <Text style={tarefaStyles.notaResumo} numberOfLines={2}>
                        Nota: {tarefa.anotacao}
                </Text>
            ) : null}

            <View style={tarefaStyles.acoes}>
                    <Text style={tarefaStyles.dicaEditar}>Toque para abrir / editar</Text>
                <TouchableOpacity onPress={onExcluir}>
                    <Text style={tarefaStyles.textoExcluir}>Excluir</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
}