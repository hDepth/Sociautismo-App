import {StyleSheet} from 'react-native';

const estilos = StyleSheet . create({

   container: {
    flex: 1,
    justifyContent: 'center',
  },

  containerPrincipal:{
    flexDirection: "column",
  },

  imagemFundo:{
    flex: 1,
    resizeMode: 'cover',
    width: "auto",
    height: "auto",
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
    flexDirection:"column",
    backgroundColor: '#ffffff',
    borderRadius: 10, 
    height:90,
    width: 300,
    alignSelf: 'center',
    marginTop: 10,
  },

  boxnumMeta: {
    flexDirection:"row",
    backgroundColor: '#03d1ff',
    borderColor: 'black',
    borderRadius: 10, 
    height:50,
    width: 50,
    marginTop: 5,
    marginLeft: 10, 
  },

  numMeta: {
    fontSize: 30,
    marginLeft: 17,
    marginTop: 3,
    
  },

  textMeta:{
   marginLeft: 25,
  },

  botaoMeta:{
    backgroundColor:"#03d1ff",
    marginBottom: 5,
    marginLeft: 65,
    borderRadius: 20,
    padding: 10,
    alignSelf: 'center',
  },

  textoBotao:{
    color: '#fff',
    fontSize: 10,
    fontWeight:'bold',
    alignSelf: 'center',
  }
   

  
})

export default estilos;