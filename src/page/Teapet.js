import {
    View,
    Text,
    ImageBackground,
    Image,
    TouchableOpacity,
  } from 'react-native';
  import estilos from '../css/estiloteapet';
  import React, {useState} from 'react';
  
  export default function Teapet({navigation}) {

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
              marginTop: 1,
          }}>
        <View style={estilos.area}>
          <Text style={estilos.nameArea}>Oi " "</Text>
          <Text style={estilos.textArea}>O que deseja fazer</Text>
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
                source={require('../img/pet5.png')}
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
                source={require('../img/pet4.png')}
                style={estilos.fotoBotoes}
              />
            </TouchableOpacity>
          </View>
  
  
          <View style={estilos.containerMeio}>
          <TouchableOpacity style={estilos.pets}>
           <Image
              source={require('../img/pet16.png')}
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
        
      </View>
      </ImageBackground>
    );
  }
  