import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { global } from '../mainStyles'

export let Batery = () => (
    <View style={global.box}>
        <View>
        <Text style={global.h2}>Battery status</Text>
        </View>
        <View>
            <Text>100%</Text>
        </View>
    </View>
)
