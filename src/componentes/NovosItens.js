import React from "react"
import { StyleSheet, Text, TouchableOpacity } from "react-native"

export default function NovosItens({props, funcao}) {
    return (
      <TouchableOpacity onPress={() => funcao(props.key)}>
        <Text style={styles.texto}>{props.texto}</Text>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  texto: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10
  }
})