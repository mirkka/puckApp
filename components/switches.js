import React, { Component } from 'react'
import { StyleSheet, View, Text, Switch } from 'react-native'
import { connect } from 'react-redux'
import { global } from '../mainStyles'

import { interpreter } from '../index.android'

const mapStateToProps = (state) => {
  return {
    device: state.handleDevice.device,
    callAndSms: state.callAndSmsSwitch.callAndSms,
    proximity: state.proximitySwitch.proximity,
    bleManager: state.setManager.bleManager
  }
}

const mapDispatchToProps = dispatch => ({
  actions: {
    toggleProximity: () => dispatch({ type: 'toggleProximity' }),
    toggleCallAndSms: () => dispatch({ type: 'toggleCallAndSms' })
  }
})

class switchesComponent extends Component {
  constructor() {
    super()
    this.test = this.test.bind(this)
  }

  write (cmd, device, interpreter) {
    this.props.bleManager.writeCharacteristicWithoutResponseForDevice(
        device.id,
        interpreter.uuid,
        interpreter.write,
        btoa(cmd + ';\n')
    )
  }

  test() {
    this.props.actions.toggleCallAndSms()
    if(this.props.callAndSms) {
      this.write('blinkRed()', this.props.device, interpreter)
    }
  }

  render (){
    return (
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
              onValueChange={this.test}
              value={this.props.callAndSms} />
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
              onValueChange={this.props.actions.toggleProximity}
              value={this.props.proximity} />
            </View>
            <View>
              <Text style={global.h4}>
                <Text style={global.bold}>Flash </Text><Text style={global.greenText}>green</Text> when puck (id: 111) is near
              </Text>
            </View>
          </View>
      </View>
    )
  }
}

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

export default Switches = connect(mapStateToProps, mapDispatchToProps)(switchesComponent)
