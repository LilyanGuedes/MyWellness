import React, {useState} from "react"
import { Button, StyleSheet, Text, TextInput, View } from "react-native"

export default function AdicionarItem({ funcao }) {
    const [texto, setTexto] = useState('')

    const pegarMudanca = (val) => {
      val.preventDefault()
      setTexto(val)
      console.log('i');
    }
    function enviar() {
      funcao(texto)
      setTexto (" ")
    }
    return (
      <View>

        <TextInput
          style={styles.input}
          placeholder="Novo exercício"
          onChangeText={pegarMudanca}
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