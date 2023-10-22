import { Text, View, TextInput, Pressable, Image, ImageBackground } from "react-native";
import estilos from "../../css/estiloRecSenha";
import { useState } from "react";
import app from "../../services/firebase";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

export default function RecSenha({ navigation }) {

    const [userMail, setUserMail] = useState('');
    const auth = getAuth(app);

    function replacePass() {
        if(userMail !== ''){
            sendPasswordResetEmail(auth, userMail)
            .then(() => {
                alert("Foi enviado um email para: " + userMail + ". Verifique a sua caixa de email.");
                navigation.navigate("Login");
            })
            .catch((error) => {
                const errorMessage = error.message;
                alert("Ops! Alguma coisa nao deu certo. " + errorMessage + ". Tente novamente ou pressione voltar");
                return;
            });

        } else {
            alert("É preciso informar um e-mail válido para efetuar a redefinição de senha");
            return;
        }
    
    
    
    }

    return (
<View style={estilos.containerPrincipal}>

<ImageBackground
      source={require('../../img/Rectangle.jpg')}
      style={estilos.imagemFundo}
      >


    <Text style={estilos.titleArea}>Recuperação de Senha</Text>
     

    <Text style={estilos.titleCaixat}>Email:</Text>

    <TextInput
    style={estilos.caixaEmail}
    placeholder="informe o email"
    keyboardType="email-address"
    autoCapitalize="none"
    autoComplete="email"
    value={userMail}
    onChangeText={setUserMail}
    />
    
    <View style={estilos.subContainer}>

    <Pressable style={estilos.Botao}
         onPress={replacePass}>
          <Text style={estilos.textoBotao}>Enviar</Text>
     </Pressable>

        <Pressable style={estilos.Botao}
         onPress={() => navigation.navigate("Login")}>
          <Text style={estilos.textoBotao}>Voltar</Text>
     </Pressable>

    </View>

  </ImageBackground>
</View>
    );
    
}