import React, { Component } from 'react';
import {View, Text, StyleSheet, StatusBar, Image} from 'react-native';


export default class  Logo extends Component{
    render(){
        return(
        <View>
            <Text>
                <Image
                    style={{width: 250, height: 150 }}
                    source={require('../../img/logo.png')}
                />
            </Text>
        </View>
            
        )
    }
}