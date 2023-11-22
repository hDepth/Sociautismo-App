import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

const Teste2 = ({ navigation, route }) => {

  const navegarParaTerceiraPagina = () => {
    navigation.navigate('F2', { imagemAtual: route.params.imagemAtual });
  };

  return (
    <View>
      <TouchableOpacity onPress={navegarParaTerceiraPagina}>
        <View style={{ backgroundColor: 'lightcoral', padding: 10, margin: 10 }}>
          <Text>Navegar para Terceira Página</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Teste2;
