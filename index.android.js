/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'

import {
  AppRegistry,
  StyleSheet,
  Switch,
  StatusBar,
  Text,
  View,
  TouchableHighlight,
  NativeAppEventEmitter,
  Platform,
  PermissionsAndroid
} from 'react-native';
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import BleManager from 'react-native-ble-manager'

import puckApp from './reducers'
import { global } from './mainStyles'
import { Header } from './components/header'
import { Batery } from './components/batteryStatus'
import { Temperature } from './components/temperature'
import { Switches } from './components/switches'

const store = createStore(puckApp)

const mapStateToProps = (state) => {
  return {}
}

let App = (props) => (
  <View>
    <Header/>
    <View style={global.content}>
      <View>
        <Batery/>
        <Temperature/>
        <Switches/>
      </View>
    </View>
  </View>
)

App = connect(mapStateToProps)(App)

export default class AwesomeProject extends Component {
  render() {
    return (
      <Provider store={store}>
        <App></App>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
