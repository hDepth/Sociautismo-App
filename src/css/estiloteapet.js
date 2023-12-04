import {StyleSheet} from 'react-native';

const estilos = StyleSheet . create({

   area: {
    flexDirection:"column",
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 20, 
    height:90,
    width: 150,
    marginLeft: '3%', 
  },

  areabotoes: {
    flexDirection:"row",
    borderRadius: 20, 
    height:84,
    width: 150,
    marginRight: '3%', 
    justifyContent: 'center',
    marginLeft: 25,

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
    marginTop: 10,
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

   container:{
     flexDirection: 'column', 
     height: 425,
     width: 330,
     borderWidth: 3,
     borderRadius: 50,
     marginTop: 50,  
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
viewfundos: {
  width: '100%',
  height: '100%',
  flexWrap: 'wrap',
  flexDirection: 'row',
  alignSelf: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  alignContent: 'center',
},
trocarfundo:{
  width: 150,
  height: 80,
  borderWidth: 2,
  backgroundColor: 'white',
  borderRadius: 10,
},
viewfundoss: {
  width: '85%',
  height: '45%',
  alignSelf: 'center',
  marginTop: 100,
  flexWrap: 'wrap',
  flexDirection: 'wrap',
},
botoesfundoz: {
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'flex',
backgroundColor:"#fff",
borderWidth: 1,
borderColor: '#000',
height:120,
width:75, 
alignSelf: 'center',
marginVertical: 10,
marginLeft: 25,

},
buttonF: {
backgroundColor: '#3498db',
padding: 10,
borderRadius: 5,
},
buttonTextF: {
color: 'white',
fontSize: 18,
},
modalContainerF: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
},
modalButtonF: {
marginBottom: 10,
},
imageF: {
width: 100,
height: 100,
},
closeButtonF: {
backgroundColor: '#e74c3c',
padding: 10,
borderRadius: 5,
marginTop: 20,
},
closeButtonTextF: {
color: 'white',
fontSize: 18,
},
})
   export default estilos;