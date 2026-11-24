import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';

// Pega automaticamente o IP atual do computador que está rodando o Expo
const hostUri = Constants.expoConfig?.hostUri;
const ipAtual = hostUri ? hostUri.split(':')[0] : 'localhost';

const api = axios.create({
  baseURL: `http://${ipAtual}:8080/api`,
});

// Envia o token JWT automaticamente no cabeçalho de toda requisição
api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('@mapa:token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;