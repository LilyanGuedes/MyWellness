import React, { useState } from "react";
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
import {MaterialIcons} from '@expo/vector-icons';
import { StatusBar } from "expo-status-bar";

export function User({ navigation }) {
  const [data, setData] = useState([
    { id: 1, item: "1-Pescoço (cm):", quantity: "" },
    { id: 2, item: "2-Ombros (cm):", quantity: "" },
    { id: 3, item: "3-Peitoral (cm):", quantity: "" },
    { id: 4, item: "4-Abdomen (cm):", quantity: "" },
    { id: 5, item: "5-Cintura (cm):", quantity: "" },
    { id: 6, item: "6-Quadril (cm):", quantity: "" },
    { id: 7, item: "7-Braço direito (cm):", quantity: "" },
    { id: 8, item: "8-Antebraço direito (cm):", quantity: "" },
    { id: 9, item: "9-Braço esquerdo (cm):", quantity: "" },
    { id: 10, item: "10-Antebraço esquerdo (cm):", quantity: "" },
    { id: 11, item: "11-Coxa direita (cm):", quantity: "" },
    { id: 12, item: "12-Panturrilha direita (cm):", quantity: "" },
    { id: 13, item: "13-Coxa esquerda (cm):", quantity: "" },
    { id: 14, item: "14-Panturrilha esquerda (cm):", quantity: "" },
  ]);

  const handleQuantityChange = (text, id) => {
    const newData = data.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: text };
      }
      return item;
    });
    setData(newData);
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{item.item}</Text>
      </View>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={item.quantity}
        onChangeText={(text) => handleQuantityChange(text, item.id)}
      />
    </View>
  );
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.head}>
        <TouchableOpacity style={styles.botão}
            onPress={()=> navigation.navigate("home")}>
            <MaterialIcons name="keyboard-arrow-left" size={28} color={'gray'}/>
        </TouchableOpacity>
        <Image
          source={require("../../assets/LogoMyWellness.png")}
          style={{ width: 210, height: 320,  marginLeft: 60  }}
          resizeMode="contain"
        />
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <Image
          source={require("../../assets/Molde.png")}
          style={styles.image}
        />
        <View style={styles.listContainer}>
          <Text style={styles.listHeader}>Medidas:</Text>
          {data.map((item) => (
            <View key={item.id} style={styles.itemContainer}>
              <View style={styles.textContainer}>
                <Text style={styles.text}>{item.item}</Text>
              </View>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder="cm"
                value={item.quantity}
                onChangeText={(text) => handleQuantityChange(text, item.id)}
              />
            </View>
          ))}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.salvarButton]}
              onPress={() => console.log("Botão Salvar pressionado")}
            >
              <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.apagarButton]}
              onPress={() => console.log("Botão Apagar pressionado")}
            >
              <Text style={styles.buttonText}>Apagar Medida</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 35,
    backgroundColor: "#151724",
  },
  scrollContainer: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
  },
  image: {
    width: 350,
    height: 550,
    resizeMode: "contain",
  },
  listContainer: {
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  listHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  textContainer: {
    width: 270,
  },
  text: {
    fontSize: 18,
  },
  input: {
    borderWidth: 1,
    padding: 5,
    width: 50,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 10,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  salvarButton: {
    backgroundColor: "black",
    width: 300,
    alignItems: "center",
    borderRadius: 15,
  },
  apagarButton: {
    backgroundColor: "grey",
    width: 300,
    alignItems: "center",
    borderRadius: 15,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  head: {
    flexDirection: "row",
    alignItems: "center",
    width: 375,
    height: 55,
  }
});
