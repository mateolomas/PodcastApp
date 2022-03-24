import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MainScreen from '../screens/MainScreen';
import {AudioClip} from '../interfaces/IAlbum';
import AlbumScreen from '../screens/AlbumScreen';
import {Body} from '../interfaces/IChannel';
import PlayerScreen from '../screens/PlayerScreen';
import PopularScreen from '../screens/PopularSreen';
import {AudioClipPopular} from '../interfaces/IPopular';

export type RootStackParamList = {
  MainScreen: undefined;
  AlbumScreen: Body;
  PlayerScreen: AudioClip;
  PopularScreen: AudioClipPopular;
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
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="PopularScreen"
        component={PopularScreen}
      />
    </Stack.Navigator>
  );
};

export default NativeStack;
