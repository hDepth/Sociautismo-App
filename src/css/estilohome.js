import {StyleSheet} from 'react-native';

const estilos = StyleSheet . create({

   area: {
    borderWidth: 2,
    backgroundColor: 'white',
    borderColor: '#000',
    borderRadius: 20, 
    height:90,
    width: 140,
    marginTop: 40,
    marginLeft: 10, 
    marginBottom: -15,
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
    justifyContent: 'flex',
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
    justifyContent: 'flex',
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
    justifyContent: 'flex',
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
    justifyContent: 'flex',
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
    justifyContent: 'flex',
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
    textAlign: 'center',
  },
  viewfundos: {
    width: 300,
    height: 75,
    flexWrap: 'wrap',
    flexDirection: 'row',
    padding: 5,
    marginTop: 15,
    alignSelf: 'center'
  },
  botoesfundo: {
  display: 'flex',
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
  marginLeft: 10,
}

})
export default estilos;