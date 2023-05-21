import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

export default function App() {

  return (
    <View style={styles.container}>

      <View style={styles.head}>
        <Image source={require('./assets/Logo2.png')}
            style={{ width: 210, height: 320 }}
            resizeMode="contain" />
        <Ionicons name="person-outline" size={24} color="black" />
      </View>
      <View style={styles.linha}></View>

      
      <View style={styles.botão}>
       <Image source={require('./assets/treino.png')} 
          style={{width: 120, height: 80}}
          resizeMode="contain"/>
        <TouchableOpacity>
          <Text style={styles.botaoText}>DICAS DE TREINO</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.botão}>
       <Image source={require('./assets/garrafa-de-agua.png')} 
          style={{width: 120, height: 80}}
          resizeMode="contain"/>
       <TouchableOpacity>
          <Text style={styles.botaoText}>QUANTO DE ÁGUA INGERIR</Text>
       </TouchableOpacity>
      </View>

      <View style={styles.botão}>
        <Image source={require('./assets/grafico-de-barras.png')} 
          style={{width: 120, height: 80}}
          resizeMode="contain"/>
       <TouchableOpacity>
          <Text style={styles.botaoText}>GASTO CALÓRICO</Text>
       </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5B9053',
    alignItems: 'center',
  }, botão: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    width: 362,
    height: 125,
    marginTop:45,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5
  }, logo: {
    color: '#FFFFFF',
    fontSize: 24,
  }, head:{
    marginTop:42,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  },
  botaoText:{
    fontSize: 15,
    fontWeight: 'bold',
  }
});
