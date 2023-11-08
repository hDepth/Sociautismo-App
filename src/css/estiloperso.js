import {StyleSheet} from 'react-native';

const estilos = StyleSheet . create({

   area: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 20, 
    height:90,
    width: 140,
    marginTop: 40,
    marginLeft: 10, 
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
   containercarrosel: {
    height: 100,
    width: 130,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginRight: 25,
    marginTop: 10,
   },

   container:{ 
     height: 350,
     width: 330,
     borderWidth: 3,
     borderRadius: 50,
     backgroundColor: 'white',
     alignSelf:'center',
     marginTop: 50,  
   },
   button: {
    width: 100,
    height: 85,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 25,
    marginLeft: 5,
    marginRight: 5,

  },
  image: {
    width: '100%',
    height: '100%',
    marginBottom: 10,
  },
  Setaesquerda: {
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  Setadireita: {
    flexDirection: 'row',
    alignItems: 'center',
  },
   
  setaTexto:{

    fontSize: 35,
    fontWeight: 'bold',

  },
  containerPet:{
    height:230,
    width: 324,
    alignItems: 'center',
    marginBottom: -35,
  },

   pet:{
  height: 230, 
  width: 230, 
},

containerCor:{
    flexDirection:"row",
    maxHeight:60,
    maxWidth: 324,
    alignItems: 'center',
    alignSelf: 'center'

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