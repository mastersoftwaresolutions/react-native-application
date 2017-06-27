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
  StatusBar,
  Icon
} from 'react-native';
import usernameImg from '../images/username.png';
import passwordImg from '../images/password.png';
import eyeImg  from '../images/eye_black.png';
import Dimensions from 'Dimensions';
import RegisterScreen from './RegisterScreen';
export default class LoginScreen extends Component {

constructor(props){
super(props);

 this.state = {
            showPass: true,
 			press: false,
			username :'',
			password:''
		};
this.showPass = this.showPass.bind(this);
}

componentDidMount() {
        AsyncStorage.getItem("SignedUpuser").then((value) => {
            this.setState({"SignedUpuser": JSON.parse(value)});
        }).done();

    }

componentWillUnmount() {
  }

handleBack() {
  this.exitApp(); //close the app
}

showPass = () =>  {
  this.state.press === false ? this.setState({ showPass: false, press: true }) :this.setState({ showPass: true, press: false });
  }

goToRegisterScreen = () => {
this.props.navigation.navigate('RegisterScreen');
}

login = () => {
if(!this.state.username){
alert('please enter username');
}else if (!this.state.password){
alert('please enter password');
}else{
if(this.state.SignedUpuser!=null){
if(this.state.SignedUpuser.length > 0){
var user='';
var pass='';

for(let i = 0; i < this.state.SignedUpuser.length; i++){
    user =  this.state.SignedUpuser[i].name;
    pass =  this.state.SignedUpuser[i].password;
      }
      if(this.state.username == user && this.state.password == pass){
      this.props.navigation.navigate('NavigationContainer');
      }else{
      this.setState({'username' : ''});
      this.setState({'password' : ''});
      alert('Please signUp first');
      }
      }
}else{
this.setState({'username' : ''});
this.setState({'password' : ''});
 alert('Please signUp first');
}
}
}
render() {
    return (
        <View style={styles.container}>
        <StatusBar hidden />
            <Image source={require('../images/wallpaper.png')} style={styles.backgroundimage}>
                <View style={styles.content}>
                    <Image source={require('../images/logo.png')} style={styles.logo}>
                    </Image>
                    <View style={styles.inputcontainer}>
                    <View style={styles.inputWrapper}>
                    <Image source={usernameImg}
                    					style={styles.inlineImg}/>
                        <TextInput
                        style={styles.input}
                        underlineColorAndroid="transparent"
                        value={this.state.username}
                        onChangeText={(text) => this.setState({ username: text })}
                        placeholderText='username'/>
                        </View>
                        <View style={styles.inputWrapper}>

                      <Image source={passwordImg}
                    					style={styles.inlineImg}/>
                        <TextInput
                        secureTextEntry={this.state.showPass}
                        style={styles.input}
                        underlineColorAndroid="transparent"
                        value={this.state.password}
                        onChangeText={(text) => this.setState({ password:text })}
                        placeholderText='password'
                        placeholderTextColor='black'/>
                        <TouchableOpacity
                        						activeOpacity={0.7}
                        						style={styles.btnEye}
                        						onPress={() => {this.showPass()}}
                        					>
                        						<Image source={eyeImg} style={styles.iconEye} />
                        					</TouchableOpacity>
                    </View>
                    </View>
                    <TouchableOpacity onPress={() => {this.login()}} style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>LOGIN</Text>
                    </TouchableOpacity>

                     <TouchableOpacity onPress={() => {this.goToRegisterScreen()}} style={styles.buttonContainer}>
                                            <Text style={styles.buttonText}>Register Screen</Text>
                                        </TouchableOpacity>
                </View>
            </Image>
        </View>
    );
}
}
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const styles = StyleSheet.create({
container:{
flex:1,
},
backgroundimage:{
flex:1,
alignSelf : 'stretch',
width : null,
justifyContent:'center',
},
content: {
alignItems :'center',
},
logo : {
width: 80,
height: 80,
},
inputcontainer : {
	margin:20,
	marginBottom:0,
	padding:20,
	paddingBottom:10,
	alignSelf : 'stretch',
	borderWidth:1,
	borderColor:'#fff',
	backgroundColor:'rgba(225,225,225,0.2)',
},
input:{
	fontSize :16,
    height:40,
	padding:10,
	marginBottom:10,
	paddingLeft:35,
	borderRadius: 20,
	color: '#ffffff',
	backgroundColor: 'rgba(255, 255, 255, 0.4)',

},
buttonContainer : {
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
  	inlineImg: {
  		position: 'absolute',
  		zIndex: 99,
  		width: 22,
  		height: 22,
  		left: 30,
  		top: 28,
  	},inputWrapper: {
      		height:100,
      		alignSelf : 'stretch',
      		padding:20,
      	},
          	btnEye: {
              position: 'absolute',
              top: 28,
              right: 28,
            },
            iconEye: {
              width: 25,
              height: 25,
              tintColor: 'rgba(0,0,0,0.2)',
            },
});
