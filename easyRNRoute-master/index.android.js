import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  StatusBar,
  View
} from 'react-native';
import {LoginStack} from './login/loginregisterrouter';
import {StackNavigator } from 'react-navigation';
class reactNavigationSample extends Component {
  render(){
    return (
   <LoginStack/>
    );
  }
}
AppRegistry.registerComponent('flightbot', () => reactNavigationSample);
