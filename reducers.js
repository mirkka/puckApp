import { combineReducers } from 'redux'
import { toggleCallAndSms } from './actions'
import { toggleProximity } from './actions'

const initialState = {
  callAndSms: true,
  proximity: true,
  device: undefined,
  temperature: undefined,
  battery: undefined,
  bleManager: undefined
}

function callAndSmsSwitch(state = initialState, action) {
  var value = state.callAndSms
  switch (action.type) {
    case 'toggleCallAndSms':
      return Object.assign({}, state, {
        callAndSms: !value
      })
    default:
      return state
  }
}

function proximitySwitch(state = initialState, action) {
  var value = state.proximity
  switch (action.type) {
    case 'toggleProximity':
      return Object.assign({}, state, {
        proximity: !value
      })
    default:
      return state
  }
}

function handleDevice(state = initialState, action) {
  switch (action.type) {
    case 'bleFound':
      return Object.assign({}, state, {
        device: action.value
      })
    default:
      return state
  }
}

function setTemperature(state = initialState, action) {
  switch (action.type) {
    case 'temperature':
      return Object.assign({}, state, {
        temperature: action.value
      })
    default:
      return state
  }
}

function setBatteryStatus(state = initialState, action) {
  switch (action.type) {
    case 'battery':
      return Object.assign({}, state, {
        battery: action.value
      })
    default:
      return state
  }
}

function setManager(state = initialState, action) {
  switch (action.type) {
    case 'bleManager':
      return Object.assign({}, state, {
        bleManager: action.value
      })
    default:
      return state
  }
}

const puckApp = combineReducers({
  callAndSmsSwitch,
  proximitySwitch,
  handleDevice,
  setTemperature,
  setBatteryStatus,
  setManager
})

export default puckApp
