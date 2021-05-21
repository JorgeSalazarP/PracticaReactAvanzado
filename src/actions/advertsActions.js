import {
    ADVERTS_CREATED_REQUEST,
    ADVERTS_CREATED_SUCCESS,
    ADVERTS_CREATED_FAILURE
} from '../types';


//Create new advert

export function createNewAdvertAction(advert){
    return (dispatch) =>{
        
        dispatch (createAdvert());
        try {
            dispatch(createdAdvertSuccess(advert));
            
        } catch (error) {
            dispatch(createdAdvertFailure(true));
            
        }
    }

}


const createAdvert = () =>({
    type: ADVERTS_CREATED_REQUEST

});

const createdAdvertSuccess = (advert) =>({

    type: ADVERTS_CREATED_SUCCESS,
    payload: advert

});

const createdAdvertFailure = () =>({

    type: ADVERTS_CREATED_FAILURE
})