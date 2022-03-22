import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
} from 'react-native';
import AlbumsList from '../components/AlbumsList';
import {useFetch} from '../hooks/useFetch';
import {Body, ChannelRecommended} from '../interfaces/IChannel';

const MainScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Podcast Application</Text>
        </View>

        <AlbumsList />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  titleContainer: {
    flex: 1,
    backgroundColor: 'purple',
    alignContent: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 48,
    color: 'white',
    textAlign: 'center',
    padding: 20,
  },
});

export default MainScreen;
