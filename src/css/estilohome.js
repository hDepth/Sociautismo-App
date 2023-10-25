import {StyleSheet} from 'react-native';

const estilos = StyleSheet . create({

   area: {
    flexDirection:"column",
    backgroundColor: 'orange',
    borderRadius: 20, 
    height:90,
    width: 140,
    marginTop: 45,
    marginLeft: 20, 
  },
  fotoBotoes:{
    borderRadius:10,
    padding: 10, 
    margin: 5, 
    height: 80, 
    width: 80, 
    resizeMode: 'stretch', 
  },
  imagemFundo:{
    resizeMode: 'cover',
    width: '100%',
    height: '100%'
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
  
  containerCima:{
    flexDirection:"row",
    height: 325,
    width: 325,
    alignSelf: 'center',
    marginTop: 60,
    flexWrap: 'wrap',

  },


  botaopicto:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor:"#fff",
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 20,
    height:125,
    width:120,
    margin: 20, 
    alignSelf: 'center',
    padding: 5,
  },
  botaometa:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor:"#fff",
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 20,
    height:125,
    width:120,
    margin: 20, 
    alignSelf: 'center',
    padding: 5,
  },
  botaopais:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor:"#fff",
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 20,
    height:125,
    width:120,
    margin: 20, 
    alignSelf: 'center',
    padding: 5,
  },
  botaopet:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor:"#fff",
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 20,
    height:125,
    width:120,
    margin: 20, 
    alignSelf: 'center',
    padding: 5,
  },

  botoesHome:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor:"#fff",
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 20,
    height:125,
    width:125,
    margin: 20, 
    alignSelf: 'center',
    padding: 5,
  },

  textoBotoes:{
    fontSize: 18,
    textAlign: 'center-end',
  }



})
export default estilos;