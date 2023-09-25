import { createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";

import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import app from "../../services/firebase";
import estilos from "../../css/estilocadastro";

export default function Cadastro({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function createUser() {
    const auth = getAuth(app);
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("cadastrado com sucesso - ", credentials.user.uid);
      })
      .catch((error) => {
        console.log("ENOENT ERR!", error.code);

        if (error.code == "auth/email-already-in-use") {
          console.log("Esse Email esta em uso");
        }
      });
  }

  return (
    <View style={estilos.containerPrincipal}>
      <View>
        <Text style={estilos.title}></Text>
      </View>

      <View style={estilos.area}>
        <Text style={estilos.titleArea}>Cadastro</Text>
      </View>
      <View style={estilos.container}>
        <TextInput
          style={estilos.caixasTexto}
          placeholder="email"
          placeholderTextColor="#313131"
          value={email}
          onChangeText={(value) => setEmail(value)}
        />
        <TextInput
          style={estilos.caixaSenha}
          placeholder="senha"
          placeholderTextColor="#313131"
          value={password}
          onChangeText={(value) => setPassword(value)}
        />

        <TouchableOpacity style={estilos.Botao} onPress={createUser}>
          <Text style={estilos.textoBotao}>Cadastrar-se</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={estilos.Botao}
        >
          <Text style={estilos.textoBotao}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
