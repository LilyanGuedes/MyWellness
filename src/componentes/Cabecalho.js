import React from "react"
import { StyleSheet, Text, View } from "react-native"

export default function Cabecalho(props) {
  return (
    <View style={styles.cabecalho}>
      <Text style={styles.titulo}>{props.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  cabecalho: {
    height: 50,
    width: 340,
    borderRadius: 20,
    backgroundColor: 'coral',
    justifyContent: 'center',
    alignItems: 'center',

  },
  titulo: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  }
})