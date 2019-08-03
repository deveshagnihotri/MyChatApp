import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button, Image} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Logo from '../logo/Logo';
import Form from './Form';

export default class Login extends Component {

    signup(){
        Actions.signup()   //Actions.keys
    }
    
    render() {
        return (
            <View style={styles.Container}>
                <Logo style={styles.logoContainer}/>
                <Form type="Login"/>
                <View style={styles.viewContainer}>
                    <Text style={styles.textContainer}>don't have an account yet? </Text>
                    <TouchableOpacity
                        onPress={this.signup}
                    >
                        <Text style={styles.signupButton}>Signup</Text>
                    </TouchableOpacity>                   
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContainer:{
        marginTop: 300,
        // paddingTop: 250,
    },
    viewContainer:{
        flexGrow: 1,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
    },
    textContainer:{
        color:'#E0E0E0',
        fontSize:16,
    },
    signupButton:{
        color:'#2196F3',
        fontSize:16,
    }

});
