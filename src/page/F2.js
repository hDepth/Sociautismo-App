import React, { useState, useEffect } from "react";
import {ScrollView, ImageBackground, View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import estilos from '../css/estilofeedback';
import { Audio } from 'expo-av';

export default function F2({navigation}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState(null);

  useEffect(() => {
    const loadSound = async () => {
      const { sound } = await Audio.Sound.createAsync(
        require('../audios/TiposCumprimentos.mp3') 
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
            1
          </Text>
        </View>
        

            <Text style={estilos.textMeta}>Tipos De Cumprimentos</Text>

      </View>
      <View style={estilos.containerRow}>
        <View style={estilos.area}>
          <Text style={{
            fontSize: 20,
          }}>
          Olá! Você lembra dos tipos de cumprimentos?? Aqueles como um aperto de mãos, ou acenar, dizer bom dia ou boa tarde ou boa noite, e até um abração! Agora a gente espera que você tente fazer alguns! Afinal pq nao der um abraçao em alguem da familia? Ou dizer um bom dia caloroso pro seu professor? 
Boa sorte! </Text>
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
