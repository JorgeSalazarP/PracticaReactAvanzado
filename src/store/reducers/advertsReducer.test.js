import { ADVERTS_DETAIL_REQUEST, TAGS_LOADED_SUCCESS , UI_RESET_ERROR } from '../types';
import { ui, initialState } from './advertsReducer';

describe('ui',()=>{
    test('should manage ANY action', ()=>{
        const state = initialState.ui;
        const action = { type:'ANY' };
        const nextState = ui(state,action);
        expect(nextState).toBe(state);
    });

    //THE SAME AS AUTH_LOGIN_REQUEST,TAGS_LOADED_REQUEST, ADVERTS_LOADED_REQUEST
    test('should manage ADVERTS_DETAIL_REQUEST action', ()=>{
        const state = initialState.ui;
        const action = { type:'ADVERTS_DETAIL_REQUEST' };
        const expectedState = {
            ...initialState.ui,
            loading:true,
            error:null
        };
        const nextState = ui(state,action);
        expect(nextState).toEqual(expectedState);
    });

    test('should manage TAGS_LOADED_SUCCESS action', ()=>{
        const state = initialState.ui;
        const action = { type:'TAGS_LOADED_SUCCESS' };
        const expectedState = {
            ...initialState.ui,
            loading:false
        };
        const nextState = ui(state,action);
        expect(nextState).toEqual(expectedState);
    });

    test('should manage UI_RESET_ERROR action', ()=>{
        const state = initialState.ui;
        const action = { type:'UI_RESET_ERROR' };
        const expectedState = {
            ...initialState.ui,
            error:null
        };
        const nextState = ui(state,action);
        expect(nextState).toEqual(expectedState);
    });



});