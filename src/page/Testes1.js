import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

const buttons = [
  {
    label: 'Coroa',
    image: require('../img/Coroa.jpeg'),
  },
  {
    label: 'Laço',
    image: require('../img/Laço.jpeg'),
  },
  {
    label: 'Boina',
    image: require('../img/boina.jpeg'),
  },
  {
    label: 'Fones De Ouvido',
    image: require('../img/headphone.jpeg'),
  },
  {
    label: 'Cartola',
    image: require('../img/cartola.jpeg'),
  },
];

const Teste1 = () => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);
  const currentButton = buttons[activeButtonIndex];

  const changeImage = () => {
    setActiveButtonIndex((activeButtonIndex + 1) % buttons.length);
  };

  return (
    <View style={styles.container}>
      <Image source={currentButton.image} style={styles.image} />
      <Text>{currentButton.label}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={changeImage}>
        <Text>Próximo Botão</Text>
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
  image: {
    width: 200,
    height: 200,
  },
  button: {
    marginTop: 20,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
});

export default Teste1;
