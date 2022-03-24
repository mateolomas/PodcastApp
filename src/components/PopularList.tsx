import React, {useState} from 'react';
import {
  ActivityIndicator,
  ActivityIndicatorBase,
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useFetch} from '../hooks/useFetch';

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {Popular, Body, AudioClipPopular} from '../interfaces/IPopular';
import {AudioClip} from '../interfaces/IAlbum';

export type RootStackParamList = {
  PopularScreen: AudioClipPopular | AudioClip;
};

const PopularList = () => {
  const {data, loading, error} = useFetch<Popular>(
    'https://api.audioboom.com/audio_clips/popular',
  );

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  if (loading) {
    <ActivityIndicator
      size="large"
      color="#0000ff"
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    />;
  }

  return (
    <View style={{}}>
      {data &&
        data.body.audio_clips.map((popularSong: AudioClipPopular) => {
          return (
            <>
              <TouchableOpacity
                key={popularSong.id}
                onPress={() => navigation.navigate('PlayerScreen', popularSong)}
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 300,
                  marginVertical: 30,
                }}>
                <Image
                  source={{uri: popularSong.channel.urls.logo_image.original}}
                  style={{width: '100%', height: '100%'}}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    fontSize: 20,
                    textAlign: 'center',
                  }}>
                  {popularSong.title}
                </Text>
              </TouchableOpacity>
            </>
          );
        })}
    </View>
  );
};

export default PopularList;
