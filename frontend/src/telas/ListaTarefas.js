import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import { useApp } from '../contexto/AppContexto';
import { globalStyles } from '../styles/globalStyles';
import { tarefaStyles } from '../styles/tarefaStyles';
import { Botao, CardTarefa } from '../componentes/componentes';

export default function ListaTarefas({ navigation }) {
  const { usuario, minhasTarefas, excluirTarefa } = useApp();

  function confirmarExclusao(id, titulo) {
    Alert.alert(
      'Excluir Tarefa',
      `Deseja realmente apagar "${titulo}"?`,
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Excluir',
          style: 'destructive',
          onPress: () => excluirTarefa(id),
        },
      ]
    );
  }

  return (
    <View style={globalStyles.container}>
      <View style={tarefaStyles.topo}>
        <View>
          <Text style={tarefaStyles.saudacao}>Olá, {usuario.nome}</Text>
          <Text style={tarefaStyles.contador}>
            {minhasTarefas.length} tarefa(s) cadastrada(s)
          </Text>
        </View>

        <TouchableOpacity
          style={tarefaStyles.botaoPerfil}
          onPress={() => navigation.navigate('Perfil')}
        >
          <Text style={tarefaStyles.textoPerfil}>Meu Perfil</Text>
        </TouchableOpacity>
      </View>

      <View style={{ marginBottom: 16 }}>
        <Botao
          titulo="+ Nova Tarefa e Nota de Estudo"
          onPress={() => navigation.navigate('FormTarefa')}
        />
      </View>

      <FlatList
        data={minhasTarefas}
        keyExtractor={(item) => String(item.id)}
        ListEmptyComponent={
          <Text style={tarefaStyles.vazio}>
            Nenhuma tarefa ainda. Toque no botão acima para criar a primeira!
          </Text>
        }
        renderItem={({ item }) => (
          <CardTarefa
            tarefa={item}
            onPress={() => navigation.navigate('FormTarefa', { tarefa: item })}
            onExcluir={() => confirmarExclusao(item.id, item.titulo)}
          />
        )}
      />
    </View>
  );
}