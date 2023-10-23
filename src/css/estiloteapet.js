import {StyleSheet} from 'react-native';

const estilos = StyleSheet . create({

   area: {
    flexDirection:"column",
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 20, 
    height:90,
    width: 140,
    marginTop: 10,
    marginLeft: 10, 
  },

  nameArea:{
    color:'#000000',
    fontSize: 25,
    fontWeight: 'bold',
    margin: 5,
   },

   textArea:{
     fontSize: 15,
     margin: 5,     
   },

   container:{
     flexDirection: 'column', 
     height: 425,
     width: 330,
     borderWidth: 3,
     borderRadius: 50,
     marginTop: 70,  
     alignSelf: 'center'
   },

   containerTexto:{
    flexDirection:"column",
    height:60,
    width: 324,
    alignItems: 'center',
    marginTop: 10,
    },

   texto:{
     fontSize: 20,
     fontWeight: 'bold',
     textAlign: 'center',
   },

   containerCima:{
    flexDirection:"row",
    height:100,
    width: 324,
    alignItems: 'center',
    marginTop: 10,
  },

  containerMeio:{
    flexDirection:"row",
    height:100,
    width: 324,
    alignItems: 'center',
    marginTop: 10,
  },

  containerBaixo:{
    flexDirection:"row",
    height:100,
    width: 324,
    alignItems: 'center',
    marginTop: 10,
  },

   pets:{
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 100,
    width: 100,
    marginLeft: 5,
    alignSelf: 'center',
  },

  fotoBotoes:{
  borderRadius:10,
  padding: 10, 
  margin: 5, 
  height: 80, 
  width: 80, 
  resizeMode: 'stretch', 
},
})
   export default estilos;