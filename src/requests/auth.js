import api from '../lib/api'

  export function loginUser(userDetails) {
    return api.request('POST', 'auth/login', {auth: userDetails}, '')
  }

  export function signUpUser(userDetails) {
    return api.request('POST', 'users', {auth: userDetails}, '')
  }

  export function logOutUser(userDetails) {
    return api.request('POST', 'auth/logout', {auth: {refresh_token: userDetails.refresh_token}}, userDetails.jwt)
  }
