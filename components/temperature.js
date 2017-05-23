import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { connect } from 'react-redux'

import { global } from '../mainStyles'

const mapStateToProps = (state) => {
  return {
    temperature: state.setTemperature.temperature
  }
}

export let Temperature = (props) => (
    <View style={global.box}>
        <View>
	        <Text style={global.h2}>Temperature</Text>
	        </View>
        <View>
            <Text>{props.temperature}</Text>
        </View>
    </View>
)

Temperature = connect(mapStateToProps)(Temperature)