import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Linking } from 'react-native';

const urlCardio = 'https://blog.hoppernutrition.com.br/treino-cardio/';
const urlMuscula = 'https://www.tuasaude.com/beneficios-da-musculacao/';
const urlPosterior = 'https://www.youtube.com/watch?v=LZmu7S__dU0&t=63s';
const urlPernas = 'https://www.youtube.com/watch?v=ro42Rovk0GA&t=108s';
const urlCostas = 'https://www.youtube.com/watch?v=syGd1VJkoMA&t=15s';
const urlBiceps = 'https://www.youtube.com/watch?v=RoRALAYTSLs';
const urlOmbro = 'https://www.youtube.com/watch?v=jhOiqGuECmw';
const urlPeito = 'https://www.youtube.com/watch?v=b_WvXDvPkd8';

function abrirURLCardio() {
  Linking.openURL(urlCardio);
}

function abrirURLMuscula() {
  Linking.openURL(urlMuscula);
}

function abrirURLPosterior() {
  Linking.openURL(urlPosterior);
}

function abrirURLPernas() {
  Linking.openURL(urlPernas);
}

function abrirURLCostas() {
  Linking.openURL(urlCostas);
}

function abrirURLBiceps() {
  Linking.openURL(urlBiceps);
}

function abrirURLOmbro() {
  Linking.openURL(urlOmbro);
}

function abrirURLPeito() {
  Linking.openURL(urlPeito);
}


export function Training() {

  const DataCardio = [
    { id: 1, title: '- Melhora a resistência' },
    { id: 2, title: '- Melhora a eficiência da circulação sanguínea' },
    { id: 3, title: '- Aumento da capacidade respiratória' },
    { id: 4, title: '- Fortalece o coração' }
  ]

  const DataMuscula = [
    { id: 1, title: '- Melhora da densidade óssea' },
    { id: 2, title: '- Melhora da postura e alinhamento corporal' },
    { id: 3, title: '- Aumento da força muscular' },
    { id: 4, title: '- Redução do risco de lesões' }
  ]
  return (

    <View style={styles.container}>

      <View style={styles.head}>
        <Image source={require('../../assets/LogoMyWellness.png')}
          style={{ width: 210, height: 320 }}
          resizeMode="contain" />
      </View>
      <View style={styles.linha}></View>

      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>

        <View style={styles.conteudo}>
          <Text style={styles.titulo}>A importância da atividade física</Text>
          <Text>A atividade física é importante para a saúde cardiovascular, controle de peso, fortalecimento muscular e ósseo, melhora do humor, redução do estresse a e prevenção de doenças crônicas. É recomendado praticar pelo menos 150 minutos de atividade física moderada por semana para obter esses benefícios.
          </Text>
        </View>


        <View style={styles.conteudo}>
          <Text style={styles.titulo}>Treino cardiorrespiratório</Text>
          <FlatList
            numColumns={1}
            keyExtractor={(item) => item.id.toString()}
            data={DataCardio}
            renderItem={({ item }) => (
              <Text>{item.title}</Text>
            )}
          />
          <TouchableOpacity>
            <Text style={styles.mais} onPress={abrirURLCardio}>Saiba mais</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.conteudo}>
          <Text style={styles.titulo}>Treino de Musculação</Text>
          <FlatList
            numColumns={1}
            keyExtractor={(item) => item.id.toString()}
            data={DataMuscula}
            renderItem={({ item }) => (
              <Text>{item.title}</Text>
            )}
          />
          <TouchableOpacity>
            <Text style={styles.mais} onPress={abrirURLMuscula}>Saiba mais</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.conteudo}>

          <Text style={styles.titulo}>Treinos para iniciantes</Text>

           <View style={styles.treinos}>
              <TouchableOpacity>
                <Text style={styles.videos} onPress={abrirURLPosterior}>1.Posterior</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.videos} onPress={abrirURLPernas}>2.Pernas</Text>
              </TouchableOpacity>
           </View>

           <View style={styles.treinos}>
              <TouchableOpacity>
                <Text style={styles.videos} onPress={abrirURLCostas}>3.Costas</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.videos} onPress={abrirURLBiceps}>4.Bíceps</Text>
              </TouchableOpacity>
           </View>

           <View style={styles.treinos}>
              <TouchableOpacity>
                <Text style={styles.videos} onPress={abrirURLOmbro}>5.Ombro</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.videos} onPress={abrirURLPeito}>6.Peito</Text>
              </TouchableOpacity>
           </View>
          
          
        </View>

        <StatusBar style="auto" />
      </ScrollView>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151724',
    alignItems: 'center'

  }, conteudo: {
    backgroundColor: '#FFFFFF',
    borderRadius: 45,
    width: 362,
    height: 210,
    marginTop: 45,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5

  }, logo: {
    color: '#FFFFFF',
    fontSize: 24,
  }, head: {
    marginTop: 42,
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
  },treinos: {
    flexDirection: 'row'
  }, videos: {
    color: '#5B9053',
    fontWeight: 'bold',
    padding: 12,
    fontSize: 16
  }

});