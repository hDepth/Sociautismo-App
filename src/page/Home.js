import {
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
  } from 'react-native';
  import React, {useContext, useEffect} from 'react';
  import { getAuth } from "firebase/auth";
  import { SignInContext } from '../contexts/authContext';
  import app from "../services/firebase";



  import estilos from '../css/estilohome';

  
  export default function Home() {

    
    const {dispatchSignedIn} = useContext(SignInContext)

    useEffect(()=>{
      auth().onAuthStateChanged((user)=>{
        if(user){
          dispatchSignedIn({type:"UPDATE_SIGN_IN", payload:{userToken:"signed-in"}})
        }else{
          dispatchSignedIn({type:"UPDATE_SIGN_IN", payload:{userToken:null}})

        }
      })
      
    },[])
    async function signOut() {
      const auth = getAuth(app);
      auth().signOut();
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

          <TouchableOpacity onPress={signOut} style={estilos.botaosair}>
            <Text style={estilos.textosair}>Sair</Text>
          </TouchableOpacity>
          
        </View>
        </ImageBackground>
      </View>
    );
  }
  