import React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import {MaterialIcons} from '@expo/vector-icons'

export default function ItensListados({props, funcao}) {
    return (
      <TouchableOpacity onPress={() => funcao(props.id)}>
        <View style={styles.postagem}>
          <MaterialIcons name="delete" size={18} color={'gray'}/>
          <Text style={styles.itemTexto}>{props.exercicios}</Text>
        </View>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  postagem: {
      padding: 16,
      marginTop: 16,
      borderColor: "#bbb",
      borderWidth: 1,
      borderStyle: 'dashed',
      borderRadius: 10,
      flexDirection: 'row'
  },
  itemTexto: {
    marginLeft: 30
  }
})