import {View, Text, ImageBackground, TouchableOpacity, ScrollView, Image
  } from 'react-native';
  import estilos from '../css/estiloniveis';
  import React, { useState } from 'react';
  
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
      <ScrollView scrollEnabled>

        <ImageBackground source={backgroundImage} style={{ flex: 1 }}>
          
        <View style={estilos.container}>
            <View 
            style={{
              flexWrap: 'wrap',
              flexDirection: 'row',
              marginTop: 1,
          
          }}>

              <View style={estilos.area}>
                <Text style={estilos.titleArea}>Pictogame</Text>
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
              <View style={estilos.containersMetas}>
                <TouchableOpacity style={estilos.boxnumMeta}
                onPress={() => navigation.navigate("Pictogame")}>
                  <Text style={estilos.numMeta}>
                    1
                  </Text>
                </TouchableOpacity>
                <View>
                <Text style={estilos.textMeta}>Que tal um abraço?</Text>
                </View>

                <View style={estilos.viewview}>
                <View style={estilos.barradeprogresso}></View>
                </View>
              </View>
  
              <View style={estilos.containersMetas}>
                <TouchableOpacity style={estilos.boxnumMeta}
                onPress={() => navigation.navigate("Pictogame")}>
                  <Text style={estilos.numMeta}>
                    2
                  </Text>
                </TouchableOpacity>
                <View>
                <Text style={estilos.textMeta}>Que tal um abraço?</Text>
                </View>

                <View style={estilos.viewview}>
                <View style={estilos.barradeprogresso}></View>
                </View>
              </View>
              <View style={estilos.containersMetas}>
                <TouchableOpacity style={estilos.boxnumMeta}
                onPress={() => navigation.navigate("Pictogame")}>
                  <Text style={estilos.numMeta}>
                    3
                  </Text>
                </TouchableOpacity>
                <View>
                <Text style={estilos.textMeta}>Que tal um abraço?</Text>
                </View>

                <View style={estilos.viewview}>
                <View style={estilos.barradeprogresso}></View>
                </View>
              </View>
              <View style={estilos.containersMetas}>
                <TouchableOpacity style={estilos.boxnumMeta}
                onPress={() => navigation.navigate("Pictogame")}>
                  <Text style={estilos.numMeta}>
                    4
                  </Text>
                </TouchableOpacity>
                <View>
                <Text style={estilos.textMeta}>Que tal um abraço?</Text>
                </View>

                <View style={estilos.viewview}>
                <View style={estilos.barradeprogresso}></View>
                </View>
              </View>
              <View style={estilos.containersMetas}>
                <TouchableOpacity style={estilos.boxnumMeta}
                onPress={() => navigation.navigate("Pictogame")}>
                  <Text style={estilos.numMeta}>
                    5
                  </Text>
                </TouchableOpacity>
                <View>
                <Text style={estilos.textMeta}>Que tal um abraço?</Text>
                </View>

                <View style={estilos.viewview}>
                <View style={estilos.barradeprogresso}></View>
                </View>
              </View>
              <View style={estilos.containersMetas}>
                <TouchableOpacity style={estilos.boxnumMeta}
                onPress={() => navigation.navigate("Pictogame")}>
                  <Text style={estilos.numMeta}>
                    6
                  </Text>
                </TouchableOpacity>
                <View>
                <Text style={estilos.textMeta}>Que tal um abraço?</Text>
                </View>

                <View style={estilos.viewview}>
                <View style={estilos.barradeprogresso}></View>
                </View>
              </View>
              
            
                
            

              </View>
              
         
        </View>
        </ImageBackground>
      </ScrollView>
    );
  }