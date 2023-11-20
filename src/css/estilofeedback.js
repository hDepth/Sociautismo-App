import {StyleSheet} from 'react-native';

const estilos = StyleSheet . create({



  fundopapel:{
    resizeMode: 'cover',
    width: '100%',
    height: '100%'
  },
container:{
  flex: 1,
  flexDirection: "column",
},
  area: {
    flexDirection:"row",
    backgroundColor: '#ffffff',
    borderRadius: 10, 
    height:'50%',
    width: '85%',
    marginTop: 15,
    marginLeft: 5, 
    justifyContent:'center',
    alignItems: 'center',
  },

  containerRow:{
    flexDirection:'column',
    marginTop: 15,
    width: '100%',
    height: '70%',

    justifyContent: 'center',
    alignItems: 'center',

  },
  viewimagem: {

    width: '60%',
    height: '50%',
    marginTop: 15,

  },

  containersMetas: {
    flexDirection:"row",
    backgroundColor: '#ffffff',
    borderRadius: 10, 
    height: 90,
    width: '85%',
    alignSelf: 'center',
    alignItems:'center',
    marginTop: 50,
  },

  boxnumMeta: {
    flexDirection:"row",
    backgroundColor: '#03d1ff',
    borderColor: 'black',
    borderRadius: 10, 
    height:70,
    width: 70,
    marginLeft: 10, 
  },

  numMeta: {
    fontSize: 50,
    marginLeft: 20,
    alignSelf: 'center',
    fontWeight:'bold'
    
  },
  botaoVolta:{
    marginLeft:210,
  },

   textoBotaoVolta:{
     fontSize:30,
     fontWeight:'bold',
     color:'red',
   },
   botaosom: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex',
    backgroundColor:"#fff",
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 20,
    height:40,
    width:40, 
    alignSelf: 'center',
    marginTop: 5,

   },

   fotoBotoes: {
  
      alignSelf: 'center',
      height: '100%', 
      width: '100%',
   },
   
  

  textMeta:{
   alignSelf: 'center',
   fontSize: 20,
  },

  figura:{
    height: '70%',
    width: '100%',
  },

  titleArea:{

    
    fontSize: 20,
    alignSelf:'center',

  },
  

   textoBotao:{
     fontSize:24,
     alignSelf:'center',
   }

  })

export default estilos;