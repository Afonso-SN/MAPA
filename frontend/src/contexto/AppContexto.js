import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';

const AppContexto = createContext();

export function AppProvider({ children }) {
  const [usuario, setUsuario] = useState(null);
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    async function carregarSessao() {
      const usuarioSalvo = await AsyncStorage.getItem('@mapa:usuario');
      const tokenSalvo = await AsyncStorage.getItem('@mapa:token');

      if (usuarioSalvo && tokenSalvo) {
        setUsuario(JSON.parse(usuarioSalvo));
        buscarTarefas();
      }
    }
    carregarSessao();
  }, []);

  async function buscarTarefas() {
    try {
      const resposta = await api.get('/tarefas');
      setTarefas(resposta.data);
    } catch (erro) {
      console.log('Erro ao carregar tarefas:', erro.message);
    }
  }

  async function salvarSessao(dadosUsuario, token) {
    await AsyncStorage.setItem('@mapa:usuario', JSON.stringify(dadosUsuario));
    await AsyncStorage.setItem('@mapa:token', token);
    setUsuario(dadosUsuario);
    await buscarTarefas();
  }

  async function cadastrar(nome, email, senha) {
    try {
      const resposta = await api.post('/auth/cadastro', { nome, email, senha });
      await salvarSessao(resposta.data.usuario, resposta.data.token);
    } catch (erro) {
      const msg = erro.response?.data?.erro || 'Erro ao conectar com o servidor.';
      throw new Error(msg);
    }
  }

  async function entrar(email, senha) {
    try {
      const resposta = await api.post('/auth/login', { email, senha });
      await salvarSessao(resposta.data.usuario, resposta.data.token);
    } catch (erro) {
      const msg = erro.response?.data?.erro || 'Erro ao conectar com o servidor.';
      throw new Error(msg);
    }
  }

  async function sair() {
    await AsyncStorage.removeItem('@mapa:usuario');
    await AsyncStorage.removeItem('@mapa:token');
    setUsuario(null);
    setTarefas([]);
  }

  async function salvarTarefa({ id, titulo, disciplina, anotacao, concluida }) {
    if (id) {
      await api.put(`/tarefas/${id}`, { titulo, disciplina, anotacao, concluida });
    } else {
      await api.post('/tarefas', { titulo, disciplina, anotacao, concluida: false });
    }
    await buscarTarefas();
  }

  async function excluirTarefa(id) {
    await api.delete(`/tarefas/${id}`);
    await buscarTarefas();
  }

  return (
    <AppContexto.Provider
      value={{
        usuario,
        minhasTarefas: tarefas,
        cadastrar,
        entrar,
        sair,
        salvarTarefa,
        excluirTarefa,
      }}
    >
      {children}
    </AppContexto.Provider>
  );
}

export function useApp() {
  return useContext(AppContexto);
}