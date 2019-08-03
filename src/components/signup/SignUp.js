import React, { Component } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Logo from '../logo/Logo';
import Form from '../login/Form';
import { Actions } from 'react-native-router-flux';
// import SignUpForm from './SignUpForm';
import InputText from "./InputText";
import { Field, reduxForm } from 'redux-form';
import { connect } from "react-redux";
import {compose} from "redux";
import {createNewUser} from "../actions/auth.action";

const styles = StyleSheet.create({
    Container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContainer:{
        marginTop: 250,
        // paddingTop: 250,
    },
    textContainer:{
        color:'#E0E0E0',
        fontSize:16,
    },
    signupButton:{
        color:'#2196F3',
        fontSize:16,
    },
    viewContainer:{
        flexGrow: 1,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
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
    inputIcon:{
        width:30,
        height:30,
        marginLeft:15,
        justifyContent: 'center'
    },
    textContainer:{
        color:'#E0E0E0',
        fontSize:16,
    },
    signupButton:{
        color:'#2196F3',
        fontSize:16,
    },
    buttonText: {
        fontSize:16,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:'center'
    },
    button: {
        width:300,
        backgroundColor:'#1c313a',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13
    },
    errorText:{
        color: '#2196F3',
        fontSize:14,
    },
});

class SignUp extends Component {

    signin(){
        Actions.login()
    }
    
    createNewUser=(values)=>{
        this.props.dispatch(createNewUser(values))
    }

    onSubmit= (values)=>{
        this.createNewUser(values);
    }

    renderTextInput = (field) =>{
        const {meta:{touched, error}, label, maxlength, keyboardType,secureTextEntry, placeholder,input:{onchange, ...restInput}} =field;
        return(
            <View>
                <InputText 
                    onChangeText={onchange}
                    maxlength={maxlength}
                    placeholder={placeholder}
                    keyboardType={keyboardType}
                    secureTextEntry={secureTextEntry}
                    label={label}
                    {...restInput}
                />
                {(touched && error) && <Text style={styles.errorText}>{error}</Text>}
            </View>
        )
    }
    render() {
        const { handleSubmit } = this.props;

        return (
            <View style={styles.Container}>
                <Logo style={styles.logoContainer}/>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={{uri: "https://img.icons8.com/dusk/64/000000/user.png"}}/>
                    <Field style={styles.inputs}
                        name="name"
                        placeholder="Name"
                        component={this.renderTextInput}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={{uri: "https://img.icons8.com/color/48/000000/filled-message.png"}}/>
                    <Field 
                        name="email"
                        placeholder="Email"
                        component={this.renderTextInput}
                    />
                </View>   
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={{uri: "https://img.icons8.com/color/48/000000/key-security.png"}}/>
                    <Field 
                        name="password"
                        placeholder="Password"
                        secureTextEntry={true}
                        component={this.renderTextInput}
                    /> 
                </View>

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleSubmit(this.onSubmit)}
                >
                   <Text style={styles.buttonText}>SignUp</Text>
                </TouchableOpacity>  

                <View style={styles.viewContainer}>
                    <Text style={styles.textContainer}>Already have an account </Text>
                        <TouchableOpacity
                            onPress={this.signin}
                        >
                        <Text style={styles.signupButton}>SignIn</Text>
                    </TouchableOpacity>                      
                </View>
            </View>
        )
    }
}

const validate = (values)=> {
    const errors = {};
    if(!values.name){
        errors.name = "Name is Required"
    }
    if(!values.email){
        errors.email="Email is required"
    }
    if(!values.password){
        errors.password ="Password is required"
    }
    return errors;
};

mapDispatchedToProps = (dispatch) =>({
    dispatch
})

export default compose(
    connect(null, null),
    reduxForm({
        // a unique name for the form
        form: 'register',
        validate
    })
)(SignUp);

  