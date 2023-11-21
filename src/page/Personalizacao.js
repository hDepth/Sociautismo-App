import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity,ImageBackground } from 'react-native';
import estilos from '../css/estiloperso';






export default function Personalizacao({navigation}) {

  const [imagemAtual, setImagemAtual] = useState(require('../img/pet5.png'));
  const [alternar, setAlternar] = useState(false);


  const handleImagePress = () => {
    
    navigation.navigate('TabRoutes', { selectedImage: imagemAtual });
  };


  const buttons = [
    { label: 'Coroa', image: require('../img/Coroa.jpeg'), onPress: () => {
 
      setImagemAtual(require('../img/VacaCoroa.png'));
  }},
    { label: 'Laço', image: require('../img/Laço.jpeg'), onPress: () => {
 
      setImagemAtual(require('../img/VacaLaco.png'));
  }},
    { label: 'Boina', image: require('../img/boina.jpeg'), onPress: () => {
 
      setImagemAtual(require('../img/VacaBoina.png'));
  }},
    { label: 'Fones De Ouvido', image: require('../img/headphone.jpeg'), onPress: () => {
 
      setImagemAtual(require('../img/pet5Headphone.png'));
  }},
    { label: 'Cartola', image: require('../img/cartola.jpeg'), onPress: () => {
 
      setImagemAtual(require('../img/VacaCartola.png'));
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
            <Image source={imagemAtual} style={estilos.pet} />
          </View>
        </View>

        <View style={estilos.sair}>
          <TouchableOpacity
            onPress={handleImagePress}
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
