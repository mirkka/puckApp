import React, { Component } from 'react'
import { StyleSheet, View, Text, Switch } from 'react-native'
import { connect } from 'react-redux'
import { global } from '../mainStyles'

const mapStateToProps = (state) => {
  return {
    callAndSms: state.callAndSmsSwitch.callAndSms,
    proximity: state.proximitySwitch.proximity,
  }
}

const mapDispatchToProps = dispatch => ({
  actions: {
    toggleSProximity: () => dispatch({ type: 'toggleProximity' }),
    toggleCallAndSms: () => dispatch({ type: 'toggleCallAndSms' }),
  }
})

export let Switches = (props) => (
    <View style={global.box}>
        <View style={styles.header}>
          <Text style={global.h2}>Trackers</Text>
        </View>
        <View style={styles.wrapper}>
          <View>
            <Text style={global.h3}>Call and SMS</Text>
          </View>
          <View>
            <Switch
            onValueChange={props.actions.toggleCallAndSms}
            value={props.callAndSms} />
          </View>
          <View>
            <Text style={global.h4}>
              <Text style={global.bold}>Flash </Text><Text style={global.redText}>red</Text> when received SMS or call from Mooje
            </Text>
          </View>
        </View>

        <View style={styles.wrapper}>
          <View>
            <Text style={global.h3}>Proximity</Text>
          </View>
          <View>
            <Switch
            onValueChange={props.actions.toggleSProximity}
            value={props.proximity} />
          </View>
          <View>
            <Text style={global.h4}>
              <Text style={global.bold}>Flash </Text><Text style={global.greenText}>green</Text> when puck (id: 111) is near
            </Text>
          </View>
        </View>
    </View>
)
const styles = StyleSheet.create({
  wrapper: {
    paddingBottom: 10,
    alignItems: 'center',
  },
  header: {
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: '#bbb8b6',
    alignItems: 'center',
    width: 280,
    marginBottom: 10,
    paddingBottom: 5,
  }
})
Switches = connect(mapStateToProps, mapDispatchToProps)(Switches)
