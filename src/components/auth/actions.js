import * as types from './constants/ActionTypes'
import { headers, listCategoriesUrl, categoryPostsUrl } from './api';

export const createUser = (user) => {
  return {
      type: types.AUTH_CREATE_USER,
      user,
  }
}

export function createUserFetchData() {
  return dispatch => {
    return fetch(listCategoriesUrl, { headers })
      .then(res => res.json())
      .then(body => {
        dispatch(receiveCategories(body))
        return new Promise(function(resolve) {
          resolve(body);
        })
      })
  }
}