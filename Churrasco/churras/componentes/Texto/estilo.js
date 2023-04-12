import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
  boxTexto: {
    padding: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center"
  },

  boxTextoTitulo: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: '700',
    color: '#313131',
    marginBottom: 20,
    lineHeight: 20
  },

  boxTextoSubtitulo: {
    textAlign: "center",
    color: '#313131',
    lineHeight: 20
  },
});

export default estilo;
