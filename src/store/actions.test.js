import { authLoginSuccess, loginAction } from './actions';
import { AUTH_LOGIN_REQUEST, AUTH_LOGIN_SUCCESS, AUTH_LOGIN_FAILURE } from './types';

describe('authLoginSuccess', () => {
    test('should return an AUTH_LOGIN_SUCCESS',()=>{
        const expectedAction = { type: AUTH_LOGIN_SUCCESS };
        const result = authLoginSuccess();
        expect(result).toEqual(expectedAction);
    });
});


describe('loginAction',()=>{
    describe('When login API resolves', () => {
        const credentials = 'credentials';
        const isChecked = 'isChecked';
        const action = loginAction(credentials,isChecked);
        const dispatch = jest.fn();
        const login = jest.fn().mockResolvedValue();
        test('should dispatch an AUTH_LOGIN_REQUEST action',()=>{
            action(dispatch,login);
            expect(dispatch).toHaveBeenCalledWith({ type: AUTH_LOGIN_REQUEST });
            
        });
        test('should call API login',()=>{
            action(login);
            expect(login).toHaveBeenCalled();
            
        });

        test('should dispatch an AUTH_LOGIN_SUCCESS action', async ()=>{
            await action(dispatch);
            expect(login).toHaveBeenCalled();
            
        });

    });
    describe('When login API throws', () => {
        const credentials = 'credentials';
        const isChecked = 'isChecked';
        const action = loginAction(credentials,isChecked);
        const dispatch = jest.fn();
        const login = jest.fn().mockRejectedValue();
        test('should dispatch an AUTH_LOGIN_FAILURE action', async ()=>{
            await action(dispatch,login);
            expect(dispatch).toHaveBeenCalled();
            
        });

        
    });
    
});