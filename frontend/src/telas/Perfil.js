import React from 'react';
import { View, Text } from 'react-native';
import { useApp } from '../contexto/AppContexto';
import { globalStyles, CORES } from '../styles/globalStyles';
import { Botao } from '../componentes/componentes';

export default function Perfil() {
  const { usuario, minhasTarefas, sair } = useApp();

  const total = minhasTarefas.length;
  const concluidas = minhasTarefas.filter((tarefa) => tarefa.concluida).length;
  const pendentes = total - concluidas;

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.card}>
        <Text style={globalStyles.label}>Estudante</Text>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: CORES.textoEscuro, marginBottom: 8 }}>
          {usuario.nome}
        </Text>

        <Text style={globalStyles.label}>E-mail</Text>
        <Text style={{ fontSize: 15, color: CORES.textoCinza }}>
          {usuario.email}
        </Text>
      </View>

      <View style={globalStyles.card}>
        <Text style={{ fontSize: 17, fontWeight: 'bold', color: CORES.primaria, marginBottom: 12 }}>
          Resumo dos Estudos
        </Text>

        <Text style={{ fontSize: 15, color: CORES.textoEscuro, marginBottom: 6 }}>
          Total de tarefas: {total}
        </Text>
        
        <Text style={{ fontSize: 15, color: CORES.primaria, marginBottom: 6 }}>
          Pendentes: {pendentes}
        </Text>

        <Text style={{ fontSize: 15, color: CORES.sucesso }}>
          Concluídas: {concluidas}
        </Text>
      </View>

      <Botao titulo="Sair da Conta" cor={CORES.perigo} onPress={sair} />
    </View>
  );
}