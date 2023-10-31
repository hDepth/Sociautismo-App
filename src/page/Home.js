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
  //     setPersistence(auth, browserSessionPersistence)
  // .then(() => {
  //    // Existing and future Auth states are now persisted in the current
  //    // session only. Closing the window would clear any existing state even
  //   // if a user forgets to sign out.
  //    // ...
  //   // New sign-in will be persisted with session persistence.
  //    return signInWithEmailAndPassword(auth, email, password);
  //  })
  //  .catch((error) => {
  //    // Handle Errors here.
  //    console.log("ENOENT ERR!", error.code);
  //  });

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
          <Text style={estilos.nameArea}>Oi " "</Text>
           <Text style={estilos.textArea}>O que deseja fazer</Text>
        </View>

        <View style={estilos.containerCima}>
          <TouchableOpacity style={estilos.botaopicto}
          onPress={() => navigation.navigate("Niveis")}>
            <Text style={estilos.textoBotoes}>Pictogame</Text>
            <Image
                source={require('../img/Pictogame.jpeg')}
                style={estilos.fotoBotoes}
              />
          </TouchableOpacity>
  
          <TouchableOpacity style={estilos.botaometa}
          onPress={() => navigation.navigate("Metas")}>
            <Text style={estilos.textoBotoes}>Metas</Text>
            <Image
                source={require('../img/Tasks.jpeg')}
                style={estilos.fotoBotoes}
              />
          </TouchableOpacity>
       
  
          <TouchableOpacity style={estilos.botaopais}
          onPress={() => navigation.navigate("Pais")}>
            <Text style={estilos.textoBotoes}>Para Pais</Text>
            <Image
                source={require('../img/Paraospais.jpeg')}
                style={estilos.fotoBotoes}
              />
          </TouchableOpacity>
  
          <TouchableOpacity style={estilos.botaopet}
          onPress={() => navigation.navigate("Teapet")}>
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
  