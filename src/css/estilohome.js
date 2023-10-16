import {StyleSheet} from 'react-native';

const estilos = StyleSheet . create({

   area: {
    flexDirection:"column",
    backgroundColor: '#9ea0a3',
    borderRadius: 20, 
    height:90,
    width: 140,
    marginTop: 10,
    marginLeft: 10, 
  },
  
  imagemFundo:{
    flex: 1,
    resizeMode: 'cover',
    width: "auto",
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
    height:100,
    width: 350,
    alignSelf: 'center',
    marginTop: 60,
  },

   containerBaixo:{
    flexDirection:"row",
    height:100,
    width: 350,
    alignSelf: 'center',
    marginTop: 10,
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
    height:100,
    width:100,
    marginLeft: 45,
    alignSelf: 'center',
  },

  textoBotoes:{
    fontSize: 18,
    textAlign: 'center-end',
  }



})
export default estilos;