import authReducer from './authReducer';
import * as authTypes from 'constants/AuthTypes';

describe('auth reducer', () => {
    
    it('should return the initial state', () => {
        expect(authReducer(undefined, {})).toEqual({
            user: null,
            isLoading: false,
            errorMsg: ''
        })
    });

    it('should initialize auth request', () => {
        expect(authReducer({
            user: null,
            isLoading: false,
            errorMsg: ''
        }, { type: authTypes.LOGIN_INIT })).toEqual({
            user: null,
            isLoading: true,
            errorMsg: ''
        });
    });

    it('should store token and user data in state', () => {
        expect(authReducer({
            user: null,
            isLoading: true,
            errorMsg: ''
        }, { type: authTypes.LOGIN_SUCCESS, data: { id: 'some-id', 'token': 'some-token' } })).toEqual({
            user: { id: 'some-id', 'token': 'some-token' },
            isLoading: false,
            errorMsg: ''
        });
    });
});