import React, { useState } from "react";
import {ScrollView, SafeAreaView, View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import estilos from '../css/estilofeedback';

export default function FeedBack({navigation}) {
  const [feedback, setFeedback] = useState("")

  return (
     <ScrollView scrollEnabled>
    <View style={estilos.fundo}>
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
          <Text style={estilos.titleArea}>bla bla bla </Text>
        </View>
        <View>
          <Image style={estilos.figura} source={require('../img/hamster.jpeg')} />
        </View>
      </View>

      <View>
        <TextInput
          style={estilos.caixaFeedback}
          value={feedback}
          placeholder="Digite seu feedback"
          onChangeText={(texto) => setFeedback(texto)}
          multiline={true} // Habilita a quebra de linha
          numberOfLines={12} // Define o número de linhas visíveis
        />
        <TouchableOpacity style={estilos.botao}>
        <Text style={estilos.textoBotao}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>

    </ScrollView>
  );
}
