import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import * as actions from './actions'
import * as types from './constants/ActionTypes'
import { userMock, userSignInMock } from './constants/Fixtures'


describe('actions', () => {
  const middlewares = [thunk]
  const mockStore = configureMockStore(middlewares)

  describe('SignUp', () => {
    describe('should create an action', () => {
      it('to auth create user ', () => {
        const expectedAction = {
          type: types.AUTH_CREATE_USER,
          user: userMock,
        }

        expect(actions.createUser(userMock)).toEqual(expectedAction)
      })
    })
  })

  describe('SignIn', () => {
    describe('should create an action', () => {
      it('to receive user in auth sign', () => {
        const expectedAction = {
          type: types.AUTH_SIGNIN_USER,
          user: userSignInMock,
        }

        expect(actions.signInUser(userSignInMock)).toEqual(expectedAction)
      })
    })
  })
})