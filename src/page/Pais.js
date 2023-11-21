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

        Obrigado país e responsáveis pela confiança e colaboração do nosso aplicativo. Somos um aplicativo que tem como objetivo ajudar no desenvolvimento da comunicação de crianças com o Transtorno do Espectro Autista.

Lidar com crianças autistas pode apresentar desafios únicos, mas também pode ser incrivelmente gratificante. Aqui estão algumas dicas que podem ajudar, com base em conselhos de especialistas:
1. Eduque-se sobre o autismo
  - Busque informações atualizadas sobre o autismo para entender melhor as características específicas do seu filho.
  - Esteja ciente de que o autismo é um espectro, o que significa que cada criança é única em suas necessidades e habilidades.
 
2. Comunique-se de maneira clara e direta
  - Use linguagem simples e direta ao se comunicar com a criança. Evite metáforas ou expressões idiomáticas que possam ser confusas.
  - Use apoios visuais, como cartões ou imagens, para auxiliar na comunicação para crianças não verbais.
 
3. Estabeleça rotinas consistentes
  - Crianças autistas muitas vezes se beneficiam de rotinas consistentes, pois isso proporciona previsibilidade e reduz a ansiedade.
  - Ofereça avisos antecipados sobre mudanças na rotina para dar à criança tempo para se ajustar.
 
4. Seja paciente
  - Demonstre paciência em situações desafiadoras. O processamento de informações pode levar mais tempo para crianças autistas.
  - Encoraje e recompense comportamentos positivos, em vez de focar apenas nos negativos.
 
5. Desenvolva interesses e paixões
  - Identifique e incentive os interesses especiais da criança, pois isso pode ser uma excelente forma de conexão e desenvolvimento.
  - Use esses interesses como uma ferramenta para motivar a aprendizagem e a interação social.
 
6. Proporcione um ambiente estruturado
  - Crie um ambiente seguro e estruturado, minimizando estímulos sensoriais excessivos, como luzes brilhantes ou barulhos altos.
  - Considere a organização do espaço físico para facilitar a movimentação e a concentração.
 
7. Colabore com profissionais especializados
  - Trabalhe em conjunto com profissionais de saúde, educadores e terapeutas especializados em autismo para desenvolver estratégias de apoio  personalizadas.
  - Participe de grupos de apoio para pais de crianças autistas, onde você possa compartilhar experiências com outros pais e aprender com as vivências dos mesmos.
 
8. Estimule habilidades sociais
  - Ofereça oportunidades para a criança praticar habilidades sociais, como turnos de fala, compartilhamento e leitura de pistas sociais.
  - Considere a participação em atividades estruturadas, como grupos de habilidades sociais ou atividades esportivas adaptadas.
 
9. Celebre as conquistas, por menores que sejam
  - Reconheça e celebre os sucessos da criança, mesmo os pequenos marcos. Reforce positivamente o esforço e o progresso.
 
10. Cuide de si mesmo
   - Lembre-se de cuidar de sua própria saúde física e emocional. Criar um equilíbrio entre as demandas do cuidado da criança e suas próprias necessidades é crucial para sustentar uma vida familiar saudável.
 
Cada criança é única e distintas, essas dicas podem precisar ser adaptadas conforme as necessidades específicas do seu filho para se tornarem mais fundamentais. Consultar um profissional especializado em autismo pode ser crucial para obter orientações personalizadas.</Text>
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
