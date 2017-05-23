import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { connect } from 'react-redux'

import { global } from '../mainStyles'

const mapStateToProps = (state) => {
  return {
    battery: state.setBatteryStatus.battery
  }
}

export let Batery = (props) => (
    <View style={global.box}>
        <View>
        	<Text style={global.h2}>Battery status</Text>
        </View>
        <View>
            <Text>{props.battery}</Text>
        </View>
    </View>
)

Batery = connect(mapStateToProps)(Batery)
