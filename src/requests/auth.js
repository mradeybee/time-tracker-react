import api from '../lib/api'

export default {
  loginUser(userDetails) {
    return api.request('POST', '/auth/login', {auth: userDetails})
  },
  signUpUser(userDetails) {
    return api.request('POST', '/users', {auth: userDetails})
  }
}
