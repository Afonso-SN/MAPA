import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppProvider, useApp } from './src/contexto/AppContexto';

import Login from './src/telas/Login';
import Cadastro from './src/telas/Cadastro';
import ListaTarefas from './src/telas/ListaTarefas';
import FormTarefa from './src/telas/FormTarefa';
import Perfil from './src/telas/Perfil';

const Stack = createNativeStackNavigator();

function Rotas()
{
  const {usuario} = useApp();
  
  return(
    <NavigationContainer>
        <Stack.Navigator>
          {usuario ?(
            <>
              <Stack.Screen
                name="Inicio"
                component={ListaTarefas}
                options={{tittle: 'Minhas Tarefas'}}
              />

              <Stack.Screen
                name="FormTarefa"
                component={FormTarefa}
                options={{tittle: 'Tarefa e nota de estudo'}}
              />

              <Stack.Screen
                name="Perfil"
                component={Perfil}
                options={{tittle: 'Perfil'}}
              />
            </>
          ):(
            <>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{headerShown: false}}
            />

            <Stack.Screen
              name="Cadastrp"
              component={Cadastro}
              options={{title: 'Cadastro'}}
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