import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  StatusBar,
  View
} from 'react-native';
import {EasyRNRoute,} from '../parent';
import {StackNavigator } from 'react-navigation';
export default class NavigationContainer extends Component {
  render(){
    return (
   <EasyRNRoute/>
    );
  }
}
