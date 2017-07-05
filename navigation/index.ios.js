import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { MainAppRouter } from './src/router'


export default class navigation extends Component {
  render() {
    return (
      <MainAppRouter  style={{ flex: 1 }}/>
    );
  }
}

AppRegistry.registerComponent('navigation', () => navigation);
