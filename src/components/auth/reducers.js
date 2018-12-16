import * as types from './constants/ActionTypes'
import { initialUserState } from './constants/ReducersInitialState'

export const auth = (state = initialUserState, action) => {
  switch (action.type) {
    case types.AUTH_CREATE_USER:
      return Object.assign({}, state, action.user)
    case types.AUTH_SIGNIN_USER:
      return Object.assign({}, state, action.user)
    default:
        return state;
  }
}