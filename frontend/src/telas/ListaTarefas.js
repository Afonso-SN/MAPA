import React, {useState} from "react";
import {View, Text, FlatList, TouchableOpacity, StyleSheet, Alert,} from 'react-native'
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

        <FlatList
            data={minhasTarefas}
            keyExtractor={(item) => (item.id)}
            ListEmptyComponent={<Text style={tarefaStyles.vazio}>Nenhuma tarefa ainda. Toque no botão acima para criar a primeira!</Text>}

            renderItem={({ item })=> (
                <TouchableOpacity style={tarefaStyles.linhaCard}
                onPress={() => navigation.navigate('FormTarefa', {tarefa: item})}>
                    <View style={tarefaStyles.linhaCard}>
                        <Text style={tarefaStyles.disciplina}>{item.disciplina}</Text>
                        <Text style={[tarefaStyles.status, {color: item.concluida ? CORES.sucesso : CORES.primeira},]}>
                            {item.concluida ? '✓ Concluída' :'• Pendente'}
                        </Text>
                    </View>

                    <Text style={tarefaStyles.tituloTarefa}>{item.titulo}</Text>
                    {item.anotacao ? (
                        <Text style={tarefaStyles.notaResumo} numberOfLines={2}>
                            Nota: {item.anotacao}
                        </Text>
                    ): null}
                    <View style={tarefaStyles.acoes}>
                        <Text style={tarefaStyles.dicaEditar}>
                            Toque para abrir/editar
                        </Text>
                        <TouchableOpacity onPress={() => confirmarExclusao(item.id, item.titulo)}>
                            <Text style={tarefaStyles.textoExcluir}>Excluir</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            )}
        />
    </View>
    );



