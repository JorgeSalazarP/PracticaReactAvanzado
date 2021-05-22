import {
    ADVERTS_LOADED_REQUEST,
    ADVERTS_LOADED_SUCCESS,
    ADVERTS_LOADED_FAILURE,
    ADVERTS_CREATED_REQUEST,
    ADVERTS_CREATED_SUCCESS,
    ADVERTS_CREATED_FAILURE,
    ADVERTS_DELETED_REQUEST,
    ADVERTS_DELETED_SUCCESS,
    ADVERTS_DELETED_FAILURE
} from '../types';


const initialState = {
    adverts: [],
    error: null,
    loading: false,
    deleteAdvert: null

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
        case ADVERTS_DELETED_FAILURE:
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
        
        case ADVERTS_DELETED_REQUEST:
            return{
                ...state,
                deleteAdvert:action.payload
            }
        
        case ADVERTS_DELETED_SUCCESS:
            return{
                ...state,
                adverts: state.adverts.filter(advert=>advert.id !==state.deleteAdvert),
                deleteAdvert:null
            }
        

        default:
            return state;
    }

}