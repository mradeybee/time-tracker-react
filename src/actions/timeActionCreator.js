import * as actionTypes from '../constants/actionTypes'
import * as timeRequests from '../requests/time'

export function saveTime(timeDetails, accessToken) {
  return (dispatch) => {
    return (
      timeRequests.saveTime(timeDetails, accessToken)
        .then(response => response.json())
        .then(res => {
          if(res.errors && res.errors.length > 0){
            dispatch(saveTimeError(res.errors))
          } else {
            dispatch(saveTimeSuccess(res))
          }
        })
    )
  }
}

export function getUserTimers(accessToken) {
  return (dispatch) => {
    return (
      timeRequests.getUserTimers(accessToken)
        .then(response => response.json())
        .then(res => {
          if(res.errors && res.errors.length > 0){
            dispatch(userTimersError(res.errors))
          } else {
            dispatch(gotUserTimers(res))
          }
        })
    )
  }
}

const saveTimeSuccess = (data) => {
  return {
    type: actionTypes.SAVE_TIME_SUCCESS,
    data
  }
}

const saveTimeError = (data) => {
  return {
    type: actionTypes.SAVE_TIME_SUCCESS,
    data
  }
}

const userTimersError = (data) => {
  return {
    type: actionTypes.USER_TIMERS_ERROR,
    data
  }
}

const gotUserTimers = (data) => {
  return {
    type: actionTypes.GOT_USER_TIMERS,
    data
  }
}
