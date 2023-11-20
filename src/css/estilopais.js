import {StyleSheet} from 'react-native';

const estilos = StyleSheet . create({


  containerprincipal: {
    justifyContent: 'center',
    alignItems: 'center',
  },

   container:{
     flexDirection: 'column', 
    width: '95%',
    height: '75%',
     borderWidth: 2,
     borderRadius: 5,
     alignSelf:'center',  
     alignItems:'center',
     justifyContent: 'center',
     marginTop: '25%',
     marginBottom: '25%',
   },

   titulo:{
     fontSize:30,
     color:'red',
     marginTop: -30,
     alignSelf: 'center',
     
   },
   texto: {
    fontSize: 20,
    marginTop: 10,
    alignSelf: 'center',
   },
   viewtexto: {
    width: '100%',
    alignItems: 'center',
    width: '100%',
    height: '85%',
    justifyContent: 'center',
    
   },
   imagemFundo:{
    resizeMode: 'cover',
    width: '100%',
    height: '100%'
  },


})
   export default estilos;