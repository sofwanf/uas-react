import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Surat')}>
        <Text style={styles.text}>Baca Quran</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.text}>Setting</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#0C090A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    borderWidth: 2,
    height: 40,
    marginBottom: 10,
    borderRadius: 10,
    padding: 5,
    fontSize: 18,
    borderColor: 'white',
  },
});
