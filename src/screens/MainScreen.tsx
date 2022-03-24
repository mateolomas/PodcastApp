import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AlbumsList from '../components/AlbumsList';

const MainScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Good Morning!</Text>
          <Text style={styles.name}>Mateo Sebastian</Text>
        </View>

        <View style={styles.playlisttitle}>
          <Text style={{color: 'purple'}}>Playlist</Text>
          <Text style={{color: 'purple', fontWeight: '300'}}>See more</Text>
        </View>
        <View>
          <AlbumsList />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  playlisttitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginHorizontal: '10%',
    marginVertical: '5%',
  },
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

export default MainScreen;
