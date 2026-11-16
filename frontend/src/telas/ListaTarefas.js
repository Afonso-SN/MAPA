import React, {useState} from "react";
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Alert,} from 'react-native'
import {useApp} from '../contexto/AppContexto';
import { globalStyles, CORES } from '../styles/globalStyles';
import { tarefaStyles } from "../styles/tarefasStyles";

export default function ListaTarefasScreen({navigation})
{
    const{usuario, minhasTarefas, excluirTarefa} = useApp();

    function confirmarExclusao(id, titulo) {
    Alert.alert(
      'Excluir Tarefa',
      `Deseja realmente apagar "${titulo}"?`,
      [
        { text: 'Cancelar', style: 'cancel' },
        {text: 'Excluir', style: 'destructive',
             onPress: () => excluirTarefa(id),},
      ]
    );
  }
}
return (
    <View style={globalStyles.container}>
        
        {/*Cabeçalho com saudação e botão para a Tela 5 (Perfil)*/}
        <View style = {tarefaStyles.topo}>
            <View>
                <Text style={tarefaStyles.saudacao}>Olá, {usuario.nome}</Text>
                <Text style = {tarefaStyles.contador}>
                    {minhasTarefas.lenght} tarefas cadastradas
                </Text>
            </View>

            <TouchableOpacity style= {tarefaStyles.botaoPerfil}
                onPress={()=> navigation.navigate('Perfil')}
            >
                <Text style= {tarefaStyles.textoPerfil}>Meu Perfil</Text>
            </TouchableOpacity>
        </View>

        {/* Botão para abrir a Tela 4 em modo de criação */}

        <TouchableOpacity style={[globalStyles.botao, {marginBottom: 16}]} onPress={()=> navigation.navigate('FormTarefa')} >
            <Text style = {globalStyles.textoBotao}>+ Nova Tarefa</Text>
        </TouchableOpacity>

    </View>
)


