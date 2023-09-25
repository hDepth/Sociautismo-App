import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  
  containerPrincipal: {
    backgroundColor: "#00c8ff",
    flex: 1,
    flexDirection: "column",
  },

  title: {
    color: "#000000",
    fontSize: 55,
    fontWeight: "bold",
    margin: 20,
  },

  area: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderRadius: 70,
    height: 120,
    width: 260,
    marginTop: 50,
    alignSelf: "center",
  },

  titleArea: {
    color: "#000000",
    fontSize: 50,
    fontWeight: "bold",
    alignSelf: "center",
    margin: 20,
  },

  caixasTexto: {
    borderColor: "white",
    backgroundColor: "#ffffff",
    borderWidth: 2,
    padding: 15,
    fontSize: 18,
    borderRadius: 50,
    marginTop: 20,
    marginHorizontal: 10,
  },

  caixaSenha: {
    borderColor: "#ffffff",
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

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#313131",
    marginTop: 5,
    width: "80%",
    height: 50,
  },
});

export default estilos;