import { Text, View, TextInput, Pressable } from "react-native";
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
<View style={estilos.container}>
    <Text style={estilos.formTitle}>Redefinição de Senha</Text>
    <TextInput
    style={estilos.formInput}
    placeholder="informe o email"
    keyboardType="email-address"
    autoCapitalize="none"
    autoComplete="email"
    value={userMail}
    onChangeText={setUserMail}
    />
    <Pressable
    style={estilos.sendButton}
    onPress={replacePass}>
        <Text style={estilos.textButton}>Enviar</Text>
    </Pressable>

    <View style={estilos.subContainer}>
        <Pressable
        onPress={() => navigation.navigate("Login")}>
            <Text>Voltar</Text>
        </Pressable>

    </View>



</View>
    );
    
}