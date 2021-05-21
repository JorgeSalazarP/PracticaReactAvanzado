import {
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
        
    
        default:
            return state;
    }

}