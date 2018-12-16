import * as types from './constants/ActionTypes'
import { headers, routes } from './api';

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