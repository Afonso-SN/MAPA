import React, { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Alert,} from 'react-native';
import { useApp } from '../contexts/AppContext';
import { globalStyles, CORES } from '../styles/globalStyles';

export default function CadastroScreeen({navigation})
{
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const {cadastrar} = useApp();

    async function Cadastro() {
        try{
            await cadastrar(nome, email, senha);
        }

        catch (erro){ Alert.alert('Atenção ', erro.message);

        }
    }

    return(
        <View style= {globalStyles.container}>
            <Text style = {globalStyles.titulo}>Criar Conta</Text>
            <Text style = {globalStyles.subTitulo}>Preencha seus dados de estudante</Text>
            
            <TextInput style = {globalStyles.input}
            placeholder='Seu nome completo'
            value= {nome}
            onChangeText={setNome}
            />
            
            <TextInput style = {globalStyles.input}
            placeholder='Seu e-mail'
            keyboardType='email-adress'
            autoCapitalize='none'
            value= {email}
            onChangeText={setEmail}
            />

            <TextInput style = {globalStyles.input}
            placeholder='Sua senha'
            value= {senha}
            secureTextEntry
            onChangeText={setSenha}
            />

            <TouchableOpacity style={globalStyles.botao} onPress={Cadastro}>
                <Text style={globalStyles.textoBotao}>Cadastrar e Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.link}>Já tem conta? Voltar para o Login</Text>
            </TouchableOpacity>

        </View>

    );
}