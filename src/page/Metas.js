import {
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
  } from 'react-native';
  import estilos from '../css/estilometas';
  
  export default function Metas() {
    return (
      <ScrollView scrollEnabled>
        <SafeAreaView style={estilos.container}>
          <ImageBackground
            source={require('../img/Rectangle.jpg')}
            style={estilos.imagemFundo}>
            <View style={estilos.containerPrincipal}>
              <View style={estilos.area}>
                <Text style={estilos.titleArea}>Metas</Text>
              </View>
              
              <View style={estilos.containersMetas}>
                <View style={estilos.boxnumMeta}>
                  <Text style={estilos.numMeta}>
                    1
                  </Text>
                  <Text style={estilos.textMeta}>*Meta*</Text>
                </View>
                <TouchableOpacity style={estilos.botaoMeta}>
                  <Text style={estilos.textoBotao}>Concluido</Text>
                </TouchableOpacity>
              </View>
  
              <View style={estilos.containersMetas}>
                <View style={estilos.boxnumMeta}>
                  <Text style={estilos.numMeta}>
                    2
                  </Text>
                  <Text style={estilos.textMeta}>*Meta*</Text>
                </View>
                <TouchableOpacity style={estilos.botaoMeta}>
                  <Text style={estilos.textoBotao}>Concluido</Text>
                </TouchableOpacity>
              </View>
  
              <View style={estilos.containersMetas}>
                <View style={estilos.boxnumMeta}>
                  <Text style={estilos.numMeta}>
                    3
                  </Text>
                  <Text style={estilos.textMeta}>*Meta*</Text>
                </View>
                <TouchableOpacity style={estilos.botaoMeta}>
                  <Text style={estilos.textoBotao}>Concluido</Text>
                </TouchableOpacity>
              </View>
  
              <View style={estilos.containersMetas}>
                <View style={estilos.boxnumMeta}>
                  <Text style={estilos.numMeta}>
                    4
                  </Text>
                  <Text style={estilos.textMeta}>*Meta*</Text>
                </View>
                <TouchableOpacity style={estilos.botaoMeta}>
                  <Text style={estilos.textoBotao}>Concluido</Text>
                </TouchableOpacity>
              </View>
  
              <View style={estilos.containersMetas}>
                <View style={estilos.boxnumMeta}>
                  <Text style={estilos.numMeta}>
                    5
                  </Text>
                  <Text style={estilos.textMeta}>*Meta*</Text>
                </View>
                <TouchableOpacity style={estilos.botaoMeta}>
                  <Text style={estilos.textoBotao}>Concluido</Text>
                </TouchableOpacity>
              </View>
              
            </View>
          </ImageBackground>
        </SafeAreaView>
      </ScrollView>
    );
  }