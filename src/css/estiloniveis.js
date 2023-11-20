import {StyleSheet} from 'react-native';

const estilos = StyleSheet . create({

   container: {
    flex: 1,
    justifyContent: 'center',
  },

  containerPrincipal:{
    flexDirection: "column",
    
  },

  imagemFundo:{
    flex: 1,
    resizeMode: 'cover',
    width: "auto",
    height: "auto",
  },

  trocarfundo:{

    width: 150,
    height: 80,
    borderWidth: 2,
    backgroundColor: 'white',
    borderRadius: 10,


  },
  
  arearea: {
    width: '100%',
    height: '60%',
    marginTop: 10,
  },
  area: {
    flexDirection:"row",
    backgroundColor: '#ffffff',
    borderRadius: 20, 
    height:90,
    width: 160,
    marginTop: 5,
    borderWidth: 1,
    marginLeft: 10, 
    justifyContent: 'center'
  },

  areatopo: {
    width: '95%',
    height: 100,
    marginTop: -10,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent:'center',


  },
  areabotoes: {
    flexDirection:"row",
    borderRadius: 20, 
    height:160,
    width: 160,
    marginLeft: 10, 
    justifyContent: 'center',
    flexWrap: 'wrap'
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

  titleArea:{
    color:'#000000',
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center'
   },

   containersMetas: {
    borderRadius: 10, 
    height:90,
    width: 300,
    alignSelf: 'center',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },

  boxnumMeta: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10, 
    height:70,
    width: 70, 
    justifyContent: 'center'
    
  },

  numMeta: {
    fontSize: 30,
    alignSelf: 'center'
    
  },

  viewview: {
    alignSelf:'center',
    right: 175,
    width: '80%'
  },

  textMeta:{
   marginLeft: 25,
   fontSize: 20,
   alignSelf: 'center',
   marginBottom: 20,
   fontWeight: 'bold',
   backgroundColor: '#fff'
  },

  botaoMeta:{
    backgroundColor:"#03d1ff",
    marginBottom: 5,
    marginLeft: 65,
    borderRadius: 20,
    padding: 10,
    alignSelf: 'center',
  },

  textoBotao:{
    color: '#fff',
    fontSize: 10,
    fontWeight:'bold',
    alignSelf: 'center',
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