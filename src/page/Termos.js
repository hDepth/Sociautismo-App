import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Alert, Modal } from 'react-native';

 export default function Termos ()  {
  const [isAccepted, setAccepted] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [isVerTermosVisible, setVerTermosVisible] = useState(true);
  

  const handleAcceptance = () => {
    setAccepted(!isAccepted);
  };

  const handleProceed = () => {
    if (isAccepted) {
      setModalVisible(false)
      setVerTermosVisible(false);
      ({ makeButtonInvisible: makeButtonInvisible })
      Alert.alert('Prosseguir', 'Você aceitou os termos e condições.');
    } else {
      Alert.alert('Erro', 'Você deve aceitar os termos e condições para prosseguir.');
    }
  };

  const makeButtonInvisible = () => {
    
    console.log('O botão foi tornado invisível na outra página.');
  };

  return (
    <View style={styles.container}>
      <View style={styles.viewbuttontermo}>
      {isVerTermosVisible && (
      <TouchableOpacity 
      style={styles.botoestermo}
      onPress={() => setModalVisible(true)}>
      <Text style={styles.buttonText}>Ver Termos</Text>
      </TouchableOpacity>
       )}
      </View>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >

        <View style={styles.viewviewtermo}>
        <ScrollView style={styles.container}>
          <Text style={styles.titletermo}>Termos e Política de Privacidade</Text>

          <Text>
            Bem-vindo aos Termos e Política de Privacidade do nosso aplicativo móvel.
            Ao acessar ou usar o aplicativo, você concorda com estes Termos.

          </Text>

          

          <Text style={styles.subTitletermo}>1. Uso do Aplicativo</Text>
          <Text>
          Nosso aplicativo é um ambiente seguro e educativo projetado para crianças a partir de 4 anos de idade.
          </Text>
          <Text style={styles.subTitletermo}>2. Consentimento dos Pais ou Responsáveis</Text>
          <Text>
          Crianças menores de idade precisam obter o consentimento dos país ou responsáveis legais antes de usar o aplicativo.
          </Text>
          <Text style={styles.subTitletermo}>3. Uso Responsável</Text>
          <Text>
          Os pais e responsáveis desempenham um papel fundamental na promoção do uso responsável do aplicativo, orientando as crianças sobre 
          como utilizar as ferramentas e recursos disponíveis da maneira mais construtiva e segura possível.
          </Text>
          <Text style={styles.subTitletermo}>4. Conteúdo Adequado</Text>
          <Text style={{
            marginBottom: 10,
          }}>
          O aplicativo não oferece conteúdo inadequado, tudo dentro do bom senso e apenas oferecendo material e pontos adequados.
          </Text>

          <Text style={styles.titletermo}>Política de Privacidade</Text>

          <Text style={styles.subTitletermo}>1. Coleta de Informações</Text>
          <Text>
          Tais informações como e-mail, nome, sobrenome que são coletadas como dados de registro,
          informações perfil e qualquer outra informação necessária para o funcionamento do aplicativo.
          </Text>
          <Text style={styles.subTitletermo}>2. Consentimento dos Pais</Text>
          <Text>
          Os pais ou/e responsáveis tem a necessidade de prover seu consentimento para coletar informações
          pessoais de seus filhos. Isso é feito por meio de uma mensagem ou aviso claro no aplicativo.
          </Text>
          <Text style={styles.subTitletermo}>3. Uso de Informações</Text>
          <Text>
          Os usos de informações são apenas para menções de usuário e o sistema de recuperação de senha. 
          Tudo para melhorar o aplicativo, personalizar a experiência do usuário e oferecer suporte 
          </Text>
          <Text style={styles.subTitletermo}>4. Compartilhamento de Informações</Text>
          <Text>
          Não serão compartilhadas as informações pessoais das crianças sem consentimento prévio dos pais.
          </Text>
          <Text style={styles.subTitletermo}>5. Segurança</Text>
          <Text>
          Nossa equipe está constantemente trabalhando para manter o aplicativo seguro e atualizado, corrigindo potenciais vulnerabilidades de segurança
          </Text>
          <Text style={styles.subTitletermo}>6. Contato</Text>
          <Text>
          Estamos sempre à disposição para responder a perguntas, receber feedback e ajudar os pais e responsáveis a fornecer uma experiência segura e enriquecedora para suas crianças. 
          Para entrar em contato conosco, por favor, envie um e-mail para sincor3s@gmail.com.
          </Text>
          <Text style={styles.subTitletermo}>7. Revisões da Política</Text>
          <Text>
          Nossa política de privacidade descreve como coletamos, usamos e protegemos suas informações pessoais. Ao usar este site,
          você concorda com nossa política de privacidade, e as alterações significativas serão comunicadas aos pais.
          </Text>
          
          </ScrollView>
          </View>

          
          <View style={styles.acceptContainertermo}>
            <TouchableOpacity onPress={handleAcceptance}>
              <View style={styles.radioButton}>
                {isAccepted && <View style={styles.radioInnerCircletermo} />}
              </View>
            </TouchableOpacity>
            <Text style={styles.acceptTexttermo}>Eu Aceito os Termos e Condições</Text>
          </View>

          <View>

          <TouchableOpacity 
          style={styles.botoestermo}
          onPress={handleProceed} disabled={!isAccepted}>
            <Text style={styles.buttonTexttermo}>Prosseguir</Text>
          </TouchableOpacity>

          <TouchableOpacity 
          style={styles.botoestermo}
          onPress={() => setModalVisible(false)}>
            <Text style={styles.buttonTexttermo}>Fechar</Text>
          </TouchableOpacity>
          </View>
        
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  titletermo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subTitletermo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  viewbuttontermo: {
    marginTop: '10%',
  },
  acceptContainertermo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginVertical: 10,
  },
  radioButtontermo: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  radioInnerCircletermo: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: 'black',
  },
  acceptTexttermo: {
    fontSize: 22,
  },
  botoestermo: {
    width: 300,
    height: 45,
    backgroundColor: '#3299CC',
    borderWidth: 2,
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 5,
  },
  buttonTexttermo: {
    fontWeight: 'bold',
    alignSelf: 'center',
    color: 'white',
    fontSize: 20,
  },
  viewviewtermo: {
    width: '95%',
    height: 400,
    borderWidth: 2,
    marginTop: 25,
    borderColor: 'grey',
    alignSelf: 'center',


  },
});