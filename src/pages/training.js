import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Linking } from 'react-native';
import Cabecalho from '../componentes/Cabecalho';
import { useState } from 'react';
import NovosItens from '../componentes/NovosItens';

export function Training() {

  const [lista, setLista] = useState ([
    {texto: "agachamento", key: '1'},
    {texto: "extensora", key: '2'},
    {texto: "hack", key: '3'}
  ])

  const apertarItem = (key) => {
    setLista(
      (prevLista) => {
        return prevLista.filter(texto => texto.key != key)
      }
    )
  }

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
          <View>
            <FlatList
              data={lista}
              renderItem={({item}) => (
                <NovosItens props={item} funcao={apertarItem}/>
              )}/>
          </View>
        </View>


        <View style={styles.conteudo}>
          <Cabecalho name="Treino B"/>
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
    borderRadius: 45,
    width: 362,
    height: 500,
    marginTop: 45,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 15,
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

  }, mais: {
    color: '#66B25A',
    fontWeight: 'bold',
    width: 82,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center'
  }, titulo: {
    fontWeight: 'bold',
    marginBottom: 12
  },treinos: {
    flexDirection: 'row'
  }, videos: {
    color: '#5B9053',
    fontWeight: 'bold',
    padding: 12,
    fontSize: 16
  }

});