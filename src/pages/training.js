import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Linking } from 'react-native';
import Cabecalho from '../componentes/Cabecalho';
import { useState } from 'react';
import ItensListados from '../componentes/ItensListados';
import AdicionarItem from '../componentes/AdicionarItem';
import database from "../config/firebaseconfig";
import {FontAwesome} from "@expo/vector-icons"

export function Training() {

  const [lista, setLista] = useState ('')

  const apertarItem = (key) => {
    setLista(
      (prevLista) => {
        return prevLista.filter(texto => texto.key != key)
      }
    )
  }

  const SubmeterInformacao = (texto) => {
    setLista((prevLista) => {
      return [
        { texto: texto, key: Math.random().toString()},
        ...prevLista
      ]
    })
  }

  
    const [treinoA, setTreinoA] = useState([])
    
    useEfect(()=> {
      database.collection("TrainingA").onSnapshot((query)=>{
        const list = []
        query.forEach((doc)=>{
          list.push({...doc.data(), id: doc.id})
        })
        setTreinoA(list)
      })
    }, [])

  return (

    <View style={styles.container}>

      <View style={styles.head}>
        <Image source={require('../../assets/LogoMyWellness.png')}
          style={{ width: 210, height: 320 }}
          resizeMode="contain" />
      </View>

      <View style={styles.linha}></View>

      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>

        <View style={styles.conteudo}>

          <Cabecalho name="Treino A"/>
          <AdicionarItem funcao={SubmeterInformacao}/>

          <View>
            <FlatList
              data={lista}
              renderItem={({item}) => (
                <ItensListados props={item} funcao={apertarItem}/>
              )}/>
          </View>

        </View>


        <View style={styles.conteudo}>

          <Cabecalho name="Treino B"/>
          <AdicionarItem funcao={SubmeterInformacao}/>

          <View>
            <FlatList
              data={lista}
              renderItem={({item}) => (
                <ItensListados props={item} funcao={apertarItem}/>
              )}
            />
          </View>

        </View>

        <View style={styles.conteudo}>
         <Cabecalho name="Treino C"/>
        </View>

        <View style={styles.conteudo}>
         <Cabecalho name="Treino D"/>
        </View>

        <StatusBar style="auto" />
      </ScrollView>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151724',
    alignItems: 'center'

  }, conteudo: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    width: 362,
    height: 500,
    marginTop: 45,
    flexDirection: 'column',
    alignItems: 'center',
    paddingRight: 15,
    paddingLeft: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5

  }, logo: {
    color: '#FFFFFF',
    fontSize: 24,
  }, head: {
    marginTop: 42,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 375,
    height: 55
  }, linha: {
    backgroundColor: '#FFFFFF',
    height: 0.34,
    width: 408,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5

  }, titulo: {
    fontWeight: 'bold'
  },treinos: {
    flexDirection: 'row'
  }

});