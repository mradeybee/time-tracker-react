import * as actionTypes from '../constants/actionTypes'

const initialAuthState = { 
  user: {}
}

export const auth = (state = initialAuthState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return {...state, user: action.data}
    default:
      return state
  }
}
