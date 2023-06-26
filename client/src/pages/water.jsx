import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, TextInput, Linking } from 'react-native';
import React, { useState } from 'react';
import {MaterialIcons} from '@expo/vector-icons'

const urlSaibaMais = 'https://www.clinicaunavita.com.br/noticias/quantos-litros-de-agua-voce-precisa-beber-diariamente'

function SaibaMais() {
  Linking.openURL(urlSaibaMais);
}


export function Water({ navigation }) {

  const [valor, setValor] = useState('');
  const [resultado, setResultado] = useState(0);

  const calcularResultado = () => {
    const valorNumerico = parseFloat(valor);
    if (!isNaN(valorNumerico)) {
      const novoResultado = valorNumerico * 0.035;
      setResultado(novoResultado.toFixed(2));
    }
  }

  const beneficios = [
    { id: 1, title: '- Regulação da temperatura corporal' },
    { id: 2, title: '- Transporte de nutrientes' },
    { id: 3, title: '- Eliminação de resíduos' },
    { id: 4, title: '- Lubrificação das articulações' },
    { id: 5, title: '- Manutenção do equilíbrio hídrico' }
  ]

  return (

    <View style={styles.container}>

      <View style={styles.head}>
       <TouchableOpacity style={styles.botão}
            onPress={()=> navigation.navigate("home")}>
            <MaterialIcons name="keyboard-arrow-left" size={28} color={'gray'}/>
        </TouchableOpacity>
        <Image source={require('../../assets/LogoMyWellness.png')}
          style={{ width: 210, height: 320, marginLeft: 60 }}
          resizeMode="contain" />
      </View>
      <View style={styles.linha}></View>

      <StatusBar style="auto" />

      <View style={{ height: 368, width: 383, borderRadius: 12, marginTop: 20, alignItems: 'center', justifyContent: 'flex-start', backgroundColor: '#252733'  }}>
        <Text style={{ fontSize: 18, marginTop: 20, color: '#FFFFFF' }}>Você sabe quanto de água deve ingerir?</Text>
        <Image source={require('../../assets/agua-diaria.png')}
          style={{ width: 98, height: 208 }}
          resizeMode="contain" />

        <TextInput
          style={{ width: 200, height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, paddingHorizontal: 10 }}
          keyboardType="numeric"
          placeholder="Digite o seu peso"
          onChangeText={texto => setValor(texto)}
          value={valor}
        />
        <TouchableOpacity onPress={calcularResultado} style={styles.btnCalcular}>
          <Text>Calcular</Text>
        </TouchableOpacity>
        {resultado > 0 &&
          <Text style={{ fontSize: 16, marginTop: 20,height: 300, color: '#ffff' }}>
            Ingerir aproximadamente: {resultado} litros
            
            <View style={styles.conteudoAtençao}>
              <Image source={require('../../assets/ponto-de-exclamacao.png')}
                style={{ width: 30, height: 30 }}
                resizeMode="contain" />
              <Text>Praticantes de atividade física precisam tomar mais de cerca de 500 ml a 1 L de água por cada hora de atividade. As diferenças de temperatura também influenciam a recomendação.</Text>
              <TouchableOpacity>
                <Text style={styles.mais} onPress={SaibaMais}>Saiba mais</Text>
              </TouchableOpacity>
            </View>
          </Text>
        }
      </View>

    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151724',
    alignItems: 'center',
    justifyContent: 'flex-start'

  }, logo: {
    color: '#FFFFFF',
    fontSize: 24,
  }, head: {
    marginTop: 42,
    flexDirection: 'row',
    alignItems: 'center',
    width: 375,
    height: 55
  }, linha: {
    backgroundColor: '#363636',
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
  }, btnCalcular: {
    backgroundColor: '#C2B1B1',
    padding: 10,
    borderRadius: 5,
    width: 80,
    height: 38,
    opacity: 0.6
  }, conteudoAtençao: {
    backgroundColor : '#dcdcdc',
    borderRadius: 45,
    width: 362,
    height: 140,
    marginTop: 60,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5

  }
});