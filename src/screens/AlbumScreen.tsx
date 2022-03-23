import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/NativeStackNavigator';
import {useFetch} from '../hooks/useFetch';
import {AlbumType, AudioClip} from '../interfaces/IAlbum';

interface Props
  extends NativeStackScreenProps<RootStackParamList, 'AlbumScreen'> {}

const AlbumScreen = ({route, navigation}: Props) => {
  const album = route.params;

  const audioClips = useFetch<AlbumType>(
    `https://api.audioboom.com/channels/${album.id}/audio_clips`,
  );

  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View style={styles.container}>
        <Image
          source={{uri: album.urls.banner_image.original!}}
          style={{width: '100%', height: 200}}
          resizeMode="contain"
        />
        <View>
          <Text style={styles.title}>{album.title}</Text>
          <Text style={styles.styleChannel}>{album.channel_style}</Text>
          <Text style={styles.title} />
          <Text style={styles.description}>{album.description}</Text>
        </View>

        <View style={styles.podcastList}>
          <Text style={styles.title}>Lasts Podcast</Text>

          {audioClips.data?.body.audio_clips.map((audioClip: AudioClip) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate('PlayerScreen', audioClip)}>
                <View
                  style={{
                    marginVertical: 8,
                    borderBottomColor: '#ccc',
                    borderBottomWidth: 1,
                  }}
                  key={audioClip.id + audioClip.recorded_at}>
                  <Text style={styles.pocastInfo}>
                    Episode Number: {audioClip.episode_number}
                  </Text>
                  <Text style={styles.pocastInfo}>
                    Duration: {Math.round(audioClip.duration / 60)} min
                  </Text>
                  <Text style={styles.pocastInfo}>
                    Title: {audioClip.title}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 20,
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
  },
  styleChannel: {
    fontSize: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    textAlign: 'left',
  },
  podcastList: {
    marginTop: 20,
  },
  pocastInfo: {
    marginVertical: 8,
  },
});

export default AlbumScreen;
