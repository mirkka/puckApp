import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    device: state.handleDevice.device
  }
}

const setStyle = (device) => {
    if (device) {
        return {
            color: '#ffffff',
            backgroundColor: '#1c8830',
            height: 20,
            paddingLeft: 15,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 15
        }
    } else {
        return {
            backgroundColor: '#bfbfbf',
            height: 20,
            paddingLeft: 15,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 15,
            color: 'black'
        }
    }
}

const setText = (device) => {
    if (device) {
        return 'Connected to: ' + device.name 
    } else {
        return 'No device connected'
    }
}

export let DeviceInfo = (props) => (
    <View>
        <Text style={setStyle(props.device)}>{setText(props.device)}</Text>
    </View>
)

DeviceInfo = connect(mapStateToProps)(DeviceInfo)
