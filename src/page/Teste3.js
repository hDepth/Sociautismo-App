import React from 'react';
import { View, Image } from 'react-native';

const Teste3 = ({ route }) => {
  const imagemAtual = route.params.imagemAtual;

  return (
    <View>
      {imagemAtual && <Image source={{ uri: imagemAtual }} style={{ width: 150, height: 150 }} />}
    </View>
  );
};

export default Teste3;
