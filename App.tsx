import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import NativeStackNavigator from './src/navigation/NativeStackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      {/* <NativeStackNavigator /> */}
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default App;
