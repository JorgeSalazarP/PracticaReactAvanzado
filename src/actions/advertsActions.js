import {
    ADVERTS_CREATED_REQUEST,
    ADVERTS_CREATED_SUCCESS,
    ADVERTS_CREATED_FAILURE
} from '../types';
import { createNewAdvert } from '../api/adverts';



//Create new advert

export function createNewAdvertAction(newAdvert){

    return async (dispatch) =>{
        dispatch (createAdvert());
        try {
            
                const data = new FormData();
                data.append('name',newAdvert.name);
                data.append('price',newAdvert.price);
                data.append('sale',newAdvert.sale);
                data.append('tags',newAdvert.tags);
                if(newAdvert.photo){
                    data.append('photo',newAdvert.photo);
                }
                
                await createNewAdvert(data);
                dispatch(createdAdvertSuccess(data));
            
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

const createdAdvertFailure = (stateError) =>({

    type: ADVERTS_CREATED_FAILURE,
    payload:stateError
})