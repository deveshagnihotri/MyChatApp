import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import Login from '../login/Login';
import SignUp from '../signup/SignUp';

export default class Routes extends Component {
    render() {
        return (
            <Router>
                <Stack key="root" hideNavBar={true}>
                <Scene key="login" component={Login} title="Login" />
                <Scene key="signup" component={SignUp} title="SignUp" initial={true}/>
                </Stack>
            </Router>
        )
    }
}
