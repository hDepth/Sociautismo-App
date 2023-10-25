import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import estilos from '../css/estilometas';

export default function Metas({navigation}) {
  return (
    <ScrollView scrollEnabled>


      <View style={estilos.container}>
        <ImageBackground
          source={require('../img/FlorestaLaranja.jpeg')}
          style={estilos.imagemFundo}>


          

            <View style={estilos.area}>
              <Text style={estilos.titleArea}>Pictogame</Text>
            </View>

            <View style={estilos.arearea}>
            <View style={estilos.containersMetas}>
              <TouchableOpacity style={estilos.boxnumMeta}>
                <Text style={estilos.numMeta}>
                  1
                </Text>
              </TouchableOpacity>
              <Text style={estilos.textMeta}>Que tal um abraço?</Text>

              <View style={estilos.barradeprogresso}></View>
            </View>

            <View style={estilos.containersMetas}>
              <View style={estilos.boxnumMeta}>
                <Text style={estilos.numMeta}>
                  2
                </Text>
                <Text style={estilos.textMeta}>Que tal outro abraço kkkk</Text>
                <View style={estilos.barradeprogresso}></View>
              </View>
              
            </View>

            <View style={estilos.containersMetas}>
              <View style={estilos.boxnumMeta}>
                <Text style={estilos.numMeta}>
                  3
                </Text>
                <Text style={estilos.textMeta}>Que tal outro abraço kkkk</Text>
                <View style={estilos.barradeprogresso}></View>
              </View>
             
            </View>

            <View style={estilos.containersMetas}>
              <View style={estilos.boxnumMeta}>
                <Text style={estilos.numMeta}>
                  4
                </Text>
                <Text style={estilos.textMeta}>Que tal outro abraço kkkk</Text>
                <View style={estilos.barradeprogresso}></View>
              </View>
              
            </View>

            <View style={estilos.containersMetas}>
              <View style={estilos.boxnumMeta}>
                <Text style={estilos.numMeta}>
                  5
                </Text>
                <Text style={estilos.textMeta}>Que tal outro abraço kkkk</Text>
                <View style={estilos.barradeprogresso}></View>
              </View>
            </View>
            
            <View style={estilos.containersMetas}>
              <View style={estilos.boxnumMeta}>
                <Text style={estilos.numMeta}>
                  6
                </Text>
                <Text style={estilos.textMeta}>Que tal outro abraço kkkk</Text>
                <View style={estilos.barradeprogresso}></View>
              </View>
              
            </View>
            
            <View style={estilos.containersMetas}>
              <View style={estilos.boxnumMeta}>
                <Text style={estilos.numMeta}>
                  7
                </Text>
                <Text style={estilos.textMeta}>Que tal outro abraço kkkk</Text>
                <View style={estilos.barradeprogresso}></View>
              </View>
              
            </View>
            
            <View style={estilos.containersMetas}>
              <View style={estilos.boxnumMeta}>
                <Text style={estilos.numMeta}>
                  8
                </Text>
                <Text style={estilos.textMeta}>Que tal outro abraço kkkk</Text>
                <View style={estilos.barradeprogresso}></View>
              </View>
              
            </View>
            
            <View style={estilos.containersMetas}>
              <View style={estilos.boxnumMeta}>
                <Text style={estilos.numMeta}>
                  9
                </Text>
                <Text style={estilos.textMeta}>Que tal outro abraço kkkk</Text>
                <View style={estilos.barradeprogresso}></View>
              </View>
              
            </View>
            
            <View style={estilos.containersMetas}>
              <View style={estilos.boxnumMeta}>
                <Text style={estilos.numMeta}>
                  10
                </Text>
                <Text style={estilos.textMeta}>Que tal outro abraço kkkk</Text>
                <View style={estilos.barradeprogresso}></View>
              </View>
              
            </View>

            </View>
            
        </ImageBackground>
      </View>
    </ScrollView>
  );
}