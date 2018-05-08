import { combineReducers } from 'redux'
import { fetchReducer } from './fetchReducer'
import { stateText } from './stateText'

const reducer = combineReducers({fetchReducer, stateText})

export { reducer }