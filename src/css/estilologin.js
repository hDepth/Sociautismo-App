import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
    flexDirection: "column",
  },

  imagemFundo: {
    flex: 1,
    resizeMode: "cover",
    width: "auto",
    height: "auto",
  },

  title: {
    color: "#000000",
    fontSize: 30,
    fontWeight: "bold",
    margin: 0,
  },

  imagemLogo: {
    width: "100%",
    height: 150,
    marginTop: 55,
    right: 5,
    marginBottom: 10,
    

  },

  caixaEmail: {
    backgroundColor: "#ffffff",
    borderWidth: 2,
    padding: 15,
    fontSize: 18,
    borderRadius: 50,
    marginTop: 20,
    marginHorizontal: 10,
  },

  caixaSenha: {
    backgroundColor: "#ffffff",
    borderWidth: 2,
    padding: 15,
    fontSize: 18,
    borderRadius: 50,
    marginTop: 20,
    marginHorizontal: 10,
  },

  Botao: {
    backgroundColor: "white",
    width: 250,
    height: 60,
    marginTop: 30,
    marginEnd: 20,
    borderRadius: 50,
    padding: 20,
    alignSelf: "center",
  },

  textoBotao: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
    alignSelf: "center",
  },
  recsenha: {
    margin: 20,
  },
  textrecsenha: {
    color: 'blue',
    fontSize: 15,
    fontWeight:'bold',
  }
});

export default estilos;