import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Controls extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{color: 'white'}}>Controls</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

export default Controls;
