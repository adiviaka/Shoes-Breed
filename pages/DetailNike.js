import { useEffect, useState } from 'react';
import { Image, View, FlatList, Text, StyleSheet } from 'react-native';

const DetailNike = ({ route }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    fetch('http://localhost:3000/nike?id=' + route.params.msg)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View>
            <View style={styles.card}>
              <Image source={{ uri: item.image }} style={styles.img} />
              <Text style={styles.textJudul}>{item.name}</Text>
              <Text style={styles.text1}>Color </Text>
              <Text style={styles.text2}>{item.color}</Text>
              <Text style={styles.text1}>Price </Text>
              <Text style={styles.text2}>{item.price}</Text>
              <Text style={styles.text1}>Description </Text>
              <Text style={styles.text2}>{item.detail}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', // ignore this - we'll come back to it
    justifyContent: 'space-between', // ignore this - we'll come back to it
    flexDirection: 'row',
    marginBottom: 10,
  },
  square: {
    backgroundColor: '#7cb48f',
    width: 100,
    height: 100,
    margin: 4,
  },
  circle: {
    width: 40,
    height: 40,
    borderWidth: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text1: { color: '#434655', fontSize: 18, marginBottom: 1, fontWeight: '600' },
  text2: { color: '#434655', fontSize: 14, marginBottom: 4 },
  textnama: {
    color: '#000000',
    marginVertical: -4,
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 10,
    opacity: 0.7,
  },
  textJudul: {
    color: '#000000',
    marginVertical: -4,
    fontWeight: 'bold',
    fontSize: 28,
    marginBottom: 10,
    alignSelf: 'center',
    opacity: 0.8,
  },
  img: {
    height: 300,
    width: 300,
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 5,
  },
  card: {
    backgroundColor: '#F6F6F6',
    borderRadius: 24,
    marginTop: 18,
    marginHorizontal: 35,
    padding: 30,
    borderWidth: 3,
    borderColor: '#000000',
  },
});

export default DetailNike;
