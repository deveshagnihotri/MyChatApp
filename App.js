import React, { Component } from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';

//Redux
import {Provider} from "react-redux";
import persist from "./src/components/config/store";
import Routes from './src/components/routes/Routes';
import Main from './src/Main';
import { PersistGate } from 'redux-persist/integration/react';
import Login from './src/components/login/Login'

const persistStore = persist();

export default class App extends Component {

  render() {
    return (
      <Provider store={persistStore.store}>
          <PersistGate loading={null} persistor={persistStore.persistor}>
            <Main />
          </PersistGate>
      </Provider>     
    );
  }
}




