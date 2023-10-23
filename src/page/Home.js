import {
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
  } from 'react-native';
  import { getAuth } from "firebase/auth";
  import app from "../services/firebase";
  import estilos from '../css/estilohome';

  
  export default function Home({navigation}) {

    const auth = getAuth(app);

     async function signOut(){

      signOut()
        .then(() => {
          alert("Seção Encerrada");
          navigation.navigate("Login");
      })
     }
  

    return (
      <View>
      <ImageBackground
              source={require('../img/Rectangle.jpg')}
              style={estilos.imagemFundo}>
        <View style={estilos.area}>
          <Text style={estilos.nameArea}>Oi Fulano</Text>
           <Text style={estilos.textArea}>O que deseja fazer</Text>
        </View>
        <View style={estilos.containerCima}>
          <TouchableOpacity style={estilos.botoesHome}>
            <Text style={estilos.textoBotoes}>Pictogame</Text>
          </TouchableOpacity>
  
          <TouchableOpacity style={estilos.botoesHome}>
            <Text style={estilos.textoBotoes}>Metas</Text>
          </TouchableOpacity>
        </View>
  
        <View style={estilos.containerBaixo}>
          <TouchableOpacity style={estilos.botoesHome}>
            <Text style={estilos.textoBotoes}>Para Pais</Text>
          </TouchableOpacity>
  
          <TouchableOpacity style={estilos.botoesHome}>
            <Text style={estilos.textoBotoes}>Teapets</Text>
          </TouchableOpacity>
          
        </View>
        <TouchableOpacity style={estilos.botoesHome}
        onPress={signOut}>
            <Text style={estilos.textoBotoes}>Sair</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
  