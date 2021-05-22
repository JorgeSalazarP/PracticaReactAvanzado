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

import { createNewAdvert, getAdverts, deleteAdvert } from '../api/adverts';



//Create new advert

export function createNewAdvertAction(newAdvert){

    return async (dispatch) =>{
        dispatch (advertsCreatedRequest());
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
                dispatch(advertCreatedSuccess(data));
            
        } catch (error) {
            dispatch(advertCreatedFailure(true));
            
        }
    }

}

const advertsCreatedRequest = () =>({
    type: ADVERTS_CREATED_REQUEST,
    payload:true
});

const advertCreatedSuccess = (advert) =>({

    type: ADVERTS_CREATED_SUCCESS,
    payload: advert

});

const advertCreatedFailure = (stateError) =>({

    type: ADVERTS_CREATED_FAILURE,
    payload:stateError
})


//Loaded adverts 

export function advertsLoadAction(){

    return async(dispatch) =>{
        dispatch(advertsLoadedRequest());

        try {

            const adverts = await getAdverts();
            dispatch(advertsLoadedSuccess(adverts));
        } catch (error) {
            dispatch(advertsLoadedFailure());
        }
    }

}

const advertsLoadedRequest = () =>({

    type: ADVERTS_LOADED_REQUEST,
    payload: true
});

const advertsLoadedSuccess = (adverts) =>({

    type: ADVERTS_LOADED_SUCCESS,
    payload: adverts
});

const advertsLoadedFailure = ()=>({
    type: ADVERTS_LOADED_FAILURE,
    payload:true

});


//Delete advert

export function deleteAdvertAction(id){
    return async (dispatch) =>{
        dispatch(advertsDeletedRequest(id));

        try {
            await deleteAdvert(id);
            dispatch(advertsDeletedSuccess());
        } catch (error) {
            dispatch(advertsDeletedFailure());
        }

    }
}

const advertsDeletedRequest = (id) =>({

    type: ADVERTS_DELETED_REQUEST,
    payload:id


});

const advertsDeletedSuccess = () =>({

    type: ADVERTS_DELETED_SUCCESS
   
});

const advertsDeletedFailure = () =>({
    type: ADVERTS_DELETED_FAILURE,
    payload:true

});