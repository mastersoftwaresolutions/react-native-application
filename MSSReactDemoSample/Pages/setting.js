import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  StatusBar,
  View,
  ScrollView
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { COLOR, ThemeProvider, Toolbar } from 'react-native-material-ui';
import Container from '../Container';

const uiTheme = {
  palette: {
    primaryColor: COLOR.green500,
    accentColor: COLOR.pink500,
  },
  toolbar: {
    container: {
      height: 70,
      paddingTop: 20,
    },
  },
};

export default class SettingsView extends Component {
  render() {
    return (
      <ThemeProvider uiTheme={uiTheme}>
        <Container>
          <StatusBar backgroundColor="rgba(0, 0, 0, 0.2)" translucent />
          <Toolbar
            leftElement="close"
            onLeftElementPress={() => this.props.navigation.navigate('Home')}
            centerElement="Settings"
          />
            <ScrollView>
                    <List>
                      <ListItem
                        title="Anything you want to display as setting item"
                      />
                    </List>

                  </ScrollView>
        </Container>
      </ThemeProvider>
    );
  }
}

const styles = StyleSheet.create({

  header: {
    backgroundColor: '#455A64',
  }

});