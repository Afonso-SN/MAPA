import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppProvider, useApp } from './src/contexts/AppContext';

import LoginScreen from './src/screens/Login';
import CadastroScreen from './src/screens/Cadastro';

const Stack = createNativeStackNavigator();

//tela temporaria

function TelaProvisoria()
{
  const {usuario, sair} = useApp();

return(
<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 16 }}>
        Bem-vindo, {usuario.nome}!
      </Text>
        <TouchableOpacity
          onPress={sair}
          style={{ backgroundColor: '#DC2626', padding: 12, borderRadius: 8 }}
          >
          <Text style={{ color: '#FFF', fontWeight: 'bold' }}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

function Rotas(){
  const {usuario} = useApp();

  return(
    <NavigationContainer>
      <Stack.Navigator>
        {usuario ? (
          <usuario.Screen
            name="Inicio"
            component={TelaProvisoria}
            options={{tittle: 'Minhas Tarefas'}}
        /> 
        ) :(
          <>
          <Stack.Screeen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false}}
          />
          <Stack.Screeen
            name="Cadastro"
            component={CadastroScreen}
            options={{ tittle: 'Cadastro'}}
          />
        </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App(){
  return(
    <AppProvider>
      <Rotas/>
    </AppProvider>
  );
}