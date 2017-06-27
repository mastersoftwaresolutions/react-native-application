import React, { Component, PropTypes } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Icon,
  StatusBar,
  AsyncStorage,
  ScrollView
} from 'react-native';
import usernameImg from '../images/username.png';
import passwordImg from '../images/password.png';
import eyeImg  from '../images/eye_black.png';
import Dimensions from 'Dimensions';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'
import SelectMultiple from 'react-native-select-multiple'
const fruits = ['Apples', 'Oranges', 'Pears']
import LoginScreen from './LoginScreen';
export default class RegisterScreen extends Component {

constructor(props){
super(props);


 this.state = {
			username :'',
			password:'',
			confirmpassword:'',
			text:'',
			selectedFruits: []

		};
this.onSelect = this.onSelect.bind(this)
}

onSelectionsChange = (selectedFruits) => {
    this.setState({ selectedFruits })
  }

onSelect(index,value){
        this.setState({
        text: `${value}`
        })
    }


  Submit = () => {

var fruitArray=[];
  for(let i = 0; i < this.state.selectedFruits.length; i++){

fruitArray.push(this.state.selectedFruits[i].value);

  }
  const data = [
  {
      name: this.state.username,
      password: this.state.password,
      confirmpassword: this.state.confirmpassword,
      gender: this.state.text,
      selectedFruits: fruitArray
  }
  ];
try {
  AsyncStorage.setItem('SignedUpuser', JSON.stringify(data));
} catch (error) {
  // Error saving data
}
if(!this.state.username){
alert('please enter username');
}else if (!this.state.password){
alert('please enter password');
}else if(!this.state.text){
alert('please select your gender');
}else if (this.state.password!=this.state.confirmpassword){
alert('Please enter password/confirm-password same');
}else{
this.props.navigation.navigate('LoginScreen');
}
}

render() {
    return (
        <View style={styles.container}>
        <StatusBar hidden />
            <Image source={require('../images/login.jpg')} style={styles.backgroundimage}>
                <View style={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false}>
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
                    </View>


                    <View style={styles.inputWrapper}>

                                          <Image source={passwordImg}
                                        					style={styles.inlineImg}/>
                                            <TextInput
                                            secureTextEntry={this.state.showPass}
                                            style={styles.input}
                                            underlineColorAndroid="transparent"
                                            value={this.state.confirmpassword}
                                            onChangeText={(text) => this.setState({ confirmpassword:text })}
                                            placeholderText='Confirm Password'
                                            placeholderTextColor='black'/>
                                        </View>



                                      <View style={styles.Radiocontainer}>
                     <Text style={styles.text}> Select your Gender :</Text>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value)} >
                    <RadioButton value={'male'} >
                        <Text>Male</Text>
                    </RadioButton>

                    <RadioButton value={'female'}>
                        <Text>Female</Text>
                    </RadioButton>

                </RadioGroup>

                <Text style={styles.text}>{this.state.text}</Text>
            </View>
<View style={styles.MultiSelectcontainer}>
<Text style={styles.text}> Select your fav. fruits :</Text>
        <SelectMultiple style={styles.MultiSelect}
          items={fruits}
          selectedItems={this.state.selectedFruits}
          onSelectionsChange={this.onSelectionsChange} />
      </View>


                    </View>


                     <TouchableOpacity onPress={() => {this.Submit()}} style={styles.buttonContainer}>
                                                                <Text style={styles.buttonText}>Submit</Text>
                                                            </TouchableOpacity>

</ScrollView>
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
alignSelf :'center',
},
inputcontainer : {
	marginBottom:0,
	padding:20,
	paddingBottom:10,
	alignSelf : 'stretch',
	width : DEVICE_WIDTH - 20 ,
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
            Radiocontainer:{
            flexDirection: 'column',
            marginTop: 2,
                    padding: 20,
                },
                text: {
                    padding: 10,
                    fontSize: 14,
                },MultiSelectcontainer:{
                            marginTop: 2,
                                    padding: 20,
                                   backgroundColor:'transparent',
                },MultiSelect:{
                backgroundColor:'transparent',
                }
});