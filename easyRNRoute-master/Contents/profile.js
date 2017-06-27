import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  StatusBar,
  View
} from 'react-native';
import { Root, Tabs } from './config/router';
export default class ProfileView extends Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
     <Root />
    );
  }
}