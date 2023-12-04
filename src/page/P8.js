import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity,ImageBackground } from 'react-native';
import estilos from '../css/estiloperso';






export default function P8({navigation}) {

  const [imagemAtual, setImagemAtual] = useState('https://github.com/hDepth/Sociautismo-App/assets/139086684/f695cd0c-e7df-405b-b302-2589e4037108');
  const [alternar, setAlternar] = useState(false);


  const navegarParaSegundaPagina = () => {
    navigation.navigate('Metasx', { imagemAtual });
  };

  const buttons = [
    { label: 'Coroa', image: require('../img/Coroa.jpeg'), onPress: () => {
 
      setImagemAtual('https://github.com/hDepth/Sociautismo-App/assets/139086684/10d55bb3-38dc-4ee7-8c39-7a55ec638627');
  }},
    { label: 'Laço', image: require('../img/Laço.jpeg'), onPress: () => {
 
      setImagemAtual('https://github.com/hDepth/Sociautismo-App/assets/139086684/589c46f8-8556-4f56-a7a4-e8a0e5ae7869');
  }},
    { label: 'Boina', image: require('../img/boina.jpeg'), onPress: () => {
 
      setImagemAtual('https://github.com/hDepth/Sociautismo-App/assets/139086684/aecdb9a8-3940-4da2-8f5f-c273004efe19');
  }},
    { label: 'Fones De Ouvido', image: require('../img/headphone.jpeg'), onPress: () => {
 
      setImagemAtual('https://github.com/hDepth/Sociautismo-App/assets/139086684/3c54ccb4-2f45-4824-9f6e-a90e7f21b9b8');
  }},
    { label: 'Cartola', image: require('../img/cartola.jpeg'), onPress: () => {
 
      setImagemAtual('https://github.com/hDepth/Sociautismo-App/assets/139086684/ca8be55b-2203-45fa-b689-21b2cb35bdd7');
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
