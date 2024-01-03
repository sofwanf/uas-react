import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.judul}>Al-Quran Digital</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Surat')}>
          <Text style={styles.text}>Baca Quran</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Setting')}>
          <Text style={styles.text}>Setting</Text>
        </TouchableOpacity>
        <Text>{new Date().getFullYear()} Bareng Studio</Text>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
    // justifyContent: 'center',
    // alignItems: 'center',
    background: 'linear-gradient(135deg, #27273D, #0C090A)',
  },
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: 'gray',
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
  judul: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 100,
  },
  button: {
    backgroundColor: '#1E1E1E',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
});
