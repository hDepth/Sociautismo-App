import {StyleSheet} from 'react-native';

const estilos = StyleSheet . create({

 
  imagemFundo:{
    resizeMode: 'cover',
    width: '100%',
    height: '100%'
  },
  arearea: {
    width: '100%',
    height: '65%',
    marginTop: 35,
  },
  areabotoes: {
    flexDirection:"row",
    borderRadius: 20, 
    height:84,
    width: 150,
    marginRight: '3%',
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
  
  area: {
    flexDirection:"row",
    backgroundColor: '#ffffff',
    borderRadius: 20,
    borderWidth: 2, 
    height:90,
    width: 150, 
    marginLeft: '3%'
  },
  titleArea:{
    color:'#000000',
    fontSize: 35,
    fontWeight: 'bold',
    margin: 20,
   },

   containersMetas: {
    flexDirection:"row",
    backgroundColor: '#ffffff',
    borderRadius: 10, 
    height:90,
    width: 300,
    alignSelf: 'center',
    alignItems:'center',
    marginTop: 45,
  },

  boxnumMeta: {
    flexDirection:"row",
    justifyContent: 'center',
    backgroundColor: '#03d1ff',
    borderColor: 'black',
    borderRadius: 10, 
    height:50,
    width: 50,
    marginLeft: 10, 
  },

  numMeta: {
    fontSize: 30,
    alignSelf: 'center',
    fontWeight: 'bold'
    
  },

  containerColumn:{
    width:240,
    height:90,
    
  },

  containerTmetas:{
    height:90,
    width:240,
    alignItems:'center',
  },

  textMeta:{
   marginLeft: 25,
   marginTop: 30,
   alignSelf: 'baseline',
  },

  botaoMeta:{
    backgroundColor:"#03d1ff",
    marginBottom: 5,
    marginLeft: 65,
    borderRadius: 20,
    marginRight: 100
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