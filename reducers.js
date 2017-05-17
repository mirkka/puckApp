import { combineReducers } from 'redux'
import { toggleCallAndSms } from './actions'
import { toggleProximity } from './actions'

const initialState = {
  callAndSms: true,
  proximity: true
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

const puckApp = combineReducers({
  callAndSmsSwitch,
  proximitySwitch
})

export default puckApp
