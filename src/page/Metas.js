import {View, Text, ImageBackground, TouchableOpacity, ScrollView, SafeAreaView,} from 'react-native';
import estilos from '../css/estilometas'

export default function Metas({navigation}) {
  return (
    <ScrollView scrollEnabled>

      <View>

        <ImageBackground
          source={require('../img/Espaço.jpeg')}
          style={estilos.imagemFundo}>
          
            <View style={estilos.area}>
              <Text style={estilos.titleArea}>Metas</Text>
            </View>
            
            <View style={estilos.containersMetas}>
              <View style={estilos.boxnumMeta}>
              <TouchableOpacity style={estilos.boxnumMeta}
                onPress={() => navigation.navigate("FeedBack")}>
                <Text style={estilos.numMeta}>
                  1
                </Text>
                </TouchableOpacity>
              </View>
              <View style={estilos.containerColumn}>
              <View style={estilos.containerTmetas}>
                <Text style={estilos.textMeta}>Metas</Text>
                </View>
              </View>
            </View>

            <View style={estilos.containersMetas}>
              <View style={estilos.boxnumMeta}>
                <Text style={estilos.numMeta}>
                  2
                </Text>
              </View>
              <View style={estilos.containerColumn}>
              <View style={estilos.containerTmetas}>
                <Text style={estilos.textMeta}>Metas</Text>
                </View>
              </View>
            </View>

            <View style={estilos.containersMetas}>
              <View style={estilos.boxnumMeta}>
                <Text style={estilos.numMeta}>
                  3
                </Text>
              </View>
              <View style={estilos.containerColumn}>
              <View style={estilos.containerTmetas}>
                <Text style={estilos.textMeta}>Metas</Text>
                </View>
              </View>
            </View>

            <View style={estilos.containersMetas}>
              <View style={estilos.boxnumMeta}>
                <Text style={estilos.numMeta}>
                  4
                </Text>
              </View>
              <View style={estilos.containerColumn}>
              <View style={estilos.containerTmetas}>
                <Text style={estilos.textMeta}>Metas</Text>
                </View>
              </View>
            </View>

            <View style={estilos.containersMetas}>
              <View style={estilos.boxnumMeta}>
                <Text style={estilos.numMeta}>
                  5
                </Text>
              </View>
              <View style={estilos.containerColumn}>
              <View style={estilos.containerTmetas}>
                <Text style={estilos.textMeta}>Metas</Text>
                </View>
              </View>
            </View>
            
          
        </ImageBackground>
      </View>
    </ScrollView>
  );
}
