import React from "react";
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Alert,} from 'react-native'
import {useApp} from '.../contexto/AppContexto';
import { globalStyles, CORES } from '../styles/globalStyles';

export default function LoginScreen({navigation})
{
    const[email, setEmail] = useState('');
    const[senha, setSnha] = useState('');
    const {entrar} = useApp();

    async function Login() {
        try{
            await entrar(email, senha);
        }
        catch(erro)
        {
            Alert.alert('Atenção ', erro.mensage);
        }
    }

    return(
        <View style = {globalStyles.container}>
            <Text style = {globalStyles.titulo}>MAPA</Text>
            <Text style = {globalStyles.subtitulo}>Organizador de tarefas e Estutos</Text>

            <TextInput style = {globalStyles.input}
                placeholder="Seu e-mail"
                keyboardType="email-adress"
                autoCapitalize="none"
                value={email}
                onChange={setEmail}
            />

            <TextInput styles = {globalStyles.input}
                placeholder="Sua senha"
                secureTextEntry
                value={senha}
                onChange={setSenha}
            />

            <TouchableOpacity style = {globalStyles.botao} onPress={Login}>
                <Text style = {globalStyles.textoBotao}>Entrar</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                <Text style = {globalStyles.textoBotao}>Não tem conta? Cadastre-se</Text>
            </TouchableOpacity>
        </View>
    );
}