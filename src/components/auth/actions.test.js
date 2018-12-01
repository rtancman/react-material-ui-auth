import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import * as actions from './actions'
import * as types from './constants/ActionTypes'
import { userMock } from './constants/Fixtures'


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
})