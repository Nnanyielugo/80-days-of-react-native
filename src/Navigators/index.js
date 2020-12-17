import React, { Component, Fragment } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import StopWatch from '../Containers/StopWatch';
import MusicPlayer from '../Containers/MusicPlayer';
import Home from '../Containers/Home'

export default class App extends Component {
  render() {
    const Stack = createStackNavigator()
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="StopWatch" component={StopWatch} />
          <Stack.Screen name="MusicPlayer" component={MusicPlayer} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
