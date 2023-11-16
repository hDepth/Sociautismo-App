import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Image, StyleSheet } from 'react-native';

const Teste1 = () => {
  const [fundoModalVisible, setFundoModalVisible] = useState(false);

  const openFundoModal = () => {
    setFundoModalVisible(true);
  };

  const closeFundoModal = () => {
    setFundoModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openFundoModal} style={styles.button}>
        <Text style={styles.buttonText}>Open Modal</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={false}
        visible={fundoModalVisible}
        onRequestClose={closeFundoModal}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.modalButton}>
            <Image source={require('../img/VacaLaco.png')} style={styles.image} />
          </TouchableOpacity>

          <TouchableOpacity 
          style={{display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex',
          backgroundColor:"#fff",
          borderWidth: 1,
          borderColor: '#000',
          borderRadius: 20,
          height:60,
          width:60, 
          alignSelf: 'center',
          marginLeft: 10,}}>
            <Image
                source={require('../img/FlorestaLaranja.jpeg')}
                style={{alignSelf: 'center',
                height: '100%', 
                width: '100%',
                borderRadius: 20,                            
              }}/></TouchableOpacity>

          <TouchableOpacity style={styles.modalButton}>
            <Image source={require('../img/VacaBoina.png')} style={styles.image} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.modalButton}>
            <Image source={require('../img/pet5.png')} style={styles.image} />
          </TouchableOpacity>

          <TouchableOpacity onPress={closeFundoModal} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close Modal</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonF: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
  },
  buttonTextF: {
    color: 'white',
    fontSize: 18,
  },
  modalContainerF: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalButtonF: {
    marginBottom: 10,
  },
  imageF: {
    width: 100,
    height: 100,
  },
  closeButtonF: {
    backgroundColor: '#e74c3c',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  closeButtonTextF: {
    color: 'white',
    fontSize: 18,
  },
});

export default Teste1;
