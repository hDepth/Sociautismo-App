import { View, Text, ImageBackground, TouchableOpacity, Alert, Modal, ScrollView, Image} from 'react-native';
import React, { useState } from 'react';
  import { getAuth } from "firebase/auth";
  import app from "../services/firebase";
  import estilos from '../css/estilohome';

  
  export default function Home({navigation}) {

    const [backgroundImage, setBackgroundImage] = useState(require('../img/Rectangle.jpg'));
    const [isAccepted, setAccepted] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [isVerTermosVisible, setVerTermosVisible] = useState(true);
    const [fundoModalVisible, setFundoModalVisible] = useState(false);

  const openFundoModal = () => {
    setFundoModalVisible(true);
  };

  const closeFundoModal = () => {
    setFundoModalVisible(false);
  };

    const handleAcceptance = () => {
      setAccepted(!isAccepted);
    };
  
    const handleProceed = () => {
      if (isAccepted) {
        setModalVisible(false);
        setVerTermosVisible(false);
        ({ makeButtonInvisible: makeButtonInvisible })
        Alert.alert('Prosseguir', 'Você aceitou os termos e condições.');
      } else {
        Alert.alert('Erro', 'Você deve aceitar os termos e condições para prosseguir.');
      }
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

  const makeButtonInvisible = () => {
    

  };

    const auth = getAuth(app);

     async function signOut(){

      signOut()
        .then(() => {
          alert("Seção Encerrada");
          navigation.navigate("Login");
      })
     }
  

    return (
      <ImageBackground source={backgroundImage} style={{ flex: 1 }}>
      <View>
      <View style={estilos.area3}>
        <View style={estilos.area}>
          <Text style={estilos.nameArea}>Olá</Text>
           <Text style={estilos.textArea}>O que deseja fazer?</Text>
        </View>
        <View style={estilos.area2}>
        
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
          style={estilos.botoesfundo}
          onPress={changeBackground1}>
            <Image
                source={require('../img/MontanhaLaranja.jpeg')}
                style={{alignSelf: 'center',
                height: '100%', 
                width: '100%',
                           
              }}/></TouchableOpacity>

<TouchableOpacity 
          style={estilos.botoesfundo}
          onPress={changeBackground2}>
            <Image
                source={require('../img/FlorestaLaranja.jpeg')}
                style={{alignSelf: 'center',
                height: '100%', 
                width: '100%',
                            
              }}/></TouchableOpacity>

<TouchableOpacity 
          style={estilos.botoesfundo}
          onPress={changeBackground3}>
            <Image
                source={require('../img/Espaço.jpeg')}
                style={{alignSelf: 'center',
                height: '100%', 
                width: '100%',
                          
              }}/></TouchableOpacity>

<TouchableOpacity 
          style={estilos.botoesfundo}
          onPress={changeBackground4}>
            <Image
                source={require('../img/Rectangle.jpg')}
                style={{alignSelf: 'center',
                height: '100%', 
                width: '100%',
                            
              }}/></TouchableOpacity>
              <TouchableOpacity 
          style={estilos.botoesfundo}
          onPress={changeBackground5}>
            <Image
                source={require('../img/oceano.jpeg')}
                style={{alignSelf: 'center',
                height: '100%', 
                width: '100%',
                           
              }}/></TouchableOpacity>

<TouchableOpacity 
          style={estilos.botoesfundo}
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

           <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >

        <View style={estilos.viewviewtermo}>
        <ScrollView style={estilos.containertermo}>
          <Text style={estilos.titletermo}>Termos e Política de Privacidade</Text>

          <Text>
            Bem-vindo aos Termos e Política de Privacidade do nosso aplicativo móvel.
            Ao acessar ou usar o aplicativo, você concorda com estes Termos.

          </Text>

          

          <Text style={estilos.subTitletermo}>1. Uso do Aplicativo</Text>
          <Text>
          Nosso aplicativo é um ambiente seguro e educativo projetado para crianças a partir de 4 anos de idade.
          </Text>
          <Text style={estilos.subTitletermo}>2. Consentimento dos Pais ou Responsáveis</Text>
          <Text>
          Crianças menores de idade precisam obter o consentimento dos país ou responsáveis legais antes de usar o aplicativo.
          </Text>
          <Text style={estilos.subTitletermo}>3. Uso Responsável</Text>
          <Text>
          Os pais e responsáveis desempenham um papel fundamental na promoção do uso responsável do aplicativo, orientando as crianças sobre 
          como utilizar as ferramentas e recursos disponíveis da maneira mais construtiva e segura possível.
          </Text>
          <Text style={estilos.subTitletermo}>4. Conteúdo Adequado</Text>
          <Text style={{
            marginBottom: 10,
          }}>
          O aplicativo não oferece conteúdo inadequado, tudo dentro do bom senso e apenas oferecendo material e pontos adequados.
          </Text>

          <Text style={estilos.titletermo}>Política de Privacidade</Text>

          <Text style={estilos.subTitletermo}>1. Coleta de Informações</Text>
          <Text>
          Tais informações como e-mail, nome, sobrenome que são coletadas como dados de registro,
          informações perfil e qualquer outra informação necessária para o funcionamento do aplicativo.
          </Text>
          <Text style={estilos.subTitletermo}>2. Consentimento dos Pais</Text>
          <Text>
          Os pais ou/e responsáveis tem a necessidade de prover seu consentimento para coletar informações
          pessoais de seus filhos. Isso é feito por meio de uma mensagem ou aviso claro no aplicativo.
          </Text>
          <Text style={estilos.subTitletermo}>3. Uso de Informações</Text>
          <Text>
          Os usos de informações são apenas para menções de usuário e o sistema de recuperação de senha. 
          Tudo para melhorar o aplicativo, personalizar a experiência do usuário e oferecer suporte 
          </Text>
          <Text style={estilos.subTitletermo}>4. Compartilhamento de Informações</Text>
          <Text>
          Não serão compartilhadas as informações pessoais das crianças sem consentimento prévio dos pais.
          </Text>
          <Text style={estilos.subTitletermo}>5. Segurança</Text>
          <Text>
          Nossa equipe está constantemente trabalhando para manter o aplicativo seguro e atualizado, corrigindo potenciais vulnerabilidades de segurança
          </Text>
          <Text style={estilos.subTitletermo}>6. Contato</Text>
          <Text>
          Estamos sempre à disposição para responder a perguntas, receber feedback e ajudar os pais e responsáveis a fornecer uma experiência segura e enriquecedora para suas crianças. 
          Para entrar em contato conosco, por favor, envie um e-mail para sincor3s@gmail.com.
          </Text>
          <Text style={estilos.subTitletermo}>7. Revisões da Política</Text>
          <Text>
          Nossa política de privacidade descreve como coletamos, usamos e protegemos suas informações pessoais. Ao usar este site,
          você concorda com nossa política de privacidade, e as alterações significativas serão comunicadas aos pais.
          </Text>
          
          </ScrollView>
          </View>

          
          <View style={estilos.acceptContainertermo}>
            <TouchableOpacity onPress={handleAcceptance}>
              <View style={estilos.radioButtontermo}>
                {isAccepted && <View style={estilos.radioInnerCircletermo} />}
              </View>
            </TouchableOpacity>
            <Text style={estilos.acceptTexttermo}>Eu Aceito os Termos e Condições</Text>
          </View>

          <View>

          <TouchableOpacity 
          style={estilos.botoestermo}
          onPress={handleProceed} disabled={!isAccepted}>
            <Text style={estilos.buttonTexttermo}>Prosseguir</Text>
          </TouchableOpacity>

          <TouchableOpacity 
          style={estilos.botoestermo}
          onPress={() => setModalVisible(false)}>
            <Text style={estilos.buttonTexttermo}>Fechar</Text>
          </TouchableOpacity>
          </View>
        
      </Modal>

        <View style={estilos.containerCima}>
          <TouchableOpacity style={estilos.botaopicto}
          onPress={() => navigation.navigate("Niveis")}>
            <Text style={estilos.textoBotoes}>Pictogame</Text>
            <Image
                source={require('../img/Pictogame.jpeg')}
                style={estilos.fotoBotoes}
              />
          </TouchableOpacity>
  
          <TouchableOpacity style={estilos.botaometa}
          onPress={() => navigation.navigate("Metas")}>
            <Text style={estilos.textoBotoes}>Metas</Text>
            <Image
                source={require('../img/Tasks.jpeg')}
                style={estilos.fotoBotoes}
              />
          </TouchableOpacity>
       
  
          <TouchableOpacity style={estilos.botaopais}
          onPress={() => navigation.navigate("Pais")}>
            <Text style={estilos.textoBotoes}>Para Pais</Text>
            <Image
                source={require('../img/Paraospais.jpeg')}
                style={estilos.fotoBotoes}
              />
          </TouchableOpacity>
  
          <TouchableOpacity style={estilos.botaopet}
          onPress={() => navigation.navigate("Teapet")}>
            <Text style={estilos.textoBotoes}>Teapets</Text>
            <Image
                source={require('../img/Teapet.jpeg')}
                style={estilos.fotoBotoes}
              />
          </TouchableOpacity>
          
          </View>
         
          {isVerTermosVisible && (
        <TouchableOpacity 
        style={{
          alignSelf: 'center',
          marginTop: 25,
        }}
        onPress={() => setModalVisible(true)}>
            <Text style={estilos.areatext3}>
            Termos de uso e condição
            </Text>
           </TouchableOpacity>
        )}

      </View>
      </ImageBackground>
    );
  }
  