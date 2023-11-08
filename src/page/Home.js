import { View, Text, ImageBackground, TouchableOpacity, ScrollView, Image} from 'react-native';
import React, { useState } from 'react';
  import { getAuth } from "firebase/auth";
  import app from "../services/firebase";
  import estilos from '../css/estilohome';

  
  export default function Home({navigation}) {

    const [backgroundImage, setBackgroundImage] = useState(require('../img/Rectangle.jpg'));

  const changeBackground1 = () => {
    setBackgroundImage(require('../img/MontanhaLaranja.jpeg'));
  };
  const changeBackground2 = () => {
    setBackgroundImage(require('../img/FlorestaLaranja.jpeg'));
  };
  const changeBackground3 = () => {
    setBackgroundImage(require('../img/Espaço.jpeg'));
  };
  const changeBackground4 = () => {
    setBackgroundImage(require('../img/Rectangle.jpg'));
  };

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
      <ImageBackground source={backgroundImage} style={{ flex: 1 }}>
      <View>
      
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
          <TouchableOpacity style={estilos.botaopet}
          onPress={() => navigation.navigate("Teste1")}>
            <Text style={estilos.textoBotoes}>Teapets</Text>
            <Image
                source={require('../img/Teapet.jpeg')}
                style={estilos.fotoBotoes}
              />
          </TouchableOpacity>

          </View>
          <View style={estilos.viewfundos}>
      <TouchableOpacity 
          style={estilos.botoesfundo}
          onPress={changeBackground1}>
            <Image
                source={require('../img/MontanhaLaranja.jpeg')}
                style={{alignSelf: 'center',
                height: '100%', 
                width: '100%',
                borderRadius: 20,                            
              }}/></TouchableOpacity>

<TouchableOpacity 
          style={estilos.botoesfundo}
          onPress={changeBackground2}>
            <Image
                source={require('../img/FlorestaLaranja.jpeg')}
                style={{alignSelf: 'center',
                height: '100%', 
                width: '100%',
                borderRadius: 20,                            
              }}/></TouchableOpacity>

<TouchableOpacity 
          style={estilos.botoesfundo}
          onPress={changeBackground3}>
            <Image
                source={require('../img/Espaço.jpeg')}
                style={{alignSelf: 'center',
                height: '100%', 
                width: '100%',
                borderRadius: 20,                            
              }}/></TouchableOpacity>

<TouchableOpacity 
          style={estilos.botoesfundo}
          onPress={changeBackground4}>
            <Image
                source={require('../img/Rectangle.jpg')}
                style={{alignSelf: 'center',
                height: '100%', 
                width: '100%',
                borderRadius: 20,                            
              }}/></TouchableOpacity>

</View>



      </View>
      </ImageBackground>
    );
  }
  