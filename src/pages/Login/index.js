import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
  Pressable,
  Alert
} from "react-native";
import estilos from "../../css/estilologin";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../services/firebase";


export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  async function singnIn() {

    const auth = getAuth(app);
    

  

    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {    
            
        navigation.navigate("TabRoutes");
        
        console.log("Usuário entrou! - ", userCredential.user);
      })
      .catch((error) => {
        console.log("Usuario ou Senha Incorretos", error.code);
        Alert.alert('Email ou Senha Incorretos', 'Verifique se o email e senha digitados estão corretos!');
      });
  }

  return (
    <View style={estilos.containerPrincipal}>
      <ImageBackground
        style={estilos.imagemFundo}
        source={require("../../img/Rectangle.jpg")}
      >

        <Image
          style={estilos.imagemLogo}
          source={require("../../img/Logo.png")}
        />

        <TextInput
          style={estilos.caixaEmail}
          value={email}
          placeholder="Email"
          onChangeText={(texto) => setEmail(texto)}
        />

        <TextInput
          style={estilos.caixaSenha}
          placeholder="Senha"
          value={password}
          onChangeText={(password) => setPassword(password)}
          secureTextEntry
        />
        <Pressable style={estilos.recsenha}
          onPress={() => navigation.navigate("RecSenha")}>
            <Text style={estilos.textrecsenha}>Esqueci a Senha</Text>
        </Pressable>

        <TouchableOpacity
        onPress={singnIn}
        style={estilos.Botao}>
          <Text style={estilos.textoBotao}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={estilos.Botao}
        onPress={() => navigation.navigate("Cadastro")}>
          <Text style={estilos.textoBotao}>não tem uma conta?</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}
