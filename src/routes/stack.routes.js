import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import TabRoutes from './tab.routes';
import RecSenha from '../pages/RecSenha';
import Personalizacao from '../page/Personalizacao';
import Teapet from '../page/Teapet';
import Pictogame from '../page/Pictogame'
import Pais from '../page/Pais'
import Metas from '../page/Metas';
import Niveis from '../page/Niveis';
import FeedBack from '../page/Feedback';
import Config from '../page/Config';
import Musica from '../page/Musica';
import Teste1 from '../page/Testes1';
import Teste2 from '../page/Testes2';

export default function StackRoute() {
  
    return (
      <NavigationContainer>

      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="TabRoutes" component={TabRoutes} />
        <Stack.Screen name="RecSenha" component={RecSenha} />
        <Stack.Screen name="Personalizacao" component={Personalizacao} />
        <Stack.Screen name="TeaPet" component={Teapet} />
        <Stack.Screen name="Pictogame" component={Pictogame} />
        <Stack.Screen name="Pais" component={Pais} />
        <Stack.Screen name="Metas" component={Metas} />
        <Stack.Screen name="Niveis" component={Niveis} />
        <Stack.Screen name="FeedBack" component={FeedBack} />
        <Stack.Screen name="Musica" component={Musica} />
        <Stack.Screen name="Teste1" component={Teste1} />
        <Stack.Screen name="Teste2" component={Teste2} />
        <Stack.Screen name="Config" component={Config} />

      </Stack.Navigator>

</NavigationContainer>
    );
  }
