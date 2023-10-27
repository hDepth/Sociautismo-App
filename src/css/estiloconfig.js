import {StyleSheet} from 'react-native';

const estilos = StyleSheet . create({

   area:{
    alignItems:'center',
   },

   container:{
     flexDirection: 'column', 
     height: 350,
     width: 325,
     borderWidth: 3,
     borderRadius: 50,
     alignSelf:'center',
     marginTop:160,
     paddingLeft:10,
     paddingRight:10,
   },

   containerVolume:{
    flexDirection:'row',
   // backgroundColor:'#696969',
     height:100,
     width:300,
     alignItems:'center',
     paddingTop:10,
     paddingLeft:5,
   },
    botaoTema1:{
    backgroundColor:'#3af03a',
    width:30,
    height:30,
    borderWidth: 2,
    margin:7,
    marginLeft:80
  },

   botaoTema2:{
    backgroundColor:'#ff8000',
    width:30,
    height:30,
    borderWidth: 2,
    margin:7
  },

   botaoTema3:{
    backgroundColor:'#69fff5',
    width:30,
    height:30,
    borderWidth: 2,
    margin:7
  },

   texto:{
     fontSize:20,
      fontWeight: 'bold', 
   },

   containerTM:{
    flexDirection:'row',
   //backgroundColor:'#696969',
     height:60,
     width:300,
     alignItems:'center',
     paddingLeft:5,
   },

   textoMusica:{
     fontSize:15,
     fontWeight:'bold',
   },

   containerAtivar: {
    flexDirection: 'row',
    alignItems: 'end',
    marginLeft:100
  },

})
   export default estilos;