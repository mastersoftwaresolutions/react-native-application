import React, { Component } from 'react';
import {
 AppRegistry,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Icon,
  AsyncStorage,
  StatusBar,
  View
} from 'react-native';
import { COLOR, ThemeProvider, Toolbar } from 'react-native-material-ui';
import Container from '../Container';
import Dimensions from 'Dimensions';

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

export default class InfoView extends Component {
 constructor(props, context) {
    super(props, context);
 this.state = {
          SignedUpuser:' ',
          username:'',
          password :'',
          gender:'',
          selectedFruits:''
        };
  }
componentDidMount() {
        AsyncStorage.getItem("SignedUpuser").then((value) => {
            this.setState({"SignedUpuser": JSON.parse(value)});
            this.Loaddata();
        }).done();

    }


    componentWillUnmount() {
      }
     Loaddata() {
for(let i = 0; i < this.state.SignedUpuser.length; i++){
this.setState({'username' : this.state.SignedUpuser[i].name});
this.setState({'password' : this.state.SignedUpuser[i].password});
this.setState({'gender' : this.state.SignedUpuser[i].gender});
this.setState({'selectedFruits' : this.state.SignedUpuser[i].selectedFruits});
  }
  }
  render() {
    return (
      <ThemeProvider uiTheme={uiTheme}>
        <Container>
          <StatusBar backgroundColor="rgba(0, 0, 0, 0.2)" translucent />
          <Toolbar
            leftElement="close"
            onLeftElementPress={() => this.props.navigation.navigate('Home')}
            centerElement="Info"
          />
          <View style={styles.container}>
            <Image source={require('../images/lake.jpg')} style={styles.backgroundimage}>
                     <View style={styles.inputcontainer}>
                         <Text style={styles.saved} >
                         your name is : {this.state.username}</Text>
                         <Text style={styles.saved} >your password is :  {this.state.password}</Text>
                         <Text style={styles.saved} >your Gender is : {this.state.gender}</Text>
                        <Text style={styles.saved} > Fruits you like are :  {this.state.selectedFruits}
                         </Text>
                     </View>
                      </Image>
          </View>
        </Container>
      </ThemeProvider>
    );
  }
}
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
var styles = StyleSheet.create({
    container: {
       flex:1,
       alignSelf : 'stretch',
       width : null,
       justifyContent:'center',
    },backgroundimage:{
      flex:1,
      alignSelf : 'stretch',
      width : null,
      justifyContent:'center',
      },
    inputcontainer : {
    marginLeft:20,
    marginRight:20,
      	marginBottom:0,
      	paddingBottom:10,
      	borderWidth:1,
      	borderColor:'#fff',
      	backgroundColor:'rgba(225,225,225,0.2)',
      },
    saved: {
        fontSize: 20,
        textAlign: "left",
        margin: 10,
    },buttonContainer : {
        margin:20,
      	padding:20,
      	paddingBottom:10,
      	alignSelf : 'stretch',
      	borderWidth:1,
      	borderColor:'#fff',
      	backgroundColor:'rgba(225,225,225,0.2)',
      },
      buttonText : {
      fontSize:16,
      fontWeight:'bold',
      textAlign:'center',
      marginBottom:5,
      },
      header: {
          backgroundColor: '#455A64',
        },
});
