import { createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";

import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Image, Alert } from "react-native";

import app from "../../services/firebase";
import estilos from "../../css/estilocadastro";

export default function Cadastro({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function createUser() {
    const auth = getAuth(app);

    await createUserWithEmailAndPassword(auth, email, password)

      .then((userCredential) => {

        Alert.alert("cadastrado com sucesso - ", userCredential.user.uid);
      })
      .catch((error) => {
        Alert.alert('Email Inválido!',
        'Utilize um email válido para o cadastro! Aqui está um exemplo: Sociautismo@email.com',
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false }
         );

        if (error.code == "auth/email-already-in-use") {
          Alert.alert(
            'Email Ja está em uso',
            'Utilize um email que ainda não foi cadastrado no app!',
            [
              { text: 'OK', onPress: () => console.log('OK Pressed') },
            ],
            { cancelable: false }
          );
        }
      });
  }

  return (
    <View style={estilos.containerPrincipal}>

      <ImageBackground
        style={estilos.imagemFundo}
        source={require("../../img/Rectangle.jpg")}>

      
     
        <Text style={estilos.title}>Cadastre-se</Text>

  
        <TextInput
          style={estilos.caixasTexto}
          placeholder="email existente"
          value={email}
          onChangeText={(value) => setEmail(value)}
        />
        <TextInput
          style={estilos.caixaSenha}
          placeholder="senha"
          value={password}
          onChangeText={(value) => setPassword(value)}
          secureTextEntry
        />

        <TouchableOpacity style={estilos.Botao} 
        onPress={createUser}>
          <Text style={estilos.textoBotao}>Cadastrar-se</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={estilos.Botao}
        >
          <Text style={estilos.textoBotao}>Entrar</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}
