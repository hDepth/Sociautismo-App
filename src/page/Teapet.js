import {
    View,
    Text,
    ImageBackground,
    Image,
    TouchableOpacity,
  } from 'react-native';
  import estilos from '../css/estiloteapet';
  
  export default function Teapet({navigation}) {
    return (
      <View>
        <ImageBackground
              source={require('../img/MontanhaLaranja.jpeg')}
              style={estilos.imagemFundo}>
        <View style={estilos.area}>
          <Text style={estilos.nameArea}>Oi " "</Text>
          <Text style={estilos.textArea}>O que deseja fazer</Text>
        </View>
  
        <View style={estilos.container}>
          <View style={estilos.containerTexto}>
          <Text style={estilos.texto}>Escolha um pet para te</Text>
          <Text style={estilos.texto}>acompanhar</Text>
          </View>
  
  
          <View style={estilos.containerCima}>
            <TouchableOpacity 
            onPress={() => navigation.navigate("Personalizacao")}
            style={estilos.pets}>
              <Image
                source={require('../img/pet16.png')}
                style={estilos.fotoBotoes}
              />
            </TouchableOpacity>
  
            <TouchableOpacity style={estilos.pets}>
              <Image
                source={require('../img/pet1.0.png')}
                style={estilos.fotoBotoes}
              />
            </TouchableOpacity>
  
            <TouchableOpacity style={estilos.pets}>
              <Image
                source={require('../img/pet4.0.png')}
                style={estilos.fotoBotoes}
              />
            </TouchableOpacity>
          </View>
  
  
          <View style={estilos.containerMeio}>
          <TouchableOpacity style={estilos.pets}>
           <Image
              source={require('../img/pet5.0.png')}
              style={estilos.fotoBotoes}
            />
          </TouchableOpacity>
  
          <TouchableOpacity style={estilos.pets}>
            <Image
              source={require('../img/pet10.png')}
              style={estilos.fotoBotoes}
            />
          </TouchableOpacity>
  
           <TouchableOpacity style={estilos.pets}>
            <Image
              source={require('../img/pet15.png')}
              style={estilos.fotoBotoes}
            />
          </TouchableOpacity>
          </View>
  
  
        <View style={estilos.containerBaixo}>
          <TouchableOpacity style={estilos.pets}>
           <Image
              source={require('../img/pet9.png')}
              style={estilos.fotoBotoes}
            />
          </TouchableOpacity>
  
          <TouchableOpacity style={estilos.pets}>
            <Image
              source={require('../img/pet17.png')}
              style={estilos.fotoBotoes}
            />
          </TouchableOpacity>
  
           <TouchableOpacity  
           onPress={() => navigation.navigate("TabRoutes")}
           style={estilos.pets}>
            <Image
              source={require('../img/Voltar.png')}
              style={{
                width: 70,
                height: 70,
                marginBottom: 9
              }}
            />
          </TouchableOpacity>
          </View>
        </View>
        </ImageBackground>
      </View>
    );
  }
  