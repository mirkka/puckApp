import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

export let Header = () => (
    <View style={styles.header}>
        <Text style={styles.headerText}>PuckApp</Text>
    </View>
)

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#49aed0',
    height: 50,
    paddingLeft: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
    headerText: {
    color: '#ffffff',
    fontSize: 25,
    fontWeight: 'bold',
  }
})