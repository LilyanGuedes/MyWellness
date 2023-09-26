import React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { MaterialIcons } from '@expo/vector-icons'

export default function Detalhes({ detalhes, id, funcao }) {
  return (
    <View style={styles.container}>
      <Text style={styles.postagem}>{detalhes}</Text>
      <TouchableOpacity onPress={() => funcao(id)}>
        <MaterialIcons name="delete" size={28} color={'gray'} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 150
  }
})