import 'react-native-gesture-handler';
import React, { Component } from 'react';

import Navigation from './Navigators'
import StopWatch from './Containers/StopWatch';
import MusicPlayer from './Containers/MusicPlayer';

export default class App extends Component {
  render() {
    return (
      <Navigation />
    );
  }
}
