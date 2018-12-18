import {combineReducers} from 'redux'
import auth from './auth'
import character from './character'

export default combineReducers({
  auth,
  character
})
