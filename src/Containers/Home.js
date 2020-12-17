import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


class MusicPlayer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home</Text>
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
