import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity,ImageBackground } from 'react-native';
import estilos from '../css/estiloperso';






export default function P2({navigation}) {

  const [imagemAtual, setImagemAtual] = useState('https://github.com/hDepth/Sociautismo-App/assets/139086684/005a8c98-22c6-41e0-8e8c-90041a66ac4b');
  const [alternar, setAlternar] = useState(false);


  const navegarParaSegundaPagina = () => {
    navigation.navigate('Metas', { imagemAtual });
  };

  const buttons = [
    { label: 'Coroa', image: require('../img/Coroa.jpeg'), onPress: () => {
 
      setImagemAtual('https://github.com/hDepth/Sociautismo-App/assets/139086684/4a66ce8b-37c6-43a6-8a11-a68b5e8a861e');
  }},
    { label: 'Laço', image: require('../img/Laço.jpeg'), onPress: () => {
 
      setImagemAtual('https://github.com/hDepth/Sociautismo-App/assets/139086684/069a59e7-08a1-4e60-abbb-886287f17e75');
  }},
    { label: 'Boina', image: require('../img/boina.jpeg'), onPress: () => {
 
      setImagemAtual('https://github.com/hDepth/Sociautismo-App/assets/139086684/8f911f97-b169-47df-8cc7-c0ab35bad1fd');
  }},
    { label: 'Fones De Ouvido', image: require('../img/headphone.jpeg'), onPress: () => {
 
      setImagemAtual('https://github.com/hDepth/Sociautismo-App/assets/139086684/4f258fed-936c-4e91-bac8-62ce2f8d3aba');
  }},
    { label: 'Cartola', image: require('../img/cartola.jpeg'), onPress: () => {
 
      setImagemAtual('https://github.com/hDepth/Sociautismo-App/assets/139086684/d95d7144-3022-432a-9370-1d1de59efd24');
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
              source={require('../img/confere.png')}
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
