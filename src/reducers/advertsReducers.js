import {
    ADVERTS_LOADED_REQUEST,
    ADVERTS_LOADED_SUCCESS,
    ADVERTS_LOADED_FAILURE,
    ADVERTS_CREATED_REQUEST,
    ADVERTS_CREATED_SUCCESS,
    ADVERTS_CREATED_FAILURE
} from '../types';


const initialState = {
    adverts: [],
    error: null,
    loading: false,

}

export default function (state = initialState, action){
    switch (action.type) {
        case ADVERTS_CREATED_REQUEST:
        case ADVERTS_LOADED_REQUEST:
            return{
                ...state,
                loading: action.payload
            }   
        case ADVERTS_CREATED_SUCCESS:
            return{
                ...state,
                loading: false,
                adverts:[...state.adverts, action.payload]
            }
        case ADVERTS_CREATED_FAILURE:
        case ADVERTS_LOADED_FAILURE:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        case ADVERTS_LOADED_SUCCESS:
            return{
                ...state,
                loading: false,
                error: null,
                adverts:action.payload
            }
        

        default:
            return state;
    }

}