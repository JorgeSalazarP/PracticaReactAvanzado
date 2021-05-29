import { authLoginSuccess } from './actions';
import { AUTH_LOGIN_SUCCESS } from './types';

describe('authLoginSuccess', () => {
    test('should return an AUTH_LOGIN_SUCCESS',()=>{
        const result = authLoginSuccess();
        expect(result).toEqual({ type: AUTH_LOGIN_SUCCESS });

    });
});
