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
  Button
} from 'react-native';
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import { BleManager }  from 'react-native-ble-plx'

import puckApp from './reducers'
import { global } from './mainStyles'
import { Header } from './components/header'
import { Batery } from './components/batteryStatus'
import { Temperature } from './components/temperature'
import { Switches } from './components/switches'
import { DeviceInfo } from './components/deviceInfo'

const store = createStore(puckApp)

const mapStateToProps = (state) => {
  return {
    device: state.handleDevice.device
  }
}

const mapDispatchToProps = dispatch => ({
  actions: {
    setDiscoveredDevice: (data) => dispatch({ type: 'bleFound', value: data }),
    setTemperature: (temperature) => dispatch({type: 'temperature', value: temperature}),
    setBatteryStatus: (status) => dispatch({type: 'battery', value: status})
  }
})

const interpreter = {
  uuid: '6e400001-b5a3-f393-e0a9-e50e24dcca9e',
  write: '6e400002-b5a3-f393-e0a9-e50e24dcca9e',
  read: '6e400003-b5a3-f393-e0a9-e50e24dcca9e'
}

class AppComponent extends Component {
  constructor() {
    super()
    this.manager = new BleManager()
    this.scanAndConnect = this.scanAndConnect.bind(this)
  }

  componentDidMount() {
    this.scanAndConnect()
  }

  componentWillUnmount() {
    this.manager.cancelDeviceConnection('Puck.js 8b44')
    this.manager.destroy()
  }

  write (cmd, device, interpreter) {
    return new Promise((resolve, reject) => {

    this.manager.characteristicsForDevice(device.id, interpreter.uuid)
      .then(characteristics => {
        
        characteristics[0].monitor((err, resp) => {
          var value = atob(resp.value)
          var match = value.match(/^\=(?:(.*))$/m)
          if(!match) return
          if (err) {
            reject(err)
          } else {
            resolve(match[1])
          }
        })

        this.manager.writeCharacteristicWithoutResponseForDevice(
          device.id,
          interpreter.uuid,
          interpreter.write,
          btoa(cmd + ';\n')
        )
      })
    })
  }

  scanAndConnect(){
    console.log('Scan started')
      this.manager.startDeviceScan(null, null, (error, device) => {
          if (error) {
              // Handle error (scanning will be stopped automatically)
              return
          }

          // Check if it is a device you are looking for based on advertisement data
          // or other criteria.
          if (device.name === 'Puck.js 8b44') {
          // if (device.name === 'Puck.js 1c34') {

              // Stop scanning as it's not necessary if you are scanning for one device.
              this.manager.stopDeviceScan()

              device.connect()
                .then((device) => {
                  console.log('Scan finished')
                  this.props.actions.setDiscoveredDevice(device)

                  this.write('E.getTemperature()', device, interpreter)
                    .then((temperature) => {
                      this.props.actions.setTemperature(temperature + '°C')

                      return this.write('battery()', device, interpreter)
                        .then((batteryStatus) => {
                          this.props.actions.setBatteryStatus(batteryStatus + '%')
                        })
                        .catch((err) =>{
                          console.log('Error getting battery status: ',err)
                        })
                    })
                    .catch((err) =>{
                      console.log('Error getting temperature: ',err)
                    })

                })
                .catch((error) => {
                    console.log('Unable to connect: ', error)
                });
          }
      });
  }

  render() {
    return (
      <View>
        <Header/>
        <DeviceInfo/>
        <View style={global.content}>
          <View>
            <Batery/>
            <Temperature/>
            <Switches/>
          </View>
        </View>
    </View>
    )
  }
}

const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent)

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
