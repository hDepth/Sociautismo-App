import React, { useState, useEffect } from "react";
import {ScrollView, ImageBackground, View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import estilos from '../css/estilofeedback';
import { Audio } from 'expo-av';

export default function F3({navigation}) {
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
            3
          </Text>
        </View>
        

            <Text style={{
                marginLeft: 20,
                alignSelf: 'center',
                fontSize: 20,
            }}>Situações Sociais</Text>

      </View>
      <View style={estilos.containerRow}>
        <View style={estilos.area}>
          <Text style={estilos.titleArea}>
          Nossa sao tantas situações diferentes! to tao animado pra brincar agora q eu sei de tudo isso! e vc? ja sei, por que você nao brinca um pouco com um amigo? Você tambem pode fazer novos amigos! tenho
          certeza que agora q vc sabe tudo sobre essas situações sociais vc ta craque e pode fazer um montao de amigos </Text>
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
