import React, { Component } from 'react';
import { ScrollView ,AsyncStorage} from 'react-native';
import { List, ListItem } from 'react-native-elements';
class Settings extends Component {


 signout = () => {
 AsyncStorage.setItem('SignedUpuser', '');
 Alert('You have been logout');
  };


  render() {
    return (
      <ScrollView>
        <List>
          <ListItem
            title="This is dummy screen you can add contents and options as per your requirement"
          />
        </List>
      </ScrollView>
    );
  }
}

export default Settings;
