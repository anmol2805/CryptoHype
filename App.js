import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';
import TweetsScreen from './TweetsScreen';
import IcoScreen from './IcoScreen';
import BookmarksScreen from './BookmarksScreen';


export default createMaterialTopTabNavigator({
  Home: {screen:HomeScreen,
      navigationOptions:{
        tabBarLabel:'Portfolio',
        tabBarIcon:({tintColor})=>(
          < Ionicons name ="ios-home" color={tintColor} size={22}/>
        )
      }
  },
  Settings: {screen:SettingsScreen,
      navigationOptions:{
        tabBarLabel:'Settings',
        tabBarIcon:({tintColor})=>(
          < Ionicons name ="ios-settings" color={tintColor} size={22}/>
        )
      }},
  TweetsScreen: {screen:TweetsScreen,
      navigationOptions:{
        tabBarLabel:'News',
        tabBarIcon:({tintColor})=>(
          < Ionicons name ="ios-home" color={tintColor} size={22}/>
        )
      }
  },
  IcoScreen: {screen:IcoScreen,
      navigationOptions:{
        tabBarLabel:'Ico news',
        tabBarIcon:({tintColor})=>(
          < Ionicons name ="ios-home" color={tintColor} size={22}/>
        )
      }
  },
  BookmarksScreen: {screen:BookmarksScreen,
      navigationOptions:{
        tabBarLabel:'Starred',
        tabBarIcon:({tintColor})=>(
          < Ionicons name ="ios-home" color={tintColor} size={22}/>
        )
      }
  },
},  {
    initialRouteName:'TweetsScreen',
    order:['Home','BookmarksScreen','TweetsScreen','IcoScreen','Settings'],
    swipeEnabled:false,
    tabBarPosition:"bottom",
    tabBarOptions: {
      activeTintColor: '#673AB7',
      inactiveTintColor: 'gray',
      labelStyle:{
          fontSize:7,
          lineHeight: 20,        
          fontFamily: "CircularStd-Book" 
      },
      tabStyle:{
          
      },
      style:{
        backgroundColor:'#f2f2f2',
        borderTopWidth:0.5,
        borderTopColor:'grey',
        height:60
      },
      indicatorStyle:{
        height:0
      },
      showIcon:true

    },
    
  });