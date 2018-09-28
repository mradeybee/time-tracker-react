import * as actionTypes from '../constants/actionTypes'

const initialTimerState = { 
  userTimes: []
}

export const timer = (state = initialTimerState, action) => {
  switch (action.type) {
    case actionTypes.GOT_USER_TIMERS:
      return {...state, userTimes: action.data.timers}
    case actionTypes.SAVE_TIME_SUCCESS:
      return {...state, userTimes: action.data.timers}
    default:
      return state
  }
}
