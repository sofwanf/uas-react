import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import dataQuran from '../data/daftar.json';

const Surat = ({navigation}) => {
  const [quran, setQuran] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {dataQuran.map((item, key) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Detail', {id: item.id})}
              key={key}>
              <View style={styles.textBox}>
                <Text style={styles.text}>{item.id}</Text>
                <Text style={styles.text}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Surat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  text: {
    fontSize: 20,
    margin: 10,
    flex: 1,
  },
  textBox: {
    flexDirection: 'row',
  },
});