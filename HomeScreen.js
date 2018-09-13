'use strict';

import React, { Component } from 'react'
import {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  FlatList,
  Text,
} from 'react-native';

export default class HomeScreen extends React.Component {
    state = {
        data:[]
    };
    componentWillMount(){
        this.fetchData();
    }
    fetchData = async() => {
        const response = await fetch("https://www.cryptohype.live/coins");
        const json = await response.json();
        this.setState({data:json});        
    }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
            data = {this.state.data}
            keyExtractor = {(item,index)=>index}
            renderItem = {({item})=>
                <Text>
                    {item.coin_name}
                </Text>
            }
        />
      </View>
    );
  }
}
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