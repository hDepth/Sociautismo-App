import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';

const Teste1 = ({ navigation }) => {
  const [imagem, setImagem] = useState(null);

  const carregarImagem = () => {
    setImagem('https://github.com/hDepth/Sociautismo-App/assets/139086684/afc18044-c3da-45aa-8673-12f3e63ef503'); // Substitua pela URL da imagem do GitHub
  };

  const navegarParaSegundaPagina = () => {
    navigation.navigate('Teste2', { imagem });
  };

  return (
    <View>
      {imagem && <Image source={{ uri: imagem }} style={{ width: 150, height: 150 }} />}
      <TouchableOpacity onPress={carregarImagem}>
        <View style={{ backgroundColor: 'lightblue', padding: 10, margin: 10 }}>
          <Text>Carregar Imagem</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={navegarParaSegundaPagina}>
        <View style={{ backgroundColor: 'lightgreen', padding: 10, margin: 10 }}>
          <Text>Navegar para Segunda Página</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Teste1;
