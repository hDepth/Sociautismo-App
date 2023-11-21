import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Teste3 = ({ route }) => {
  const { imagem } = route.params;

  return (
    <View style={styles.container}>
      <Image source={imagem} style={styles.imagem} />
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
});

export default Teste3;

