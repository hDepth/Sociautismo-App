import {StyleSheet} from 'react-native';

const estilos = StyleSheet . create({

 
  imagemFundo:{
    resizeMode: 'cover',
    width: '100%',
    height: '100%'
  },

  
  
  area: {
    flexDirection:"row",
    backgroundColor: '#ffffff',
    borderRadius: 20, 
    height:90,
    width: 140,
    marginTop: 10,
    marginLeft: 10, 
  },
  titleArea:{
    color:'#000000',
    fontSize: 40,
    fontWeight: 'bold',
    margin: 20,
   },

   containersMetas: {
    flexDirection:"row",
    backgroundColor: '#ffffff',
    borderRadius: 10, 
    height:90,
    width: 300,
    alignSelf: 'center',
    alignItems:'center',
    marginTop: 45,
  },

  boxnumMeta: {
    flexDirection:"row",
    justifyContent: 'center',
    backgroundColor: '#03d1ff',
    borderColor: 'black',
    borderRadius: 10, 
    height:50,
    width: 50,
    marginLeft: 10, 
  },

  numMeta: {
    fontSize: 30,
    alignSelf: 'center',
    fontWeight: 'bold'
    
  },

  containerColumn:{
    width:240,
    height:90,
    
  },

  containerTmetas:{
    height:90,
    width:240,
    alignItems:'center',
  },

  textMeta:{
   marginLeft: 25,
   marginTop: 30,
   alignSelf: 'baseline',
  },

  botaoMeta:{
    backgroundColor:"#03d1ff",
    marginBottom: 5,
    marginLeft: 65,
    borderRadius: 20,
    marginRight: 100
  },

  textoBotao:{
    color: '#fff',
    fontSize: 10,
    fontWeight:'bold',
    alignSelf: 'center',
  },
   
  
})

export default estilos;