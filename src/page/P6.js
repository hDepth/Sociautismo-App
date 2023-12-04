import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity,ImageBackground } from 'react-native';
import estilos from '../css/estiloperso';






export default function P6({navigation}) {

  const [imagemAtual, setImagemAtual] = useState('https://github.com/hDepth/Sociautismo-App/assets/139086684/3db4a456-8788-486b-a68c-9adeb6f53e82');
  const [alternar, setAlternar] = useState(false);


  const navegarParaSegundaPagina = () => {
    navigation.navigate('Metasx', { imagemAtual });
  };

  const buttons = [
    { label: 'Coroa', image: require('../img/Coroa.jpeg'), onPress: () => {
 
      setImagemAtual('https://github.com/hDepth/Sociautismo-App/assets/139086684/c4c8e0aa-00d4-4325-91d9-3768830bfdca');
  }},
    { label: 'Laço', image: require('../img/Laço.jpeg'), onPress: () => {
 
      setImagemAtual('https://github.com/hDepth/Sociautismo-App/assets/139086684/9cddc020-658c-4dad-9828-4ff5f9726342');
  }},
    { label: 'Boina', image: require('../img/boina.jpeg'), onPress: () => {
 
      setImagemAtual('https://github.com/hDepth/Sociautismo-App/assets/139086684/6de5c04f-9339-4b84-9217-ad77603856fa');
  }},
    { label: 'Fones De Ouvido', image: require('../img/headphone.jpeg'), onPress: () => {
 
      setImagemAtual('https://github.com/hDepth/Sociautismo-App/assets/139086684/69d363d1-1dac-4ac2-93d7-15dc6857055b');
  }},
    { label: 'Cartola', image: require('../img/cartola.jpeg'), onPress: () => {
 
      setImagemAtual('https://github.com/hDepth/Sociautismo-App/assets/139086684/123648eb-0210-403f-a593-0083b17326df');
  }},
  ];
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);

  const handleNextButton = () => {
    setActiveButtonIndex((prevIndex) =>
      prevIndex < buttons.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handlePrevButton = () => {
    setActiveButtonIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : buttons.length - 1
    );
  };



  return (
    <View>
      <ImageBackground
        style={estilos.imagemFundo}
        source={require('../img/Rectangle.jpg')}
      >
        <View style={estilos.area}>
          <Text style={estilos.nameArea}>Olá</Text>
          <Text style={estilos.textArea}>O que deseja fazer</Text>
        </View>

        <View style={estilos.container}>
          <View style={estilos.containercarrosel}>
            <View style={estilos.Setaesquerda}>
              <TouchableOpacity onPress={handlePrevButton}>
                <Text style={estilos.setaTexto}>{'<'}</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={estilos.button} onPress={buttons[activeButtonIndex].onPress}>
              <Image source={buttons[activeButtonIndex].image} style={estilos.image} />
              <Text>{buttons[activeButtonIndex].label}</Text>
            </TouchableOpacity>
            
            <View style={estilos.Setadireita}>
              <TouchableOpacity onPress={handleNextButton}>
                <Text style={estilos.setaTexto}>{'>'}</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={estilos.containerPet}>
            <Image source={{ uri: imagemAtual}} style={estilos.pet} />
          </View>
        </View>

        <View style={estilos.sair}>
          <TouchableOpacity
            onPress={navegarParaSegundaPagina}
            style={estilos.botaoVoltar}>
            <Image
              source={require('../img/checkicon.png')}
              style={estilos.iconeConfere}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Teapet")}
            style={estilos.botaoConfere}>
            <Image
              source={require('../img/Voltar.png')}
              style={estilos.iconeVoltar}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
