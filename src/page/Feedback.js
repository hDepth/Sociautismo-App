import React, { useState, useEffect } from "react";
import {ScrollView, ImageBackground, View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import estilos from '../css/estilofeedback';
import { Audio } from 'expo-av';

export default function FeedBack({navigation}) {
  const [feedback, setFeedback] = useState("")
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
     <ScrollView scrollEnabled>
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
        <View style={estilos.containerColumn}>

          <View style={estilos.containerBotao}>
          
            <TouchableOpacity style={estilos.botaoVolta}
            onPress={() => navigation.navigate("Metas")}>
        <Text style={estilos.textoBotaoVolta}>{'^'}</Text>
        </TouchableOpacity>
          </View>

            <Text style={estilos.textMeta}>Metas</Text>


        </View>
      </View>
      <View style={estilos.containerRow}>
        <View style={estilos.area}>
          <Text style={estilos.titleArea}>
            Olá Lucas! Que tal você tentar dar um abração em um coleguinha da escola? 
            mas cuidado pergunte se ele quer um primeiro em! </Text>
        </View>
        <View>
          <Image style={estilos.figura} source={require('../img/pet5Headphone.png')} />
          <TouchableOpacity 
          style={estilos.botaosom}
          onPress={playSound}>
            <Image
                source={require('../img/som.png')}
                style={estilos.fotoBotoes}
              />
         <Text>{isPlaying ? 'll' : '>'}</Text>
      </TouchableOpacity>
        </View>
      </View>

      
      </ImageBackground>
    </View>

    </ScrollView>
  );
}
