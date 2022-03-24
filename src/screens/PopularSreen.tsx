import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import PopularList from '../components/PopularList';

const PopularScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Popular!</Text>
          <Text style={styles.name}>Mateo Sebastian</Text>
        </View>

        <PopularList />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},

  titleContainer: {
    height: 300,
    backgroundColor: 'rgb(207,0,255)',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  title: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    padding: 20,
  },
  name: {
    fontSize: 20,
    left: 120,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default PopularScreen;
