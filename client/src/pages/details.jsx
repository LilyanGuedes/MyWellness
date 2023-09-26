import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import Detalhes from "../componentes/Detalhes";
import AdicionarDetalhes from "../componentes/AdicionarDetalhes";
import { api } from "../lib/api";
import { MaterialIcons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";

export function Details({ navigation }) {
  const { id } = useRoute().params;
  const [descricao, setDescricao] = useState("");

  async function submeterDetalhes() {
    await api.patch(`/descricao/${id}`, { details: descricao });
  }

  async function deletarDetalhes() {}

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <TouchableOpacity
          style={styles.botão}
          onPress={() => navigation.navigate("training")}
        >
          <MaterialIcons name="keyboard-arrow-left" size={28} color={"gray"} />
        </TouchableOpacity>
      </View>

      <View style={styles.scroll}>
        <View style={styles.conteudo}>
          <AdicionarDetalhes funcao={submeterDetalhes} texto={descricao} setTexto={setDescricao} />
          <Detalhes detalhes={descricao} id={id} funcao={deletarDetalhes} />
        </View>

        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#151724",
    alignItems: "center",
  },
  conteudo: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    width: 362,
    height: 698,
    marginTop: 15,
    flexDirection: "column",
    alignItems: "center",
    paddingRight: 15,
    paddingLeft: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  logo: {
    color: "#FFFFFF",
    fontSize: 24,
  },
  head: {
    marginTop: 42,
    flexDirection: "row",
    alignItems: "center",
    width: 375,
    height: 55,
  },
  linha: {
    backgroundColor: "#363636",
    height: 0.34,
    width: 408,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  titulo: {
    fontWeight: "bold",
  },
  treinos: {
    flexDirection: "row",
  },
  lista: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 205,
    marginTop: 19,
    flexDirection: "row",
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
