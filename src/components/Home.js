import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

class Home extends Component{
    state = {
        name: '',
    };
    
    render(){
        return(
            <View style = {styles.appContainer}>
                <Text style = {styles.headerContainer}>
                    My ChatApp
                </Text>
                <Text style = {styles.homeContainer}>
                    Enter Your Name here:
                </Text>
                <TextInput style = {styles.inputContainer}
                    placeholder = 'Enter your name'
                    onChangeText={(text)=>{
                        this.setState({
                            name: text
                        })
                    }}
                    value ={this.state.name}
                />
                <TouchableOpacity>               
                    <Button style={styles.buttonText}
                        title ='Next'
                        onPress = {()=>{
                            Actions.Chat({
                                name: this.state.name
                            })
                        }}   
                    />
                </TouchableOpacity>
            </View>
        )
    }
}

export default Home;


const styles = StyleSheet.create({
    appContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',     
    },
    headerContainer:{
        fontSize: 40,
        //textAlign: 'center',
    },
    homeContainer:{
      marginTop:20,
      fontSize: 20,
      padding: 2,
      //textAlign: 'center',
      color: 'dodgerblue',
    },
    inputContainer:{
        height: 40,
        width: 250,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 10,
        margin: 30,
        padding: 5
    },
    buttonText:{
        //alignItems: 'center',
        //justifyContent:'center',
        //backgroundColor: 'dodgerblue',
        //textAlign: 'center'

    }
  })