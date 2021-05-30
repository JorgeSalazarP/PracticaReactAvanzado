import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { loginAction } from './actions';
import { AUTH_LOGIN_REQUEST, AUTH_LOGIN_SUCCESS } from './types';


const middleware = [thunk];
const mockStore = configureStore(middleware);
const store = mockStore({});

describe('loginAction', () => {
  describe('when login api resolves', () => {
    const credentials = 'credentials';
    const isChecked = 'isChecked';
    const login = jest.fn().mockResolvedValue();

    test('should dispatch an AUTH_LOGIN_SUCCESS action', async () => {
      await store.dispatch(loginAction(credentials,isChecked));
      const actions = store.getActions();
      expect(actions).toEqual([
        { type: AUTH_LOGIN_REQUEST },
        { type: AUTH_LOGIN_SUCCESS },
      ]);
      expect(login).toBeCalledWith(credentials,isChecked);
    });
  });
});
