import * as types from './constants/ActionTypes'
import { headers, routes } from './core/api';

export const createUser = (user) => {
  return {
      type: types.AUTH_CREATE_USER,
      user,
  }
}

export const signInUser = (user) => {
  return {
      type: types.AUTH_SIGNIN_USER,
      user,
  }
}

export function signInFetchData(username, password) {
  return dispatch => {
    return fetch(routes.signIn, {
      method: 'POST',
      headers,
      body: JSON.stringify({email: username, password})
    })
    .then(res => res.json())
    .then(body => {
      dispatch(signInUser(body))
      return new Promise(function(resolve) {
        resolve(body)
      })
    })
  }
}

export const authLogoutUser = () => {
  return {
      type: types.AUTH_LOGOUT_USER
  }
}

export function logout(username, password) {
  return dispatch => {
    dispatch(authLogoutUser())
  }
}

export function signUp(user) {
  return dispatch => {
    return fetch(routes.signUp, {
      method: 'POST',
      headers,
      body: JSON.stringify(user)
    })
    .then(res => {
      if (res.ok) return res.json()
      return new Promise(function(_, reject) {
        reject(res)
      })
    })
    .then(body => {
      dispatch(signInUser(body))
      return new Promise(function(resolve) {
        resolve(body)
      })
    })
  }
}
