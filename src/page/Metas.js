import {View, Text, ImageBackground, TouchableOpacity, ScrollView, Image,} from 'react-native';
import React, { useState } from 'react';
import estilos from '../css/estilometas'

export default function Metas({navigation}) {

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

  return (
    
      <ImageBackground source={backgroundImage} style={{ flex: 1 }}>

      <View>

        
          <View style={{
              flexWrap: 'wrap',
              flexDirection: 'row',
              marginTop: 35,
          }}>

            <View style={estilos.area}>
              <Text style={estilos.titleArea}>Metas</Text>
            </View>

            <View style={estilos.areabotoes}>
                
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
            
            <View style={estilos.arearea}>
            <ScrollView scrollEnabled>
            <View style={estilos.containersMetas}>
              <View>
              <TouchableOpacity style={estilos.boxnumMeta}
                onPress={() => navigation.navigate("F2")}>
                <Text style={estilos.numMeta}>
                  1
                </Text>
                </TouchableOpacity>
              </View>
              <View style={estilos.containerColumn}>
              <View style={estilos.containerTmetas}>
                <Text style={estilos.textMeta}>Tipos De Cumprimentos</Text>
                </View>
              </View>
            </View>

            <View style={estilos.containersMetas}>
              <View>
                
              <TouchableOpacity style={estilos.boxnumMeta}
                onPress={() => navigation.navigate("FeedBack")}>
                <Text style={estilos.numMeta}>
                  2
                </Text>
                </TouchableOpacity>
              </View>
              <View style={estilos.containerColumn}>
              <View style={estilos.containerTmetas}>
                <Text style={estilos.textMeta}>Que tal um abraço?</Text>
                </View>
              </View>
            </View>

            <View style={estilos.containersMetas}>
              <View>
              <TouchableOpacity style={estilos.boxnumMeta}
                onPress={() => navigation.navigate("F3")}>
                <Text style={estilos.numMeta}>
                  3
                </Text>
                </TouchableOpacity>
              </View>
              <View style={estilos.containerColumn}>
              <View style={estilos.containerTmetas}>
                <Text style={estilos.textMeta}>Situações Sociais</Text>
                </View>
              </View>
            </View>

            <View style={estilos.containersMetas}>
              <View>
              <TouchableOpacity style={estilos.boxnumMeta}
                onPress={() => navigation.navigate("F4")}>
                <Text style={estilos.numMeta}>
                  4
                </Text>
                </TouchableOpacity>
              </View>
              <View style={estilos.containerColumn}>
              <View style={estilos.containerTmetas}>
                <Text style={estilos.textMeta}>Bora Comunicar?</Text>
                </View>
              </View>
            </View>

            <View style={estilos.containersMetas}>
              <View>
              <TouchableOpacity style={estilos.boxnumMeta}
                onPress={() => navigation.navigate("F5")}>
                <Text style={estilos.numMeta}>
                  5
                </Text>
                </TouchableOpacity>
              </View>
              <View style={estilos.containerColumn}>
              <View style={estilos.containerTmetas}>
                <Text style={estilos.textMeta}>Entendo Emoções!</Text>
                </View>
              </View>
            </View>
            </ScrollView>
            </View>
            
          
        
      </View>
      </ImageBackground>
    
  );
}
