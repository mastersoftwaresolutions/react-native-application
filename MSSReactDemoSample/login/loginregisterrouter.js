import React from 'react';
import {StackNavigator } from 'react-navigation';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import NavigationContainer from './navigationContainer';
export const LoginStack = StackNavigator({
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      title: 'LoginScreen',
    }
  },
  RegisterScreen: {
    screen: RegisterScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'RegisterScreen',
    }),
  },NavigationContainer: {
        screen: NavigationContainer,
        navigationOptions: ({ navigation }) => ({
          title: 'NavigationContainer', header: null,
        }),
      },
});

