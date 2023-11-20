import React, { useState, useEffect } from "react";
import {ScrollView, ImageBackground, View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import estilos from '../css/estilofeedback';
import { Audio } from 'expo-av';

export default function F4({navigation}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState(null);

  useEffect(() => {
    const loadSound = async () => {
      const { sound } = await Audio.Sound.createAsync(
        require('../audios/Lucas.mp3') 
      );
      setSound(sound);
    };

    loadSound();

    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, []);

  const playSound = async () => {
    if (sound) {
      if (isPlaying) {
        await sound.stopAsync();
      } else {
        await sound.playAsync();
      }
      setIsPlaying(!isPlaying);
    }
  };



  return (
     
    <View style={estilos.container}>
    <ImageBackground 
    style={estilos.fundopapel}
    source={require('../img/Rectangle.jpg')}>
      <View style={estilos.containersMetas}>
        <View style={estilos.boxnumMeta}>
          <Text style={estilos.numMeta}>
            4
          </Text>
        </View>
        

            <Text style={{
                marginLeft: 20,
                alignSelf: 'center',
                fontSize: 20,
            }}>Bora Comunicar?</Text>

      </View>
      <View style={estilos.containerRow}>
        <View style={estilos.area}>
          <Text style={{
            fontSize: 16
          }}>
          Eita o que temos aqui? nao é possível... quanta beleza em uma só pessoa! Eu aposto que seu sorriso é magnífico, olha lá em acredito eu que você escove bem os seus dentes em!
Você sabia que quando você da um sorrisao as pessoas entendem que você está alegre?  Eu aprendi agora mesmo!
Vimos que existem muitas formas de se comunicar nao é mesmo? você pode usar a sua voz, ou suas mãos, mas calma! seja paciente, se ficar com vontade de fazer alguma coisa é só dizer! ou mostrar! </Text>
        </View>
        <View style={estilos.viewimagem}>

          <Image style={estilos.figura} source={require('../img/pet5Headphone.png')} />
          
          <TouchableOpacity 
          style={estilos.botaosom}
          onPress={playSound}>
            <Image
                source={require('../img/som.png')}
                style={estilos.fotoBotoes}
              />
         <Text>{isPlaying ? '♫' : '>'}</Text>
      </TouchableOpacity>
        </View>
      </View>

      
      </ImageBackground>
    </View>

    
  );
}
