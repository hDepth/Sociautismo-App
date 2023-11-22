import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity,ImageBackground } from 'react-native';
import estilos from '../css/estiloperso';






export default function P7({navigation}) {

  const [imagemAtual, setImagemAtual] = useState('https://github.com/hDepth/Sociautismo-App/assets/139086684/58cf60f0-01dd-4a7e-bda6-a5f75d515105');
  const [alternar, setAlternar] = useState(false);


  const navegarParaSegundaPagina = () => {
    navigation.navigate('Metas', { imagemAtual });
  };

  const buttons = [
    { label: 'Coroa', image: require('../img/Coroa.jpeg'), onPress: () => {
 
      setImagemAtual('https://github.com/hDepth/Sociautismo-App/assets/139086684/a0a094aa-b5c1-40e7-b30e-69413bc14091');
  }},
    { label: 'Laço', image: require('../img/Laço.jpeg'), onPress: () => {
 
      setImagemAtual('https://github.com/hDepth/Sociautismo-App/assets/139086684/265b855b-b820-4578-bc12-50782b393ea5');
  }},
    { label: 'Boina', image: require('../img/boina.jpeg'), onPress: () => {
 
      setImagemAtual('https://github.com/hDepth/Sociautismo-App/assets/139086684/fcb41e53-90d7-4631-b960-7a9ebe415eb1');
  }},
    { label: 'Fones De Ouvido', image: require('../img/headphone.jpeg'), onPress: () => {
 
      setImagemAtual('https://github.com/hDepth/Sociautismo-App/assets/139086684/ea9eba17-d5ef-44b5-8570-4f77e896e80d');
  }},
    { label: 'Cartola', image: require('../img/cartola.jpeg'), onPress: () => {
 
      setImagemAtual('https://github.com/hDepth/Sociautismo-App/assets/139086684/d04cac83-0b79-4b41-8f69-bb3fe6b4f416');
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
          <Text style={estilos.nameArea}>Oi " "</Text>
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
