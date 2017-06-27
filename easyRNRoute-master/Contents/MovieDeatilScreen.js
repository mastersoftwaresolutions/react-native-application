import React, { Component, PropTypes } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  AsyncStorage,
  Icon
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { NavigationActions } from 'react-navigation';
import Dimensions from 'Dimensions';
const uri = 'http://csswrap.com/wp-content/uploads/2015/03/showmenu.png';
export default class MovieDeatilScreen extends Component {

constructor(props){
super(props);
 this.state = {
moviesData:''
		};
}

componentDidMount() {
        AsyncStorage.getItem("moviesData").then((value) => {
            this.setState({"moviesData": JSON.parse(value)});
//            this.Loaddata();
        }).done();

    }


//   Loaddata() {
//  for(let i = 0; i < this.state.moviesData.length; i++){
//
//  this.setState({'username' : this.state.SignedUpuser[i].name});
//
//    }
//    }

render() {
    return (
    <View style={styles.container}>

 <View style={styles.thumb}>
            <Image
              source={{uri:'https://image.tmdb.org/t/p/w500_and_h281_bestv2/'+this.state.moviesData.poster_path}}
              resizeMode="cover"
              style={styles.img} />
              <Text style={styles.txt}>{this.state.moviesData.title} (Rating: {Math.round( this.state.moviesData.vote_average * 10 ) / 10})</Text>
          </View>

          </View>
    );
}
}
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const styles = StyleSheet.create({
container: {
  position:'relative',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
          footer: {
            position: 'absolute',
            flex:0.1,
            left: 0,
            right: 0,
            bottom: -12,
            flexDirection:'row',
            height:70,
            alignItems:'center',
          },
                navBar: {
                 position: 'absolute',
                 flexDirection: 'row',
                 top:0,
                 right:0,
                 left:0,
                   paddingTop:15,
                    height: 64,
                    backgroundColor: '#1EAAF1'
                  },
                      navBarHeader: {
                      flex: 1,
                      left:30,
                       paddingTop:5,
                      top:2,
                        color: '#FFFFFF',
                        fontWeight: 'bold',
                        textAlign: 'left',
                      },avatar: {
                      left:10,
                                bottom:3,
                               width: 35,
                               height: 35,
                              },action: {
                                        flex: 0.4,
                                    },thumb: {
                                          backgroundColor: '#ffffff',
                                          marginBottom: 5,
                                          elevation: 1
                                        },
                                        img: {
                                          height: 300
                                        },
                                        txt: {
                                          margin: 10,
                                          fontSize: 16,
                                          textAlign: 'left'
                                        },ListViewcontainer:{
                                         marginTop:110,
                                          bottom: 50,
                                        }
});