import React,{Component} from 'react';
import {
    View,
    Text,
} from 'react-native';


class Chat extends Component{
    render(){
        return(
            <View>
                <Text>
                    Hello{this.props.name}
                </Text>
            </View>
        )
    }
}


export default Chat;