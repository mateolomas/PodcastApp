import React from 'react';
import {Text, Touchable, View, TouchableOpacity} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/NativeStackNavigator';
import TrackPlayer, {
  Capability,
  Event,
  RepeatMode,
  State,
  usePlaybackState,
  useTrackPlayerEvents,
  useProgress,
} from 'react-native-track-player';
import {useEffect} from 'react';

interface Props
  extends NativeStackScreenProps<RootStackParamList, 'PlayerScreen'> {}

const PlayerScreen = ({route, navigation}: Props) => {
  const track = route.params;
  const playbackState = usePlaybackState();

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

  console.log(JSON.stringify(song, null, 2), 'track-song');

  const setupPlayer = async () => {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.add(song);
  };

  const togglePlayback = async (playbackState: any) => {
    const currenTrack = await TrackPlayer.getCurrentTrack();

    console.log(currenTrack, 'currenTrack');

    if (currenTrack !== null) {
      if (playbackState === State.Paused) {
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

  return (
    <View>
      <Text>PlayerScreen</Text>
      <TouchableOpacity onPress={() => togglePlayback(playbackState)}>
        <Text>{playbackState === State.Playing ? 'Pause' : 'Play'}</Text>
      </TouchableOpacity>
      <Text>{JSON.stringify(playbackState)}</Text>
    </View>
  );
};

export default PlayerScreen;
