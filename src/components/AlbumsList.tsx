import React, {useState} from 'react';
import {
  ActivityIndicator,
  ActivityIndicatorBase,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useFetch} from '../hooks/useFetch';
import {ChannelRecommended, Body} from '../interfaces/IChannel';
import {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import AlbumScreen from '../screens/AlbumScreen';
import {AudioClip} from '../interfaces/IAlbum';

export type RootStackParamList = {
  AlbumScreen: Body;
};

const AlbumsList = () => {
  const {data, loading, error} = useFetch<ChannelRecommended>(
    'https://api.audioboom.com/channels/recommended/',
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
    <View>
      {data &&
        data.body.map((album: Body) => {
          if (album.urls.logo_image.original)
            return (
              <TouchableOpacity
                key={album.id + album.formatted_description}
                onPress={() => navigation.navigate('AlbumScreen', album)}
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 300,
                  marginVertical: 30,
                }}>
                <Image
                  source={{uri: album.urls.logo_image.original}}
                  style={{width: '100%', height: '100%'}}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    fontSize: 20,
                    textAlign: 'center',
                  }}>
                  {album.title}
                </Text>
              </TouchableOpacity>
            );
        })}
    </View>
  );
};

export default AlbumsList;
