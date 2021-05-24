import { createNewAdvert, getAdverts, deleteAdvert, getAdvertDetail } from '../api/adverts';
import { login } from '../api/auth';
import { getAdvertsLoaded, getSelectedAdvert } from './selectors';
import {
    ADVERTS_LOADED_REQUEST,
    AUTH_LOGGED,
    AUTH_LOGIN_REQUEST,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_FAILURE,
    AUTH_LOGOUT,
    ADVERTS_LOADED_SUCCESS,
    ADVERTS_LOADED_FAILURE,
    ADVERTS_CREATED_REQUEST,
    ADVERTS_CREATED_SUCCESS,
    ADVERTS_CREATED_FAILURE,
    ADVERTS_DELETED_REQUEST,
    ADVERTS_DELETED_SUCCESS,
    ADVERTS_DELETED_FAILURE,
    ADVERTS_DETAIL_REQUEST,
    ADVERTS_DETAIL_SUCCESS,
    ADVERTS_DETAIL_FAILURE,
    UI_RESET_ERROR
} from './types';

//Login


export function loggedAction(isLogged){
    return (dispatch) =>{
        dispatch(authLogged(isLogged));
    }
    
}

export const authLogged = (isLogged) =>({
    type: AUTH_LOGGED,
    payload: isLogged

});



export function loginAction(credentials,isChecked){
   return async(dispatch) =>{
        dispatch(authLoginRequest());
        try {
            await login(credentials,isChecked);
            dispatch(authLoginSuccess());
        } catch (error) {
            dispatch(authLoginFailure(error));
        }

   }
};

export const authLoginRequest = () => {
    return {
      type: AUTH_LOGIN_REQUEST,
    };
  };
  
export const authLoginSuccess = () => {
    return {
      type: AUTH_LOGIN_SUCCESS,

    };
};
  
export const authLoginFailure = error => {
    return {
      type: AUTH_LOGIN_FAILURE,
      payload: error,
      error:true
     
    };
};
  



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

export const advertsCreatedRequest = () =>({
    type: ADVERTS_CREATED_REQUEST,
    payload:true
});

export const advertCreatedSuccess = (adverts) =>({

    type: ADVERTS_CREATED_SUCCESS,
    payload: adverts

});

export const advertCreatedFailure = (stateError) =>({

    type: ADVERTS_CREATED_FAILURE,
    payload:stateError
})


//Loaded adverts 

export function advertsLoadAction(){
    return async(dispatch,getState) =>{
        dispatch(advertsLoadedRequest());

        const advertsLoaded = getAdvertsLoaded(getState());
        if (advertsLoaded) {
          return;
        }
        try {
            const adverts = await getAdverts();
            dispatch(advertsLoadedSuccess(adverts));
        } catch (error) {
            dispatch(advertsLoadedFailure(error));
        }
    }

}

export const advertsLoadedRequest = () =>({
    type: ADVERTS_LOADED_REQUEST,
   
});

export const advertsLoadedSuccess = (adverts) =>({
    type: ADVERTS_LOADED_SUCCESS,
    payload: adverts
});

export const advertsLoadedFailure = (error)=>({
    type: ADVERTS_LOADED_FAILURE,
    payload:error,
    error:true

});


//Delete advert

export function deleteAdvertAction(id){
    return async (dispatch) =>{
        dispatch(advertsDeletedRequest(id));

        try {
            await deleteAdvert(id);
            dispatch(advertsDeletedSuccess());
          
        } catch (error) {
            dispatch(advertsDeletedFailure(error));
        }

    }
}

export const advertsDeletedRequest = (id) =>({

    type: ADVERTS_DELETED_REQUEST,
    payload:id


});

export const advertsDeletedSuccess = () =>({
    type: ADVERTS_DELETED_SUCCESS
   
});

export const advertsDeletedFailure = (error) =>({
    type: ADVERTS_DELETED_FAILURE,
    payload:error,
    error:true

});

//detail advert
export function advertsDetailAction(adverdtId){

    return async (dispatch, getState)=>{
        dispatch(advertsDetailRequest());
        try {
            const advert = await getAdvertDetail(adverdtId);
            dispatch(advertsDetailSuccess(advert));
        } catch (error) {
            dispatch(advertsDetailFailure(error));
        }

    }

}

export const advertsDetailRequest = () =>({
    type:ADVERTS_DETAIL_REQUEST
});


export const advertsDetailSuccess = (advert) =>({
    type: ADVERTS_DETAIL_SUCCESS,
    payload: advert
});


export const advertsDetailFailure = (error)=>({
    type: ADVERTS_DETAIL_FAILURE,
    payload:error,
    error:true

});


