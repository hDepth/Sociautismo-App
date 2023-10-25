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
     height: 350,
     width: 330,
     borderWidth: 3,
     borderRadius: 50,
     alignSelf:'center',
     marginTop: 60,  
   },

   containerCima:{
    flexDirection:"row",
    height:50,
    width: 324,
    alignItems: 'center',
    marginTop: 10,
  },

  containerPet:{
    flexDirection:"row",
    height:230,
    width: 324,
    alignItems: 'center',
  },

   pet:{
  borderRadius:10,
  padding: 10, 
  margin: 47, 
  height: 230, 
  width: 230, 
  resizeMode: 'stretch', 
},

containerCor:{
    flexDirection:"row",
    maxHeight:60,
    maxWidth: 324,
    alignItems: 'center',
    paddingEnd: 10,
    paddingLeft: 100,
    paddingTop: 10,
  },

  botaoCor1:{
    backgroundColor:'#d67600',
    width:30,
    height:30,
    borderWidth: 2,
    margin: 7,
  },

   botaoCor2:{
    backgroundColor:'#000',
    width:30,
    height:30,
    borderWidth: 2,
    margin: 7
  },

   botaoCor3:{
    backgroundColor:'#6e6e6e',
    width:30,
    height:30,
    borderWidth: 2,
    margin: 7
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
  botaoVoltar: {

    height: 100,
    width: 100,
    marginRight: 5,

  },
  botaoConfere: {
    height: '100%',
    width: '75%',
    marginLeft: 5,
  },
  iconeVoltar:{

    height: 80, 
    width: 80, 
    marginLeft: '62%', 
  },
  iconeConfere:{
    marginLeft: 5, 
    height: 80, 
    width: 80, 
    resizeMode: 'stretch', 
  },
  sair:{
    flexDirection: 'row',
    marginTop: 35,  
    width: '100%',
    height: '13%'
  },

})
   export default estilos;