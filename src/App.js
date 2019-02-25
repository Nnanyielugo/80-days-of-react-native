import React, { Component, Fragment } from 'react';

import StopWatch from './Containers/StopWatch';
import MusicPlayer from './Containers/MusicPlayer';

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <MusicPlayer />
      </Fragment>
    );
  }
}
