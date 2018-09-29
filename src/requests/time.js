import api from '../lib/api'

export function saveTime(timeDetails, accessToken) {
  return api.request('POST', 'timer', {timer: timeDetails}, accessToken)
}

export function getUserTimers(accessToken) {
  return api.request('GET', 'user_timers', {}, accessToken)
}
