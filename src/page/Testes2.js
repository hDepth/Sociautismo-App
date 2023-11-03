import React from 'react';
import { View, Text, ImageBackground } from 'react-native';


export default function Teste2() {
  return (
    <ImageBackground source={require('../img/MontanhaLaranja.jpeg')} style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Page 2</Text>
      </View>
    </ImageBackground>
  );
}

