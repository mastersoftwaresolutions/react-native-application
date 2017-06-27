import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  StatusBar,
  View
} from 'react-native';
import App from './app';
import DrawerMenu from './Drawer/drawer-toolbar-android';
import BookmarkView from './Pages/bookmark';
import ClientView from './Pages/client';
import InfoView from './Pages/info';
import SettingsView from './Pages/setting';
import { DrawerNavigator, StackNavigator } from 'react-navigation';

export const stackNavigator = StackNavigator({
  Info: { screen: InfoView },
  Settings: {screen: SettingsView },
  Bookmark: {screen: BookmarkView },
  Connections: {screen: ClientView},
}, {
  headerMode: 'none'
});

export const EasyRNRoute = DrawerNavigator({
  Home: {
    screen: App,
  },
  Stack: {
    screen: stackNavigator
  }
}, {
  contentComponent: DrawerMenu,
  contentOptions: {
    activeTintColor: '#e91e63',
    style: {
      flex: 1,
      paddingTop: 15,
    }
  }
});