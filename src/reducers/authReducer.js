import * as actionTypes from '../constants/actionTypes'

const initialAuthState = { 
  user: {},
  loginError: null,
  signUpError: null
}

export const auth = (state = initialAuthState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return {...state, user: action.data}
    case actionTypes.SIGN_UP_SUCCESS:
      return {...state, user: action.data}
    case actionTypes.SIGN_UP_ERROR:
      return {...state, signUpError: action.data}
    case actionTypes.LOGIN_ERROR:
      return {...state, loginError: action.data}
    case actionTypes.LOG_OUT_SUCCESS:
      return {...state, user: {}, loginError: null, signUpError: null}
    case actionTypes.CLEAR_FORM_ERRORS:
      return {...state, loginError: null, signUpError: null}
    default:
      return state
  }
}
