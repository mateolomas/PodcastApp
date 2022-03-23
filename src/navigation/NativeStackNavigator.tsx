import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MainScreen from '../screens/MainScreen';
import {AudioClip} from '../interfaces/IAlbum';
import AlbumScreen from '../screens/AlbumScreen';
import {Body} from '../interfaces/IChannel';
import PlayerScreen from '../screens/PlayerScreen';

export type RootStackParamList = {
  MainScreen: undefined;
  AlbumScreen: Body;
  PlayerScreen: AudioClip;
};

const Stack = createNativeStackNavigator();

const NativeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="MainScreen"
        component={MainScreen}
      />
      <Stack.Screen name="AlbumScreen" component={AlbumScreen} />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="PlayerScreen"
        component={PlayerScreen}
      />
    </Stack.Navigator>
  );
};

export default NativeStack;
