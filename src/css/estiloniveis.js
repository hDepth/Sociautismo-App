import {StyleSheet} from 'react-native';

const estilos = StyleSheet . create({

   container: {
    flex: 1,
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
    height: 90,
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  
  arearea: {
    width: '100%',
    height: '60%',
    marginTop: 35,
  },
  area: {
    backgroundColor: '#ffffff',
    borderRadius: 20, 
    height:90,
    width: 150,
    borderWidth: 2,
    justifyContent: 'center',
    marginLeft: '3%',
  },

  areatopo: {
    width: '100%',
    height: 100,
    marginTop: 40,
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
  },
  areabotoes: {
    borderRadius: 20, 
    height:84,
    width: 150,
    marginRight: '3%'
  },
 

  titleArea:{
    color:'#000000',
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center'
   },

   containersMetas: {
    height:90,
    width: '85%',
    alignSelf: 'center',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
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