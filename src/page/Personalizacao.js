import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native';
import estilos from '../css/estiloperso';







export default function Personalizacao({navigation}) {


  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const Imagens = require("../data/TeaPetData");
let imagempet = Imagens[0].imagempet;


  return (
    <View>
      <View style={estilos.area}>
        <Text style={estilos.nameArea}>Oi " "</Text>
        <Text style={estilos.textArea}>O que deseja fazer</Text>
      </View>

      <View style={estilos.container}>
      <View style={estilos.containerCima}></View>
      <View style={estilos.containerPet}>
        <Image source={require('../img/pet7.png')} style={estilos.pet} />
        </View>
        <View style={estilos.containerCor}>
        <TouchableOpacity style={estilos.botaoCor1}></TouchableOpacity>
        <TouchableOpacity style={estilos.botaoCor2}></TouchableOpacity>
        <TouchableOpacity style={estilos.botaoCor3}></TouchableOpacity>
        </View>
      </View>

      <View style={estilos.sair}>

      <TouchableOpacity 
      onPress={() => navigation.navigate("TabRoutes")}
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
    </View>
  );
}
