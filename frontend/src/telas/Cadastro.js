import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { useApp } from '../contexto/AppContexto';
import { globalStyles } from '../styles/globalStyles';
import { Botao, CampoTexto } from '../componentes/componentes';

export default function Cadastro({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const { cadastrar } = useApp();

  async function handleCadastro() {
    try {
      await cadastrar(nome, email, senha);
    } catch (erro) {
      Alert.alert('Atenção', erro.message);
    }
  }

  return (
    <View style={globalStyles.containerCentralizado}>
      <Text style={globalStyles.titulo}>Criar Conta</Text>
      <Text style={globalStyles.subtitulo}>Preencha seus dados de estudante</Text>

      <CampoTexto
        placeholder="Seu nome completo"
        value={nome}
        onChangeText={setNome}
      />

      <CampoTexto
        placeholder="Seu e-mail"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <CampoTexto
        placeholder="Crie uma senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <Botao titulo="Cadastrar e Entrar" onPress={handleCadastro} />

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={globalStyles.link}>Já tem conta? Voltar para o Login</Text>
      </TouchableOpacity>
    </View>
  );
}