import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';

export default function Musica() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState(null);

  useEffect(() => {
    const loadSound = async () => {
      const { sound } = await Audio.Sound.createAsync(
        require('../audios/chamber.mp3') 
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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={playSound}>
        <Text>{isPlaying ? 'Pausar' : 'Reproduzir'}</Text>
      </TouchableOpacity>
    </View>
  );
}