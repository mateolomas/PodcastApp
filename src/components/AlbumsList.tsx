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
    <View style={{}}>
      <ScrollView horizontal style={{height: 300}}>
        {data &&
          data.body.map((album: Body) => {
            if (album.urls.logo_image.original) {
              return (
                <TouchableOpacity
                  key={album.id + album.formatted_description}
                  onPress={() => navigation.navigate('AlbumScreen', album)}
                  style={{
                    borderRadius: 20,
                    marginHorizontal: 10,
                    marginVertical: 10,
                    width: 200,
                  }}>
                  <Image
                    source={{uri: album.urls.logo_image.original}}
                    style={{
                      width: 200,
                      height: 200,
                      borderRadius: 20,
                    }}
                  />
                  <View style={{}}>
                    <Text
                      style={{
                        fontSize: 15,
                        textAlign: 'center',
                      }}>
                      {album.title}
                    </Text>
                    <Text style={{fontSize: 15, textAlign: 'center'}}>
                      {album.channel_style}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }
          })}
      </ScrollView>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginVertical: 10,
        }}>
        <Text style={{color: 'purple', fontSize: 20, marginLeft: '10%'}}>
          Recently Played
        </Text>
        <Text style={{color: 'purple', fontSize: 15, marginRight: '10%'}}>
          See more
        </Text>
      </View>
      {data &&
        data.body.map((album: Body) => {
          if (album.urls.logo_image.original) {
            return (
              <View>
                <TouchableOpacity
                  key={album.id + album.formatted_description}
                  onPress={() => navigation.navigate('AlbumScreen', album)}
                  style={{
                    alignItems: 'center',
                    left: '30%',
                    height: 80,
                    flexDirection: 'row',
                    marginVertical: 10,
                    borderRadius: 20,
                  }}>
                  <Image
                    source={{uri: album.urls.logo_image.original}}
                    style={{width: 80, height: 80, borderRadius: 20}}
                  />
                  <View
                    style={{
                      left: '20%',
                    }}>
                    <Text
                      style={{
                        fontSize: 15,
                        textAlign: 'left',
                      }}>
                      {album.title}
                    </Text>
                    <Text style={{fontSize: 13, textAlign: 'left'}}>
                      {album.channel_style}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            );
          }
        })}
    </View>
  );
};

export default AlbumsList;
