import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, TextInput, Linking } from 'react-native';
import React, { useState } from 'react';
import {FontAwesome} from "@expo/vector-icons"

export function Home({navigation}) {
  return (
    <View style={styles.container}>

      <View style={styles.head}>
        <Image source={require('../../assets/LogoMyWellness.png')}
          style={{ width: 360, height: 450 }}
          resizeMode="contain" />
      </View>

      <StatusBar style="auto" />

      <TouchableOpacity style={styles.botão}
           onPress={()=> navigation.navigate("training")}>
       <Image source={require('../../assets/treino.png')} 
          style={{width: 120, height: 80}}
          resizeMode="contain"/>
          <Text style={styles.botaoText}>ORGANIZE SEUS EXERCÍCIOS</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botão}
           onPress={()=> navigation.navigate("water")}>
       <Image source={require('../../assets/garrafa-de-agua.png')} 
          style={{width: 120, height: 80}}
          resizeMode="contain"/>
          <Text style={styles.botaoText}>QUANTO DE ÁGUA INGERIR!</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botão} 
          onPress={()=> navigation.navigate("user")}>
       <Image source={require('../../assets/corpo.png')} 
          style={{width: 120, height: 80}}
          resizeMode="contain"/>
          <Text style={styles.botaoText}>ARMAZENE SUAS MEDIDAS</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151724',
    alignItems: 'center'

  }, logo: {
    color: '#FFFFFF',
    fontSize: 24,
  }, head: {
    marginTop: 60,
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
  }, botão: {
    backgroundColor: '#252733',
    borderRadius: 8,
    width: 362,
    height: 125,
    marginTop:74,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5
  }, botaoText:{
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFFFFF'
  }, title: {
    width: 230
  }, titleText: {
    color: '#FFFFFF'
  }

});