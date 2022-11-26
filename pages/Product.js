import { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function Product({ navigation }) {
  return (
    <View style={{ flex: 1, marginTop: 20 }}>
      <TouchableOpacity onPress={() => navigation.navigate('Nike', { msg: null })}>
        <View style={styles.oddItemListContainer}>
          <Image source={require('../assets/nike.png')} style={styles.ImageMovie} />
          <View style={styles.itemListContent}>
            <Text style={styles.itemListText}>Nike</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('New Balance', { msg: null })}>
        <View style={styles.oddItemListContainer}>
          <Image source={require('../assets/nb.png')} style={styles.ImageMovie} />
          <View style={styles.itemListContent}>
            <Text style={styles.itemListText}>New Balance</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Converse', { msg: null })}>
        <View style={styles.oddItemListContainer}>
          <Image source={require('../assets/converse.png')} style={styles.ImageMovie} />
          <View style={styles.itemListContent}>
            <Text style={styles.itemListText}>Converse</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  flatlist: {
    flex: 1,
    marginHorizontal: 10,
  },
  oddItemListContainer: {
    marginHorizontal: 20,
    height: 100,
    backgroundColor: '#FFFFFF',
    marginVertical: 5,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#000000',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  ImageMovie: {
    height: 70,
    width: 70,
    borderRadius: 60,
    marginVertical: 10,
  },
  itemListContent: {
    marginLeft: 10,
  },
  itemListText: {
    color: '#000000',
    marginVertical: -4,
    fontWeight: 'bold',
    fontSize: 21,
  },
});

export default Product;
