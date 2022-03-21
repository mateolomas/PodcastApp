import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import NativeStack from './src/navigation/NativeStackNavigator';
import TrackPlayer from 'react-native-track-player';
import {AppRegistry} from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      <NativeStack />
    </NavigationContainer>
  );
};

export default App;
