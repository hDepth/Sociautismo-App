import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

const Teste2 = ({ navigation, route }) => {
  const { imagem } = route.params;

  const onPressHandler = () => {
    navigation.navigate('Teste3', { imagem });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressHandler} style={styles.touchableOpacity}>
        
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
  touchableOpacity: {
    padding: 10,
    backgroundColor: 'green',
    borderRadius: 5,
  },
});

export default Teste2;
