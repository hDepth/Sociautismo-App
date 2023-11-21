import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Teste1 = ({ navigation }) => {
  const [imagem, setImagem] = useState(null);

  const onPressHandler = () => {
    navigation.navigate('Teste2', { imagem: require('../img/Abelha.png') });
  };

  return (
    <View style={styles.container}>
      <Image source={require('../img/Abelha.png')} style={styles.imagem} />
      <TouchableOpacity onPress={onPressHandler} style={styles.touchableOpacity}>
        {/* Seu conteúdo do TouchableOpacity */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagem: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  touchableOpacity: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
});

export default Teste1;
