import React from 'react';
import { getAdvertsTags } from '../../../api/adverts';
import AdvertsList from './AdvertsList';
import EmptyList from './EmptyList';

//REDUX
import { useDispatch, useSelector } from 'react-redux';
import { advertsLoadAction } from '../../../store/actions';
import { getAdverts } from '../../../store/selectors';


const AdvertsPage = () => {

    const [tagsAPI,setTagsAPI] = React.useState([]);
    const dispatch = useDispatch();
    const adverts = useSelector(getAdverts);
    React.useEffect(()=>{
      dispatch(advertsLoadAction());
    },[]);
    


    // React.useEffect(()=>{
      
    //   getAdverts()
    //   .then(setAdverts)
    //   .then(()=>getAdvertsTags().then(setTagsAPI))
    //   .catch((error)=>{
    //       history.replace('/404')}
    //   );
    // },[history]);
    
   
    
    
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