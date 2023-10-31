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

  
  arearea: {
    width: '100%',
    height: '50%',
    marginTop: 50,

  },
  area: {
    flexDirection:"row",
    backgroundColor: '#ffffff',
    borderRadius: 20, 
    height:90,
    width: 160,
    marginTop: 40,
    marginLeft: 10, 
    justifyContent: 'center'
  },
  titleArea:{
    color:'#000000',
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center'
   },

   containersMetas: {
    borderRadius: 10, 
    height:90,
    width: 300,
    alignSelf: 'center',
    marginTop: 10,
    flexDirection: 'row',
  },

  boxnumMeta: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10, 
    height:70,
    width: 70, 
    justifyContent: 'center'
    
  },

  numMeta: {
    fontSize: 30,
    alignSelf: 'center'
    
  },
  barradeprogresso: {

    width: '80%',
    height: 10,
    backgroundColor: 'green',
    borderRadius: 3,
    alignSelf: 'flex-start',
  },

  viewview: {
    alignSelf:'center',
    right: 175,
    width: '80%'
  },

  textMeta:{
   marginLeft: 25,
   fontSize: 20,
   alignSelf: 'center',
   marginBottom: 20,
   fontWeight: 'bold',
   backgroundColor: '#fff'
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