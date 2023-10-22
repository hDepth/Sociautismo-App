import {StyleSheet} from 'react-native';

const estilos = StyleSheet . create({

  containerPrincipal:{
    
    flex:1,
    flexDirection: "column",
  },

  imagemFundo:{
    flex: 1,
    resizeMode: 'cover',
    width: "auto",
    height: "auto"
  },

  area: {
    flexDirection:"row",
    backgroundColor: '#ffffff',
    borderRadius: 70, 
    height:100,
    width: 300,
    marginTop: 150,
    alignSelf: 'center', 
  },
  titleArea:{
    color:'#000000',
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    margin: 26,
    marginTop: 35,
   },

   titleCaixat:{
    color:'#000000',
    fontSize: 25,
    fontWeight: 'bold',
    margin: 20,
   },

   caixaEmail:{
    borderColor:'white',
    backgroundColor: '#ffffff',
    borderWidth: 2,
    padding: 15,
    fontSize: 18,
    borderRadius: 50,
    marginHorizontal: 10,
   },
   
   Botao:{
    backgroundColor:"white",
    width:250,
    height:60,
    marginTop:30,
    marginEnd:20,
    borderRadius:50,
    padding:15,
    alignSelf: 'center',
  },

  textoBotao:{
    color: 'black',
    fontSize:20,
    fontWeight:'bold',
    alignSelf: 'center',
  },

})

export default estilos;