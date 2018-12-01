import { user } from './reducers'
import { initialUserState } from './constants/ReducersInitialState'
import * as types from './constants/ActionTypes'
import { userMock } from './constants/Fixtures'

describe('reducers', () => {
  describe('SignUp', () => {
    it('should return the initial state', () => {
      expect(user(undefined, {})).toEqual(initialUserState)
    })

    it('should handle AUTH_CREATE_USER', () => {
      const action = {
        type: types.AUTH_CREATE_USER,
        user: userMock,
      }
      const expected = {
        ...userMock
      }
      
      expect(user(undefined, action)).toEqual(expected)
    })
  }) 
})