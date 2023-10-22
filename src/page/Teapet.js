import {
    View,
    Text,
    ImageBackground,
    Image,
    TouchableOpacity,
  } from 'react-native';
  import estilos from '../css/estiloteapet';
  
  export default function Teapet() {
    return (
      <View>
        <View style={estilos.area}>
          <Text style={estilos.nameArea}>Oi Fulano</Text>
          <Text style={estilos.textArea}>O que deseja fazer</Text>
        </View>
  
        <View style={estilos.container}>
          <View style={estilos.containerTexto}>
          <Text style={estilos.texto}>Escolha um pet para te</Text>
          <Text style={estilos.texto}>acompanhar</Text>
          </View>
  
  
          <View style={estilos.containerCima}>
            <TouchableOpacity style={estilos.pets}>
              <Image
                source={require('../img/hamster.jpeg')}
                style={estilos.fotoBotoes}
              />
            </TouchableOpacity>
  
            <TouchableOpacity style={estilos.pets}>
              <Image
                source={require('../img/coelho.jpeg')}
                style={estilos.fotoBotoes}
              />
            </TouchableOpacity>
  
            <TouchableOpacity style={estilos.pets}>
              <Image
                source={require('../img/hamster.jpeg')}
                style={estilos.fotoBotoes}
              />
            </TouchableOpacity>
          </View>
  
  
          <View style={estilos.containerMeio}>
          <TouchableOpacity style={estilos.pets}>
           <Image
              source={require('../img/coelho.jpeg')}
              style={estilos.fotoBotoes}
            />
          </TouchableOpacity>
  
          <TouchableOpacity style={estilos.pets}>
            <Image
              source={require('../img/hamster.jpeg')}
              style={estilos.fotoBotoes}
            />
          </TouchableOpacity>
  
           <TouchableOpacity style={estilos.pets}>
            <Image
              source={require('../img/coelho.jpeg')}
              style={estilos.fotoBotoes}
            />
          </TouchableOpacity>
          </View>
  
  
        <View style={estilos.containerBaixo}>
          <TouchableOpacity style={estilos.pets}>
           <Image
              source={require('../img/hamster.jpeg')}
              style={estilos.fotoBotoes}
            />
          </TouchableOpacity>
  
          <TouchableOpacity style={estilos.pets}>
            <Image
              source={require('../img/coelho.jpeg')}
              style={estilos.fotoBotoes}
            />
          </TouchableOpacity>
  
           <TouchableOpacity style={estilos.pets}>
            <Image
              source={require('../img/hamster.jpeg')}
              style={estilos.fotoBotoes}
            />
          </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
  