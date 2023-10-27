import React, { Component, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  PanResponder,
  Switch,
} from 'react-native';
import estilos from '../css/estiloconfig';



class Config extends Component {
  constructor(props) {
    super(props);

    this.state = {
      volume: 0.5, // Volume inicial
      isEnabled: false, // Estado inicial do interruptor
    };

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: this.handleVolumeChange,
    });
  }

  handleVolumeChange = (e, gestureState) => {
    const { dx } = gestureState;
    const { volume } = this.state;
    const maxVolume = 1.0;
    const minVolume = 0.0;
    const sensitivity = 0.0006; // Ajuste a sensibilidade

    let newVolume = volume + dx * sensitivity;
    newVolume = Math.max(minVolume, Math.min(maxVolume, newVolume));

    this.setState({ volume: newVolume });
  };

  toggleSwitch = () => {
    this.setState((prevState) => ({
      isEnabled: !prevState.isEnabled,
    }));
  };

  render() {
    const { volume, isEnabled } = this.state;

    return (
      <View style={estilos.containerp}>
        <View style={estilos.container}>
          <View style={estilos.containerTM}>
            <Text style={estilos.texto}>Tema:  </Text>
            <TouchableOpacity>
              <Text style={estilos.texto}>{'<'}</Text>
            </TouchableOpacity>
            <Text style={estilos.textoMusica}> Temas </Text>
            <TouchableOpacity>
              <Text style={estilos.texto}>{'>'}</Text>
            </TouchableOpacity>
          </View>
          <View style={estilos.containerTM}>
            <TouchableOpacity style={estilos.botaoTema1}></TouchableOpacity>
            <TouchableOpacity style={estilos.botaoTema2}></TouchableOpacity>
            <TouchableOpacity style={estilos.botaoTema3}></TouchableOpacity>
          </View>
          <View style={estilos.containerVolume}>
            <Text style={estilos.texto}>Volume:</Text>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              {...this.panResponder.panHandlers}>
              <View style={{ width: 200, height: 20, backgroundColor: 'gray' }}>
                <View
                  style={{
                    width: 200 * volume,
                    height: 20,
                    backgroundColor: '#40bcff',
                  }}
                />
              </View>
            </View>
          </View>
          <View style={estilos.containerTM}>
            <Text style={estilos.texto}>Música: </Text>
            <TouchableOpacity>
              <Text style={estilos.texto}>{'<'}</Text>
            </TouchableOpacity>
            <Text style={estilos.textoMusica}> Musics </Text>
            <TouchableOpacity>
              <Text style={estilos.texto}>{'>'}</Text>
            </TouchableOpacity>
          </View>
          <View style={estilos.containerTM}>
            <View style={estilos.containerAtivar}>
              <Text style={estilos.texto}>Ativar: </Text>
              <Switch
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                onValueChange={this.toggleSwitch}
                value={isEnabled}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Config;
