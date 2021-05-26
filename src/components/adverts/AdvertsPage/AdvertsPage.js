import React from 'react';
import AdvertsList from './AdvertsList';
import EmptyList from './EmptyList';

//REDUX
import { useDispatch, useSelector } from 'react-redux';
import { advertsLoadAction, tagsAPIAction } from '../../../store/actions';
import { getAdverts , getTagsAPI } from '../../../store/selectors';


const AdvertsPage = () => {

    const dispatch = useDispatch();
    const adverts = useSelector(getAdverts);
    const tagsAPI = useSelector(getTagsAPI);
    React.useEffect(()=>{
      dispatch(advertsLoadAction());
      dispatch(tagsAPIAction());
    },[dispatch]);
        
    
    return (
      <React.Fragment >
            
            {adverts.length > 0
              ? 
                <AdvertsList 
                  adverts={adverts}
                  tagsAPI={tagsAPI}
                />
              
              : 
              <EmptyList />
            }
      </React.Fragment>
        
    )
}
export default AdvertsPage;