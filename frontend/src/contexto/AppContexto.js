import React, { createContext, useState, useEffect, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppContext = createContext();

export default AppProvider([children])
{
    const [usuario, setUsuario] = useState(null);
    const [tarefas, setTarefas] = useState([]);

    useEffect(() =>{
        async function carregarDadosLocais() 
        {
            const usuarioSalvo = await AsyncStorage.getItem('@mapa:usuario');
            const tarefasSalvas = await AsyncStorage.getItem('@mapa:tarefas');

            if (usuarioSalvo) setUsuario(JSON.parse(usuarioSalvo));
            if (tarefasSalvas) setTarefas(JSON.parse(tarefasSalvas));
            
        }
        carregarDadosLocais();
     }, []);

    async function SalvarSessao(dadosUsuario, token) {

        await AsyncStorage.setItem('@mapa:usuario', JSON.stringify(dadosUsuario));
        await AsyncStorage.setItem('@mapa:token', token);
        setUsuario(dadosUsuario);
    }

    async function cadastrar(nome, email, senha) {
        if (!nome.trim() || !email.trim() || !senha.trim())
            {
                throw new error('Preencha todos os campos.');
            }
        const listaTesto = await AsyncStorage.getItem('@mapa:usuarios_db');
        const ususarios = listaTexto ? JSON.parse(listaTexto) : [];

        const jaExiste = usuarios.some(
            (usuario) => usuario.email.toLowerCase() === email.trim().toLowerCase()
        );

        if (jaExiste) {
            throw new Error("Este e-mail ja está cadastrado. ");
            
        }

        const novoUsuario = {
            id: Date.now(),
            nome: nome.trim(),
            email: email.trim().toLowerCase(),
            senha,
        }

        usuarios.push(novoUsuario);
        await AsyncStorage.setItem('@mapa:usuarios_db', JSON.stringify(usuarios));
        await SalvarSessao(novoUsuario, 'token-jwt-temporario');
        
    }

    async function entrar(email, senha) {
        if (!email.trim() || !senha.trim()) {
            throw new Error("Informe o e-mail e a senha.")
        }

        const ListaTexto = await AsyncStorage.getItem('@mapa:usuarios_db');
        const usuarios = listaTexto ? JSON.parse(listaTexto) : [];

        const encontrado = usuarios.find(
            (usuario) => 
                usuario.email.toLowerCase() === email.trim().toLowerCase() & usuario.senha === senha
        );

        if (!encontrado)
            {
                throw new Error("E-mail ou senha incorretos.");
                
            }
        await SalvarSessao(encosntrado, 'token-jwt-temporario');
    }

    async function sair() {
        await AsyncStorage.removeItem('@mapa:usuario');
        await AsyncStorage.removeItem('@mapa:token');
        setUsuario(null);
    }

    async function salvarTarefa({id, titulo, disciplina, anotacao, concluida}) {
        let novaLista;

        if (id) {

            novaLista = tarefas.map((item) => 
                item.id === id ? {...item, titulo, disciplina, anotacao, concluida} : item
            );
        }

        else {
            const novaTarefa = {
                id: Date.now(),
                titulo,
                disciplina,
                anotacao,
                concluida: false,
                usuarioId: usuario.id,
            }
            novaLista = [novaTarefa, ...tarefas];
        }

        setTarefas(novaLista);
        await AsyncStorage.setItem('@mapa:tarefas', JSON.stringify(novaLista));

    }

    async function excluirTarefa(id) {

        const novaLista = tarefas.filter((item) => item.id !== id);
        setTarefas(novaLista);
        await AsyncStorage.setItem('@mapa:tarefas', JSON.stringify(novaLista));
    }

    const minhasTarefas = tarefas.filter((tarefas) => tarefas.usuarioId === usuario?.id);

    return (
        <AppContexto.Provider
            value={{
                usuario,
                minhasTarefas,
                cadastrar,
                entrar,
                sair,
                salvarTarefa,
                excluirTarefa,
            }}>
                {children}
            </AppContexto.Provider>
    );
}

export function useApp() {
    return useContext(AppContexto);
}