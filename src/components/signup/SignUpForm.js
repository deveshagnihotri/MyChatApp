import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput,TouchableOpacity  } from "react-native";

export default class SignUpForm extends Component {
    constructor(props){
        super(props);
        this.setState = {
            UserName: '',
            Email:'',
            Password:'',
            phone:'',
        }
    }
    handleSubmit (){
        alert('hello')
        
    }

    render() {
        return (
            <View style={styles.Container}>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={{uri: "https://img.icons8.com/dusk/64/000000/user.png"}}/>
                    <TextInput style={styles.inputs}
                        name="user_name"
                        placeholder="UserName"
                        keyboardType="default"
                        backgroundColor='#E0E0E0' 
                        underlineColorAndroid='transparent'
                        onChangeText={(email) => this.setState({email})}
                    />
                </View>
                
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={{uri: "https://img.icons8.com/color/48/000000/filled-message.png"}}/>
                    <TextInput style={styles.inputs}
                        name="user_email"
                        placeholder="Email"
                        keyboardType="email-address"
                        backgroundColor='#E0E0E0' 
                        underlineColorAndroid='transparent'
                        onChangeText={(email) => this.setState({email})}
                    />
                </View>

                <View style={styles.inputContainer}>
                <Image style={styles.inputIcon} source={{uri: "https://img.icons8.com/color/48/000000/key-security.png"}}/>
                    <TextInput style={styles.inputs}
                        name="user_password"
                        placeholder="Password"
                        secureTextEntry={true}
                        underlineColorAndroid='transparent'
                        onChangeText={(password) => this.setState({password})}
                        backgroundColor='#E0E0E0'     
                    />
                </View>

                <View style={styles.inputContainer}>
                <Image style={styles.inputIcon} source={{uri: "https://img.icons8.com/cute-clipart/64/000000/phone.png"}}/>
                    <TextInput style={styles.inputs}
                        name="user_contact"
                        placeholder="phone-number"
                        keyboardType="numeric"
                        maxLength={10}
                        underlineColorAndroid='transparent'
                        backgroundColor='#E0E0E0'     
                    />
                </View>

                <TouchableOpacity
                    style={styles.loginButton}
                    onPress={this.handleSubmit}
                >
                   <Text style={styles.buttonText}>SignUp</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:200,
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
        // justifyContent:'center',
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
