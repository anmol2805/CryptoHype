/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {createMaterialBottomTabnavigator} from 'react-navigation-material-bottom-tabs';
import {Icon} from 'react-native-vector-icons/Ionicons'
import {createMaterialTopTabnavigator} from 'react-navigation';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
type Props = {};
export default class App extends Component<Props>{
  render(){
      <SafeAreaView style = {{flex:1,backgroundColor:'#f2f2f2'}}>
          <AppTabNavigator/>
      </SafeAreaView>
  }

}
class HomeScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}
class SettingsScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}
class TweetsScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}
class BookmarksScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}
class IcoScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}
const AppTabNavigator =  createMaterialTopTabnavigator({
  Home:{screen: HomeScreen,
      navigationOptions:{
        tabBarLabel:'Home',
        tabBarIcon:({tintColor})=>(
          <Icon name="ios-home" color={tintColor} size={24} />
        )

      }
    },
  Settings:{screen: SettingsScreen,
      navigationOptions:{
        tabBarLabel:'Settings',
        tabBarIcon:({tintColor})=>(
          <Icon name="ios-settings" color={tintColor} size={24} />
        )

      }
    },
    Bookmarks:{screen: BookmarksScreen,
      navigationOptions:{
        tabBarLabel:'Bookmarks',
        tabBarIcon:({tintColor})=>(
          <Icon name="ios-bookmarks" color={tintColor} size={24} />
        )

      }
    },
    Tweets:{screen: TweetsScreen,
      navigationOptions:{
        tabBarLabel:'Dashboard',
        tabBarIcon:({tintColor})=>(
          <Icon name="ios-dashboard" color={tintColor} size={24} />
        )

      }
    },
    Icos:{screen: IcoScreen,
      navigationOptions:{
        tabBarLabel:'Ico',
        tabBarIcon:({tintColor})=>(
          <Icon name="ios-home" color={tintColor} size={24} />
        )

      }
    } 
},{
    initialRouteName:'Tweets',
    order:['Home','Bookmarks','Tweets','Icos','Settings'],
    tabBarPosition:'bottom',
    swipeEnabled:false,
    tabBarOptions:{
      activeTintColor:'#673AB7',
      inactiveTintColor:'grey',
      style:{
        backgroundColor:'#f2f2f2',
        borderTopColor:'grey',
        borderTopWidth:'0.5'
      },
      indicatorStyle:{
        height:0
      },
      showIcon:true
    },
})
const styles = StyleSheet.create({
  container: {
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
