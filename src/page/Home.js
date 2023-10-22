import {
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
  } from 'react-native';

  import estilos from '../css/estilohome';

  
  export default function Home() {

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
        </ImageBackground>
      </View>
    );
  }
  