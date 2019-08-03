import React, { Component } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, StatusBar} from 'react-native';

import { Actions } from 'react-native-router-flux';
import Routes from '../src/components/routes/Routes';
import {connect} from "react-redux";

class Main extends Component {
    render() {
        return (
            <View style={styles.appContainer}>
                <StatusBar
                    // backgroundColor= "#283593"
                    barStyle= "light-content"
                />
                <Routes/>          
            </View>        
        )
    }
}

const styles = StyleSheet.create({
    appContainer:{
        flex: 1,
        // backgroundColor: '#212121',
        
    },
});

export default connect(null,null)(Main)
