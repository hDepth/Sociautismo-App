import { ScrollView, SafeAreaView, View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import estilos from '../css/estilopais';

export default function Pais({navigation}) {
  return (

    <View style={estilos.containerprincipal}>
<ImageBackground
        style={estilos.imagemFundo}
        source={require('../img/Rectangle.jpg')}
      >
      <View style={estilos.container}>
      
      
      <View><Text style={estilos.titulo}>Para os pais</Text></View>
      <View style={estilos.viewtexto}>
      <ScrollView scrollEnabled>
        <Text style={estilos.texto}>

      Obrigada país e responsáveis pela confiança e colaboração do nosso aplicativo. Somos um aplicativo que tem como objetivo ajudar o no desenvolvimento da comunicação de crianças com o Transtorno do Espectro Autista.
Visando isso aqui está uma sequência de dicas e instruções para melhorar para o seu melhor uso e de sua criança:
Utilize mesma senha e login que a criança, assim você consegue monitorar os avanços e tudo o que for trabalhado no app;

Acompanhe o desenvolvimento de sua criança;

Auxilie e ajude nas atividades e metas que precisam ser cumpridas;
Introduza o aplicativo de forma gradual para evitar sobrecarregar a criança. 

Comece com funcionalidades básicas e, à medida que ela se familiariza, introduza mais recursos;

Demonstre o uso do aplicativo modelando para a criança. Mostre símbolos, palavras ou frases para expressar diferentes necessidades e emoções;

Reforce positivamente cada tentativa bem-sucedida;

Celebre as conquistas da criança, mesmo que sejam pequenas, para incentivar o uso contínuo do aplicativo;

Integre o uso do aplicativo na rotina diária da criança. Isso pode incluir momentos específicos, como durante as brincadeiras ou atividades escolares;

Envolva outros membros da família no processo. Isso cria um ambiente de apoio consistente, permitindo que a criança pratique suas habilidades de comunicação em diferentes contextos;</Text>
</ScrollView>
</View>
<TouchableOpacity  
           onPress={() => navigation.navigate("TabRoutes")}
           style={estilos.pets}>
            <Image
              source={require('../img/Voltar.png')}
              style={{
                width: 30,
                height: 30,
                marginBottom: -20,
                marginTop: 10,
              }}
            />
          </TouchableOpacity>
       
    </View>
    </ImageBackground>
  </View>
  
  );
}
