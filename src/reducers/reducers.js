import { combineReducers } from 'redux';
import { auth } from './authReducer'
import { timer } from './timerReducer'


const reducers = combineReducers({
  auth,
  timer
})

export default reducers;
