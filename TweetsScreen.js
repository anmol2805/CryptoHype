'use strict';

import React, { Component } from 'react'
import {
    StyleSheet,
    Image,
    View,
    TouchableHighlight,
    ActivityIndicator,
    FlatList,
    Text,
} from 'react-native';

export default class TweetsScreen extends React.Component {
    constructor() {
        super()
        this.state = {
            data: [],
            isLoading:true
        }
    }
    renderItem = ({ item }) => {
        return (
            <View style = {{flex:1,flexDirection:'row',marginBottom:'3'}}>
                <Image style = {{width:50,height:50,margin:5}}>
                    source = {{ uri: "https://twitter.com/" + item.coin_handle + "/profile_image?size=original" }}
                </Image>
                <View style = {{flex:1,justifyContent:'center'}}>
                    <Text>
                        {item.coin_name}
                    </Text>
                    <Text>
                        {item.tweet}
                    </Text>
                </View>

            </View>
        )

    }
    componentWillMount() {
        const url = 'https://www.cryptohype.live/tweets'
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    data: responseJson.tweets,
                    isLoading:false
                })
                console.log(responseJson.tweets)
            })
    }
    

    render() {
        return (
            this.state.isLoading
            ?
            <View style = {{flex:1,justifyContent:'center',alignItems:'center'}}>
                <ActivityIndicator size = "large" color="#673AB7" animating/>
            </View>
            :
            <View style={styles.container}>
                <FlatList>
                    data = {this.state.data}
                    keyExtractor = {(item, index) => index}
                    renderItem = {this.renderItem}
                    
                </FlatList>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        backgroundColor: '#F5FCFF',
    },
    thumb: {
        width: 80,
        height: 80,
        marginRight: 10
    },
    textContainer: {
        flex: 1
    },
    separator: {
        height: 1,
        backgroundColor: '#dddddd'
    },
    price: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#48BBEC'
    },
    title: {
        fontSize: 20,
        color: '#656565'
    },
    rowContainer: {
        flexDirection: 'row',
        padding: 10
    }
});