import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../Components/MusicPlayer/Header';
import AlbumArt from '../Components/MusicPlayer/AlbumArt';
import TrackDetails from '../Components/MusicPlayer/TrackDetails';
import SeekBar from '../Components/MusicPlayer/SeekBar';
import Controls from '../Components/MusicPlayer/Controls';

class MusicPlayer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <AlbumArt />
        <SeekBar />
        <TrackDetails />
        <Controls />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

export default MusicPlayer;
