import {StyleSheet} from 'react-native';

const estilos = StyleSheet . create({

  fundo:{
    flex:1,
    backgroundColor:'#00bfff',
  },

  area: {
    flexDirection:"row",
    backgroundColor: '#ffffff',
    borderRadius: 20, 
    height:100,
    width: 180,
    marginTop: 25,
    marginLeft: 5, 
    padding:'10px',
  },

  containerRow:{
    flexDirection:'row',
    marginTop: 10,
  },

  containersMetas: {
    flexDirection:"row",
    backgroundColor: '#ffffff',
    borderRadius: 10, 
    height: 90,
    width: '85%',
    alignSelf: 'center',
    alignItems:'center',
    marginTop: 50,
  },

  boxnumMeta: {
    flexDirection:"row",
    backgroundColor: '#03d1ff',
    borderColor: 'black',
    borderRadius: 10, 
    height:70,
    width: 70,
    marginLeft: 10, 
  },

  numMeta: {
    fontSize: 50,
    marginLeft: 20,
    alignSelf: 'center',
    fontWeight:'bold'
    
  },

  containerBotao:{
    height:20,
    width:240,
  },

  botaoVolta:{
    marginLeft:210,
  },

   textoBotaoVolta:{
     fontSize:30,
     fontWeight:'bold',
     color:'red',
   },
   
  containerColumn:{
    width:240,
    height:90,
  },

  textMeta:{
   marginLeft: 25,
   alignSelf: 'center',
  },

  figura:{
    height: 150,
    width: 150,
    borderRadius:20,
    marginLeft: 20,

    marginTop: 10
  },

  titleArea:{

    alignSelf: 'center'

  },
  caixaFeedback:{
    flexDirection:'column',
    width:300,
    height:300,
    borderColor:'#000',
    backgroundColor: '#ffffff',
    borderWidth: 2,
    alignSelf:'center',
    fontSize: 18,
    borderRadius: 10,
    marginTop: 20,
   },

   botao:{
     height:50,
     width:160,
     backgroundColor:'#fff',
     marginTop:10,
     borderWidth:2,
     borderRadius:10,
     justifyContent: 'center',
     alignSelf:'center',
     marginBottom: 20,
     marginTop: 10,
   },

   textoBotao:{
     fontSize:24,
     alignSelf:'center',
   }

  })

export default estilos;