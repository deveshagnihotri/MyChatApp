import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image} from 'react-native';

export default class LoginForm extends Component {
    constructor(props){
        super(props)
        state = {
            email: '',
            password: '',
        }
    }

    onLoginPress(){
        alert('hello')
    }

    render() {
        return (
            <View style={styles.Container}>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={{uri: "https://img.icons8.com/color/48/000000/filled-message.png"}}/>
                    <TextInput style={styles.inputs}
                        placeholder="Email"
                        keyboardType="email-address"
                        backgroundColor='#E0E0E0' 
                        underlineColorAndroid='transparent'
                        onChangeText={(email) => this.setState({email})}
                        onSubmitEditing ={()=> this.password.focus()}
                    />
                </View>

                <View style={styles.inputContainer}>
                <Image style={styles.inputIcon} source={{uri: "https://img.icons8.com/color/48/000000/key-security.png"}}/>
                    <TextInput style={styles.inputs}
                        placeholder="Password"
                        underlineColorAndroid='transparent'
                        onChangeText={(password) => this.setState({password})}
                        backgroundColor='#E0E0E0' 
                        secureTextEntry={true}
                        ref={(input) => this.password = input}    
                    />
                </View>

                <TouchableOpacity
                    style={styles.loginButton}
                    onPress={this.onLoginPress}
                >
                   <Text style={styles.buttonText}>{this.props.type}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Container:{
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputs:{
        flex:1,
        width: 300,
        paddingHorizontal: 16,
        marginVertical: 10,
        height: 45,
        // marginLeft:16,
        // borderBottomColor: '#FFFFFF',
        borderRadius:30,
        fontSize: 16,
    },
    inputIcon:{
        width:30,
        height:30,
        marginLeft:15,
        justifyContent: 'center'
    },
    inputContainer:{
        backgroundColor: '#E0E0E0',
        borderColor: '#E0E0E0' ,
        borderRadius: 30,
        height: 45,
        width: 300,
        padding: 5,
        marginBottom:20,
        flexDirection:'row',
        alignItems:'center',
        borderBottomWidth:1,
    },
    
    buttonText: {
        color: 'black',
        fontWeight:'500',
        fontSize:16,
        backgroundColor: "#2196F3",
        textAlign:'center',
        borderRadius:25,
        width: 300,
        marginVertical: 10,
        paddingVertical: 12,
    }
});
