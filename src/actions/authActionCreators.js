import * as actionTypes from '../constants/actionTypes'
import * as authRequests from '../requests/auth'

const loginSuccess = (data) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    data
  }
}

const loginError = (data) => {
  return {
    type: actionTypes.LOGIN_ERROR,
    data
  }
}

const signUpError = (data) => {
  return {
    type: actionTypes.SIGN_UP_ERROR,
    data
  }
}

const signUpSuccess = (data) => {
  return {
    type: actionTypes.SIGN_UP_SUCCESS,
    data
  }
}

const logOutSuccess = () => {
  return {
    type: actionTypes.LOG_OUT_SUCCESS
  }
}
 
export function loginUser(userDetails) {
  return (dispatch) => {
    return (
      authRequests.loginUser(userDetails)
        .then(response => response.json())
        .then(res => {
          if(res.errors && res.errors.length > 0){
            dispatch(loginError(res.errors))
          } else {
            dispatch(loginSuccess(res))
          }
        })
    )
  }
}

export function signUpUser(userDetails) {
  return (dispatch) => {
    return (
      authRequests.signUpUser(userDetails)
        .then(response => response.json())
        .then(res => {
          if(res.errors && res.errors.length > 0){
            dispatch(signUpError(res.errors))
          } else {
            dispatch(signUpSuccess(res))
          }
        })
    )
  }
}

export function logOutUser(userDetails) {
  return (dispatch) => {
    return (
      authRequests.logOutUser(userDetails)
        .then(res => dispatch(logOutSuccess()))
    )
  }
}
