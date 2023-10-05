import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  container: {
    flex: 1,
  },

  contadorquestao: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },

  textcont1: {
    color: '#ffffff', 
    fontSize: 20, 
    opacity: 0.6, 
    marginRight: 2,
  },

  textcont2: {
    color: '#ffffff', 
    fontSize: 18, 
    opacity: 0.6, 
    marginRight: 2,
  },

  question: {
    color: '#ffffff',
    fontSize: 30
  },

  renderoptions: {
    
        borderWidth: 3, 
        borderColor: option==correctOption 
        ? '#00C851'
        : option==currentOptionSelected 
        ? '#ff4444'
        : '#1E90FF'+'40',
        backgroundColor: option==correctOption 
        ? '#00C851' +'20'
        : option==currentOptionSelected 
        ? '#ff4444' +'20'
        : '#00C851'+'20',
        height: 60, 
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginVertical: 10,
  },

  textoption: {

        fontSize: 20, 
        color: '#ffffff',
  },

  correctOption: {

        width: 30,
        height: 30,
        borderRadius: 30/2,
        backgroundColor: '#00C851',
        justifyContent: 'center', 
        alignItems: 'center',
  },

  iconesV: {
    
        color: '#ffffff',
        fontSize: 20,
  },

  wrongOption: {
    
        width: 30, 
        height: 30, 
        borderRadius: 30/2,
        backgroundColor: '#ff4444',
        justifyContent: 'center', 
        alignItems: 'center',
  },

  iconesX: {
    
        color: '#ffffff',
        fontSize: 20
    
  },

  nextbutton: {
    
        marginTop: 20, 
        width: '100%', 
        backgroundColor: '#3498db', 
        padding: 20, 
        borderRadius: 5,
    
  },

  textnext: {
        fontSize: 20, 
        color: '#ffffff', 
        textAlign: 'center'
  },

  renderbar: {
    
        width: '100%',
        height: 20,
        borderRadius: 20,
        backgroundColor: '#00000020', 
  },
  renderquestion:{
    
        marginVertical: 40
    
  },
  viewInSafeView:{
    
        flex: 1,
        paddingVertical: 40,
        paddingHorizontal: 16,
        backgroundColor: "#252C4A",
        position:'relative'
    
  },
  viewmodal:{
    
        flex: 1,
        backgroundColor: "#252c4a",
        alignItems: 'center',
        justifyContent: 'center'
    
  },
  viewmodal2:{
    
        backgroundColor: '#ffffff',
        width: '90%',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center'
    
  },
  textmodal: {
    fontSize: 30, 
    fontWeight: 'bold',
  },
  viewmodal3: {
    
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: 20
    
  },
  textallquestions: {
    
        fontSize: 20, 
        color: "#171717"
    
  },

  retrybutton: {
    backgroundColor: COLORS.accent,
    padding: 20, width: '100%', borderRadius: 20
},
textretry:{
    
        textAlign: 'center', 
        color: '#ffffff', 
        fontSize: 20
    
}


});

export default estilos;