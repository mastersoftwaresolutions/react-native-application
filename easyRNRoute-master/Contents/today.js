import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';
import {FeedStack} from './movielistdeatilrouter';

export default class TodayView extends Component {
 constructor(props , context) {
      super(props , context);
    }
   render() {
   		return (
<FeedStack />
   		);
   	}






 }

