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
import Home from '../page/Home';

export default function StackRoute() {
  
    return (
      <NavigationContainer>

      <Stack.Navigator initialRouteName="TabRoutes" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="TabRoutes" component={TabRoutes} />
        <Stack.Screen name="RecSenha" component={RecSenha} />
        <Stack.Screen name="Personalizacao" component={Personalizacao} />
        <Stack.Screen name="TeaPet" component={Teapet} />
      </Stack.Navigator>

</NavigationContainer>
    );
  }
