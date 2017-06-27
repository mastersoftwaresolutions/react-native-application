import React, { Component } from 'react';
import { StatusBar } from 'react-native'
import { StackNavigator } from 'react-navigation';
import { NavigationActions } from 'react-navigation';
import { Actions, ActionConst } from 'react-native-router-flux';
import home  from '../images/home.png';
import MovieDeatilScreen from './MovieDeatilScreen'
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
import {
  StyleSheet,
  Text,
  Image,
  View,
  AsyncStorage,
  TouchableOpacity,
  TouchableHighlight,
  Dimensions,
  ListView
} from 'react-native';
const uri = 'http://csswrap.com/wp-content/uploads/2015/03/showmenu.png';
export default class Movielisting extends Component {

 constructor(props) {
     super(props);
     var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
     this.state = {
       moviesData: ds.cloneWithRows([]),
     };
   }

   componentDidMount() {
       this.fetchMoviesData();
     }
      fetchMoviesData() {
          var url = 'http://api.themoviedb.org/3/movie/now_playing?api_key=17e62b78e65bd6b35f038505c1eec409';
          fetch(url)
            .then(response => response.json())
            .then(jsonData => {
              this.setState({
                moviesData: this.state.moviesData.cloneWithRows(jsonData.results),

              });
            })
          .catch( error => console.log('Error fetching: ' + error) );
        }
  render() {
  		return (
  				<View style={styles.container}>
  					<ListView
  					  dataSource={this.state.moviesData}
                            renderRow={this.renderRow.bind(this)}
                            enableEmptySections={true}
                             style={styles.ListViewcontainer}
                          />
                    </View>
  		);
  	}
  	renderRow(rowData){
            return (
              <View style={styles.thumb} >
              <TouchableOpacity  onPress={()=>this.goDeatilPage(rowData)}>
                <Image
                  source={{uri:'https://image.tmdb.org/t/p/w500_and_h281_bestv2/'+rowData.poster_path}}
                  resizeMode="cover"
                  style={styles.img} />
                  <Text style={styles.txt}>{rowData.title} (Rating: {Math.round( rowData.vote_average * 10 ) / 10})</Text>
              </TouchableOpacity>
              </View>

            );
          }
goDeatilPage = (rowData) => {
   AsyncStorage.setItem('moviesData', JSON.stringify(rowData));
       this.props.navigation.navigate('MovieDeatilScreen');
     }
}
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
                                         marginTop:50,
                                          bottom: 50,
                                        }
});


