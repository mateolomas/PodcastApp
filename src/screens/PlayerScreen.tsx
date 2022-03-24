import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  ActivityIndicator,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import Slider from '@react-native-community/slider';

import {RootStackParamList} from '../navigation/NativeStackNavigator';
import TrackPlayer, {
  State,
  usePlaybackState,
  useProgress,
} from 'react-native-track-player';
import {useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props
  extends NativeStackScreenProps<RootStackParamList, 'PlayerScreen'> {}

const PlayerScreen = ({route, navigation}: Props) => {
  const track = route.params;
  const playbackState = usePlaybackState();
  const progress = useProgress();

  const song = [
    {
      title: track.title,
      artist: String(track.user.username),
      artwork: track.urls.image,
      url: track.urls.high_mp3,
      id: track.id,
      duration: track.duration,
    },
  ];

  const setupPlayer = async () => {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.add(song);
  };

  const togglePlayback = async (playbackstate: any) => {
    const currenTrack = await TrackPlayer.getCurrentTrack();

    console.log(currenTrack, 'currenTrack');

    if (currenTrack !== null) {
      if (playbackstate === State.Paused || playbackstate === State.Ready) {
        await TrackPlayer.play();
      } else {
        await TrackPlayer.pause();
      }
    }
  };

  useEffect(() => {
    setupPlayer();
    return () => {
      TrackPlayer.destroy();
    };
  }, [track]);

  const onValuesChange = (values: any) => {
    TrackPlayer.seekTo(values);
  };

  console.log(track, 'track');

  return (
    <>
      <View style={styles.container}>
        <View
          style={{
            position: 'absolute',
            left: 30,
            top: 70,
          }}>
          <TouchableOpacity onPress={() => navigation.pop()}>
            <Icon name="ios-arrow-back" size={30} color="white" />
          </TouchableOpacity>
        </View>

        {/*  {track.urls.post_image.original === undefined ? (
          <Image
            source={{uri: track.channel.urls.logo_image.original}}
            style={styles.image}
            onError={() => {
              console.log('error');
            }}
          />
        ) : ( */}
        {/*  <Image
          source={{uri: track.urls.post_image.original!}}
          style={styles.image}
        /> */}
        {/*  )} */}

        <Text style={styles.title}>{track.title}</Text>

        <Slider
          style={{width: '80%', height: 100}}
          minimumValue={0}
          maximumValue={track.duration}
          minimumTrackTintColor="#FFF"
          maximumTrackTintColor="#FFF"
          thumbTintColor="#FFF"
          value={progress.position}
          tapToSeek={true}
          onValueChange={values => onValuesChange(values)}
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '80%',
          }}>
          <Text style={styles.duration}>{Math.round(progress.position)} s</Text>
          <Text style={styles.duration}>
            {Math.round(track.duration / 60)} min
          </Text>
        </View>

        <View style={styles.buttons}>
          <TouchableOpacity>
            <Icon name="play-back" size={50} color="white" />
          </TouchableOpacity>

          <TouchableOpacity>
            <Icon name="play-skip-back" size={50} color="white" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => togglePlayback(playbackState)}>
            {playbackState === State.Connecting ? (
              <ActivityIndicator size="large" color="white" />
            ) : playbackState === State.Ready ? (
              <Icon name="ios-play" size={50} color="white" />
            ) : playbackState === State.Paused ? (
              <Icon name="ios-play" size={50} color="white" />
            ) : (
              <Icon name="ios-pause" size={50} color="white" />
            )}
          </TouchableOpacity>

          <TouchableOpacity>
            <Icon name="play-skip-forward" size={50} color="white" />
          </TouchableOpacity>

          <TouchableOpacity>
            <Icon name="play-forward" size={50} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#13265C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginVertical: 20,
    marginHorizontal: 20,
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 20,
  },
  buttons: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  duration: {
    fontSize: 15,
    color: 'white',
  },
});

export default PlayerScreen;
