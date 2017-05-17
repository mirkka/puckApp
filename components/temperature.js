import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { global } from '../mainStyles'

export const Temperature = () => (
    <View style={global.box}>
        <View>
        <Text style={global.h2}>Temperature</Text>
        </View>
        <View>
            <Text>7&deg;C</Text>
        </View>
    </View>
)
