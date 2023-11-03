import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, ImageBackground, TouchableOpacity, Image } from 'react-native';




export default function Teste1({navigation}) {

  const [backgroundImage, setBackgroundImage] = useState(require('../img/Rectangle.jpg'));

  const changeBackground1 = () => {
    setBackgroundImage(require('../img/MontanhaLaranja.jpeg'));
  };
  const changeBackground2 = () => {
    setBackgroundImage(require('../img/FlorestaLaranja.jpeg'));
  };
  const changeBackground3 = () => {
    setBackgroundImage(require('../img/Espaço.jpeg'));
  };
  const changeBackground4 = () => {
    setBackgroundImage(require('../img/Rectangle.jpg'));
  };

  return (
    <ImageBackground source={backgroundImage} style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        
        <View style={{
          width: 300,
          height: 75,
          flexWrap: 'wrap',
          borderWidth: 1,
          flexDirection: 'row',
          padding: 5

        }}>
      <TouchableOpacity 
          style={{display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex',
          backgroundColor:"#fff",
          borderWidth: 1,
          borderColor: '#000',
          borderRadius: 20,
          height:60,
          width:60, 
          alignSelf: 'center',
          marginLeft: 10,
        }}
          onPress={changeBackground1}>
            <Image
                source={require('../img/MontanhaLaranja.jpeg')}
                style={{alignSelf: 'center',
                height: '100%', 
                width: '100%',
                borderRadius: 20,                            
              }}/></TouchableOpacity>

<TouchableOpacity 
          style={{display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex',
          backgroundColor:"#fff",
          borderWidth: 1,
          borderColor: '#000',
          borderRadius: 20,
          height:60,
          width:60, 
          marginLeft: 10,
          alignSelf: 'center',}}
          onPress={changeBackground2}>
            <Image
                source={require('../img/FlorestaLaranja.jpeg')}
                style={{alignSelf: 'center',
                height: '100%', 
                width: '100%',
                borderRadius: 20,                            
              }}/></TouchableOpacity>

<TouchableOpacity 
          style={{display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex',
          backgroundColor:"#fff",
          borderWidth: 1,
          borderColor: '#000',
          borderRadius: 20,
          height:60,
          width:60, 
          marginLeft: 10,
          alignSelf: 'center',}}
          onPress={changeBackground3}>
            <Image
                source={require('../img/Espaço.jpeg')}
                style={{alignSelf: 'center',
                height: '100%', 
                width: '100%',
                borderRadius: 20,                            
              }}/></TouchableOpacity>

<TouchableOpacity 
          style={{display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex',
          backgroundColor:"#fff",
          borderWidth: 1,
          borderColor: '#000',
          borderRadius: 20,
          height:60,
          width:60, 
          marginLeft: 10,
          alignSelf: 'center',}}
          onPress={changeBackground4}>
            <Image
                source={require('../img/Rectangle.jpg')}
                style={{alignSelf: 'center',
                height: '100%', 
                width: '100%',
                borderRadius: 20,                            
              }}/></TouchableOpacity>

</View>
              
        
      </View>
    </ImageBackground>
  );
}
