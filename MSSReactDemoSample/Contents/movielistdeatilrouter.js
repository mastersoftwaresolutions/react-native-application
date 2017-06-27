import React from 'react';
import {StackNavigator } from 'react-navigation';
import MovieDeatilScreen from './MovieDeatilScreen';
import Movielisting from './movielisting';
export const FeedStack = StackNavigator({
  Movielisting: {
    screen: Movielisting,
    navigationOptions: {
      title: 'Movielisting',
    },
  },
  MovieDeatilScreen: {
    screen: MovieDeatilScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'MovieDeatilScreen',
    }),
  },
});

