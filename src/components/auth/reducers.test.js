import { auth } from './reducers'
import { initialUserState } from './constants/ReducersInitialState'
import * as types from './constants/ActionTypes'
import { userMock, userSignInMock } from './constants/Fixtures'

describe('reducers', () => {
  describe('SignUp', () => {
    it('should return the initial state', () => {
      expect(auth(undefined, {})).toEqual(initialUserState)
    })

    it('should handle AUTH_CREATE_USER', () => {
      const action = {
        type: types.AUTH_CREATE_USER,
        user: userMock,
      }
      const expected = {
        ...userMock
      }
      
      expect(auth(undefined, action)).toEqual(expected)
    })

    it('should handle AUTH_SIGNIN_USER', () => {
      const action = {
        type: types.AUTH_SIGNIN_USER,
        user: userSignInMock,
      }
      const expected = {
        ...userSignInMock
      }
      
      expect(auth(undefined, action)).toEqual(expected)
    })
  }) 
})