import {
    View,
    Text,
    ImageBackground,
    Image,
    TouchableOpacity,
    Modal
  } from 'react-native';
  import estilos from '../css/estiloteapet';
  import React, {useState, useEffect} from 'react';
  import { Audio } from 'expo-av';
  
  export default function Teapet({navigation}) {

    const [backgroundImage, setBackgroundImage] = useState(require('../img/Rectangle.jpg'));
    const [fundoModalVisible, setFundoModalVisible] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState(null);

  useEffect(() => {
    const loadSound = async () => {
      const { sound } = await Audio.Sound.createAsync(
        require('../audios/bloqueado.mp3') 
      );
      setSound(sound);
    };

    loadSound();

    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, []);

  const playSound = async () => {
    if (sound) {
      if (isPlaying) {
        await sound.stopAsync();
      } else {
        await sound.playAsync();
      }
      setIsPlaying(!isPlaying);
    }
  };


    const closeFundoModal = () => {
        setFundoModalVisible(false);
      };
  
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
      const changeBackground5 = () => {
        setBackgroundImage(require('../img/oceano.jpeg'));
      };
      const changeBackground6 = () => {
        setBackgroundImage(require('../img/branco.jpg'));
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
          <Text style={estilos.nameArea}>TEAPET</Text>
          <Text style={estilos.textArea}>Escolha seu pet!</Text>
        </View>

        <View style={estilos.areabotoes}>
                
        <TouchableOpacity
        style={estilos.trocarfundo}
        onPress={() => setFundoModalVisible(true)}>
            <Image
                source={require('../img/PaspelPasrede.png')}
                style={{alignSelf: 'center',
                height: '100%', 
                width: '100%',
                borderRadius: 8,
              }}/>
           </TouchableOpacity>
              </View>
        </View>
        <Modal
        animationType="slide"
        transparent={false}
        visible={fundoModalVisible}
        onRequestClose={closeFundoModal}>
        <View style={estilos.viewfundos}>
          
        <ImageBackground source={backgroundImage} style={{ flex: 1,
        resizeMode: 'cover',
        width: '100%',
        height: '100%'
        }}>
          <View style={estilos.viewfundoss}>
          
        <TouchableOpacity 
          style={estilos.botoesfundoz}
          onPress={changeBackground1}>
            <Image
                source={require('../img/MontanhaLaranja.jpeg')}
                style={{alignSelf: 'center',
                height: '100%', 
                width: '100%',
                           
              }}/></TouchableOpacity>

<TouchableOpacity 
          style={estilos.botoesfundoz}
          onPress={changeBackground2}>
            <Image
                source={require('../img/FlorestaLaranja.jpeg')}
                style={{alignSelf: 'center',
                height: '100%', 
                width: '100%',
                            
              }}/></TouchableOpacity>

<TouchableOpacity 
          style={estilos.botoesfundoz}
          onPress={changeBackground3}>
            <Image
                source={require('../img/Espaço.jpeg')}
                style={{alignSelf: 'center',
                height: '100%', 
                width: '100%',
                          
              }}/></TouchableOpacity>

<TouchableOpacity 
          style={estilos.botoesfundoz}
          onPress={changeBackground4}>
            <Image
                source={require('../img/Rectangle.jpg')}
                style={{alignSelf: 'center',
                height: '100%', 
                width: '100%',
                            
              }}/></TouchableOpacity>
              <TouchableOpacity 
          style={estilos.botoesfundoz}
          onPress={changeBackground5}>
            <Image
                source={require('../img/oceano.jpeg')}
                style={{alignSelf: 'center',
                height: '100%', 
                width: '100%',
                           
              }}/></TouchableOpacity>

<TouchableOpacity 
          style={estilos.botoesfundoz}
          onPress={changeBackground6}>
            <Image
                source={require('../img/branco.jpg')}
                style={{alignSelf: 'center',
                height: '100%', 
                width: '100%',
                            
              }}/></TouchableOpacity>
              
</View>
          <TouchableOpacity onPress={closeFundoModal} style={estilos.closeButtonF}>
            <Text style={estilos.closeButtonTextF}>Close Modal</Text>
          </TouchableOpacity>
          </ImageBackground>
        </View>
      </Modal>
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
  
            <TouchableOpacity 
            onPress={() => navigation.navigate("P2")}
            style={estilos.pets}>
              <Image
                source={require('../img/pet1.0.png')}
                style={estilos.fotoBotoes}
              />
            </TouchableOpacity>
  
            <TouchableOpacity 
             onPress={() => navigation.navigate("P3")}
            style={estilos.pets}>
              <Image
                source={require('../img/pet4.png')}
                style={estilos.fotoBotoes}
              />
            </TouchableOpacity>
          </View>
  
  
          <View style={estilos.containerMeio}>
          <TouchableOpacity 
           onPress={() => navigation.navigate("P4")}
          style={estilos.pets}>
           <Image
              source={require('../img/pet16.png')}
              style={estilos.fotoBotoes}
            />
          </TouchableOpacity>
  
          <TouchableOpacity 
           onPress={playSound}
          style={estilos.pets}>
            <Image
              source={require('../img/pet10.png')}
              style={estilos.fotoBotoes}
            />
          </TouchableOpacity>
  
           <TouchableOpacity 
            onPress={() => navigation.navigate("P6")}
           style={estilos.pets}>
            <Image
              source={require('../img/Abelha.png')}
              style={estilos.fotoBotoes}
            />
          </TouchableOpacity>
          </View>
  
  
        <View style={estilos.containerBaixo}>
          <TouchableOpacity 
           onPress={() => navigation.navigate("P7")}
          style={estilos.pets}>
           <Image
              source={require('../img/pet9.png')}
              style={estilos.fotoBotoes}
            />
          </TouchableOpacity>
  
          <TouchableOpacity 
           onPress={() => navigation.navigate("P8")}
          style={estilos.pets}>
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
  