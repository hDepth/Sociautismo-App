import {
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
    Image
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
              source={require('../img/MontanhaLaranja.jpeg')}
              style={estilos.imagemFundo}>
        <View style={estilos.area}>
          <Text style={estilos.nameArea}>Oi Fulano</Text>
           <Text style={estilos.textArea}>O que deseja fazer</Text>
        </View>

        <View style={estilos.containerCima}>
          <TouchableOpacity style={estilos.botaopicto}>
            <Text style={estilos.textoBotoes}>Pictogame</Text>
            <Image
                source={require('../img/Pictogame.jpeg')}
                style={estilos.fotoBotoes}
              />
          </TouchableOpacity>
  
          <TouchableOpacity style={estilos.botaometa}>
            <Text style={estilos.textoBotoes}>Metas</Text>
            <Image
                source={require('../img/Tasks.jpeg')}
                style={estilos.fotoBotoes}
              />
          </TouchableOpacity>
       
  
          <TouchableOpacity style={estilos.botaopais}>
            <Text style={estilos.textoBotoes}>Para Pais</Text>
            <Image
                source={require('../img/Paraospais.jpeg')}
                style={estilos.fotoBotoes}
              />
          </TouchableOpacity>
  
          <TouchableOpacity style={estilos.botaopet}>
            <Text style={estilos.textoBotoes}>Teapets</Text>
            <Image
                source={require('../img/Teapet.jpeg')}
                style={estilos.fotoBotoes}
              />
          </TouchableOpacity>

          </View>

        </ImageBackground>
      </View>
    );
  }
  