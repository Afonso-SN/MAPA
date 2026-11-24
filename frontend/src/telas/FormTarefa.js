import React, { useState } from 'react';
import { ScrollView, View, Alert } from 'react-native';
import { useApp } from '../contexto/AppContexto';
import { globalStyles, CORES } from '../styles/globalStyles';
import { Botao, CampoTexto } from '../componentes/componentes';

export default function FormTarefa({ navigation, route }) {
  const tarefaEdicao = route.params?.tarefa;

  const [titulo, setTitulo] = useState(tarefaEdicao ? tarefaEdicao.titulo : '');
  const [disciplina, setDisciplina] = useState(
    tarefaEdicao ? tarefaEdicao.disciplina : ''
  );
  const [anotacao, setAnotacao] = useState(
    tarefaEdicao ? tarefaEdicao.anotacao : ''
  );
  const [concluida, setConcluida] = useState(
    tarefaEdicao ? tarefaEdicao.concluida : false
  );

  const { salvarTarefa } = useApp();

  async function handleSalvar() {
    if (!titulo.trim() || !disciplina.trim()) {
      Alert.alert('Atenção', 'Preencha pelo menos o título e a disciplina.');
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

  return (
    <ScrollView style={globalStyles.container}>
      <CampoTexto
        label="Título da Tarefa"
        placeholder="Ex: Estudar para prova de React Native"
        value={titulo}
        onChangeText={setTitulo}
      />

      <CampoTexto
        label="Disciplina"
        placeholder="Ex: Programação Mobile"
        value={disciplina}
        onChangeText={setDisciplina}
      />

      <CampoTexto
        label="Nota de Estudo (Anotações)"
        placeholder="Escreva aqui resumos, fórmulas, páginas do livro ou o que precisar lembrar..."
        multiline
        value={anotacao}
        onChangeText={setAnotacao}
      />

      {tarefaEdicao && (
        <View style={{ marginBottom: 8 }}>
          <Botao
            titulo={concluida ? 'Status: Concluída ✓' : 'Marcar como Concluída'}
            cor={concluida ? CORES.sucesso : CORES.textoCinza}
            onPress={() => setConcluida(!concluida)}
          />
        </View>
      )}

      <Botao
        titulo={tarefaEdicao ? 'Salvar Alterações' : 'Criar Tarefa'}
        onPress={handleSalvar}
      />
    </ScrollView>
  );
}