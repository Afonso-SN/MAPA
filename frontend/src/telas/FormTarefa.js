import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, ScrollView, Alert,} from 'react-native'
import { useApp } from '../contexto/AppContexto';
import { globalStyles, CORES } from '../styles/globalStyles';

export default async function FormTarefa ({navigation, route})
{
    const tarefaEdicao = route.params?.tarefa;

    const [titulo, setTitulo] = useState(tarefaEdicao ? tarefaEdicao.titulo : '');
    const [disciplina, setDisciplina] = useState(tarefaEdicao ? tarefaEdicao.disciplina : '');
    const [anotacao, setAnotacao] = useState (tarefaEdicao ? tarefaEdicao.anotacao : '');
    const [concluida, setConcluida] = useState(tarefaEdicao ? tarefaEdicao.concluida : false);

    const {salvarTarefa} = useApp();

    async function Salvar() {
        if (!titulo.trim() || !disciplina,trim()) {
            Alert.alert('Atenção', 'Preencha pelo menos o titulo e a disciplina.');
            return;
        }

        await salvarTarefa({
            id: tarefaEdicao?.id,
            titulo: titulo.trim(),
            disciplina: disciplina.trim(),
            anotacao: anotacao.trim(),
            concluida,
        });
        navigation.goBack();
    }

    return(
        <ScrollView style={globalStyles.container}>
            <Text style={globalStyles.label}>Titulo da tarefa</Text>
            <TextInput 
                style={globalStyles.input}
                placeholder='Ex: Estudar para a prova do Orlando'
                value={titulo}
                onChangeText={setTitulo}
            />

            <Text style={globalStyles.label}>Disciplina</Text>
            <TextInput
                style={globalStyles.input}
                placeholder="Ex: Programação Mobile"
                value={disciplina}
                onChangeText={setDisciplina}
            />

            <Text style={globalStyles.label}>Nota de Estudo (Anotações)</Text>
            <TextInput 
                style={[globalStyles.input,{height: 140, textAlignVertical: 'top', paddingTop: 12},]}
                placeholder='Sua anotação pra aula do Orlando'
                multiline
                value={anotacao}
                onChange={setAnotacao}
            />

            {tarefaEdicao && (
                <TouchableOpacity
                    style={[globalStyles.botao, {backgroundColor: concluida ? CORES.sucesso : CORES.textoCinza,marginBottom: 8,},]}
                    onPress={() => setConcluida(!concluida)}
                >
                    <Text style={globalStyles.botao}>
                        {concluida ? 'Status: Concluída ✓' : 'Marcar como Concluída'}
                    </Text>
                </TouchableOpacity>
            )}

            <TouchableOpacity 
                style={globalStyles.botao}
                onPress={Salvar}
            >
                <Text style={globalStyles.textoBotao}>
                    {tarefaEdicao ? 'Salvar Alterações' : 'Criar Tarefa'}
                </Text>
            </TouchableOpacity>
        </ScrollView>
    );
}