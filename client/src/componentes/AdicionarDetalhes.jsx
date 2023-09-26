import React, {useState} from "react"
import { Button, StyleSheet, Text, TextInput, View } from "react-native"

export default function AdicionarDetalhes({texto, setTexto, funcao }) {

    function enviar() {
      funcao()
      setTexto (" ")
    }
    return (
      <View>
        <TextInput
          style={styles.input}
          placeholder="Detalhes"
          onChangeText={setTexto}
          value={texto}
        />
        <Button
          onPress={enviar}
          title="+"
          color= '#C2B1B1'
        />
      </View>
    )
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  }
})