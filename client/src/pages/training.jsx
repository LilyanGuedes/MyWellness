import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Linking,
} from "react-native";
import Cabecalho from "../componentes/Cabecalho";
import { useEffect, useState } from "react";
import ItensListados from "../componentes/ItensListados";
import AdicionarItem from "../componentes/AdicionarItem";
import { api } from "../lib/api";

export function Training() {
  const [lista, setLista] = useState("");

  async function deletarExercicio  (key) {
    await api.delete(`/exercicio/${key}`);

    const novaLista = lista.filter((item)=> item.id != key)
    setLista(novaLista)
  };

  useEffect(() => {
   pegarDados()
  }, []);

  async function submeterInformacao (texto){
    await api.post("/exercicio", { exercicio: texto });
    pegarDados()
  };

  async function pegarDados () {
    const {data} = await api.get("/exercicio")
    setLista(data)
  }

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Image
          source={require("../../assets/LogoMyWellness.png")}
          style={{ width: 210, height: 320 }}
          resizeMode="contain"
        />
      </View>

      <View style={styles.linha}></View>

      <View style={styles.scroll}>
        <View style={styles.conteudo}>
          <Cabecalho name="Treino de Inferiores" />
          <AdicionarItem funcao={submeterInformacao} />

          <View>
            <FlatList
              data={lista}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <ItensListados props={item} funcao={deletarExercicio} />
              )}
            />
          </View>
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
    justifyContent: "center",
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
});
