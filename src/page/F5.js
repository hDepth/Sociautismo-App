import React, { useState, useEffect } from "react";
import {ScrollView, ImageBackground, View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import estilos from '../css/estilofeedback';
import { Audio } from 'expo-av';

export default function F5({navigation, route}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState(null);
  const imagemAtual = route.params.imagemAtual;

  useEffect(() => {
    const loadSound = async () => {
      const { sound } = await Audio.Sound.createAsync(
        require('../audios/EntendoEmocao.mp3') 
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
            5
          </Text>
        </View>
        

            <Text style={{
                marginLeft: 20,
                alignSelf: 'center',
                fontSize: 20,}}>Entendo Emoções!</Text>


      </View>
      <View style={estilos.containerRow}>
        <View style={estilos.area}>
          <Text style={{
            alignSelf: 'center',
            fontSize: 18
            }}>
          Existem muitas formas de se expressar não é? Você pode estar feliz ou zangado ou animado ou até borocoxo! Vimos como saber quando alguém está expressando alguma emoção, e também aprendemos do jeitinho certo como mostrar sua emoção. 
Agorá vamos lá, não fique na dúvida na hora de expressar suas emoções, e atenção no humor das outras pessoas também! </Text>
        </View>
        <View style={estilos.viewimagem}>

        {imagemAtual &&<Image style={estilos.figura} source={{ uri: imagemAtual }} />}
          
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
      <TouchableOpacity 
      onPress={() => navigation.navigate('Home')}
      style={{
              
            }}><Image
            source={require('../img/home2.png')}
            style={{
              width: 30,
              height: 30,
              marginLeft: 15,
            }}
              /></TouchableOpacity>
      
      </ImageBackground>
    </View>

    
  );
}
