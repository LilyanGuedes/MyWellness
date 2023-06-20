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
import AdicionarDetalhes from "../componentes/AdicionarDetalhes";
import { api } from "../lib/api"

export function Details() {

  const [descricao, setDescricao] = useState("");


  useEffect(() => {
    pegarDados()
   }, []);

  async function submeterDetalhes (texto){
    await api.post("/detalhes", { details: texto });
    pegarDados()
  };

  async function pegarDados () {
    const {data} = await api.get("/descricao")
    setDescricao(data)
  }
 
  return (
   <AdicionarDetalhes funcao={submeterDetalhes}/>
        
  );
}
