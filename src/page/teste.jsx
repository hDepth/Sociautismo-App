import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';

export default function app() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState(null);

  const loadSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require('../audios/chamber.mp3') // Substitua 'sample.mp3' pelo caminho correto para o seu arquivo de áudio
    );
    setSound(sound);
  };

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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={loadSound}>
        <Text>Carregar Áudio</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={playSound}>
        <Text>{isPlaying ? 'Pausar' : 'Reproduzir'}</Text>
      </TouchableOpacity>
      
    </View>



  );
}
