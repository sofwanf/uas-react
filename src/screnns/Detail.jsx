import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import quran from '../data/quran.json';

const Detail = ({route}) => {
  const [data, setData] = useState(null);

  const {id} = route.params;

  const getData = () => {
    setData(quran[`${id}`]);
  };

  useEffect(() => {
    getData();
    console.log(id);
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {data?.map((item, key) => {
          return (
            <View key={key} style={styles.textBox}>
              <Text style={styles.verseText}>{item.verse}</Text>
              <Text style={styles.text}>{item.text}</Text>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Detail;

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
  verseText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginEnd: 10,
    color: '#333',
  },
  textBox: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 10,
  },
});
