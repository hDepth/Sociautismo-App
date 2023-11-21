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
import PG2 from '../page/PG2';
import PG3 from '../page/PGame3';
import PG4 from '../page/PG4';
import PG5 from '../page/PG5';
import Pais from '../page/Pais';
import Metas from '../page/Metas';
import Niveis from '../page/Niveis';
import FeedBack from '../page/Feedback';
import F2 from '../page/F2';
import F3 from '../page/F3';
import F4 from '../page/F4';
import F5 from '../page/F5';
import Teste1 from '../page/Testes1';
import Teste2 from '../page/Teste2';
import Teste3 from '../page/Teste3';
import Termos from '../page/Termos';
import P2 from '../page/P2';
import P3 from '../page/P3';
import P4 from '../page/P4';
import P5 from '../page/P5';
import P6 from '../page/P6';
import P7 from '../page/P7';
import P8 from '../page/P8';

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
        <Stack.Screen name="Pictogame" component={Pictogame} />
        <Stack.Screen name="PG2" component={PG2} />
        <Stack.Screen name="PG3" component={PG3} />
        <Stack.Screen name="PG4" component={PG4} />
        <Stack.Screen name="PG5" component={PG5} />
        <Stack.Screen name="Pais" component={Pais} />
        <Stack.Screen name="Metas" component={Metas} />
        <Stack.Screen name="Niveis" component={Niveis} />
        <Stack.Screen name="FeedBack" component={FeedBack} />
        <Stack.Screen name="F2" component={F2} />
        <Stack.Screen name="F3" component={F3} />
        <Stack.Screen name="F4" component={F4} />
        <Stack.Screen name="F5" component={F5} />
        <Stack.Screen name="Teste1" component={Teste1} />
        <Stack.Screen name="Teste2" component={Teste2} />
        <Stack.Screen name="Teste3" component={Teste3} />
        <Stack.Screen name="Termos" component={Termos} />
        <Stack.Screen name="P2" component={P2} />
        <Stack.Screen name="P3" component={P3} />
        <Stack.Screen name="P4" component={P4} />
        <Stack.Screen name="P5" component={P5} />
        <Stack.Screen name="P6" component={P6} />
        <Stack.Screen name="P7" component={P7} />
        <Stack.Screen name="P8" component={P8} />

      </Stack.Navigator>

</NavigationContainer>
    );
  }
