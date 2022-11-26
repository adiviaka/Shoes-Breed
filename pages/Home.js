import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function Home({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={require('../assets/bg.png')} resizeMode="cover" style={styles.image}>
        <View style={styles.card}>
          <Text style={styles.text1}>Let's see what we have in here!</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Product', { msg: null })}
            style={{
              backgroundColor: '#434655',
              paddingVertical: 20,
              marginBottom: 10,
              borderRadius: 10,
              elevation: 2,
              marginHorizontal: 10,
            }}
          >
            <Text style={{ color: '#FFF8EA', textAlign: 'center', fontWeight: 'bold', fontSize: '36' }}>GO!</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text1: { color: '#434655', textAlign: 'center', fontWeight: '500', fontSize: '36', marginBottom: 20 },
  headerContainer: {
    backgroundColor: '#344E41',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 15,
    alignItems: 'center',
    paddingBottom: 10,
  },
  headerImage: {
    height: 120,
    width: 100,
  },
  headerText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  flatlist: {
    flex: 1,
    marginHorizontal: 10,
  },
  oddItemListContainer: {
    height: 100,
    backgroundColor: '#588157',
    marginVertical: 5,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  evenItemListContainer: {
    height: 100,
    backgroundColor: '#A3B18A',
    marginVertical: 5,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  itemListContent: {
    marginLeft: 10,
  },
  odditemListLine: {
    backgroundColor: '#A3B18A',
    width: 5,
    height: '80%',
  },
  evenitemListLine: {
    backgroundColor: '#588157',
    width: 5,
    height: '80%',
  },
  itemListText: {
    color: '#06283D',
    marginVertical: 2,
    fontWeight: 'bold',
    fontSize: 17,
  },
  card: {
    backgroundColor: '#FFF8EA',
    borderRadius: 24,
    marginTop: 250,
    marginHorizontal: 35,
    padding: 30,
    borderWidth: 1,
    borderColor: '#434655',
  },
});

export default Home;
