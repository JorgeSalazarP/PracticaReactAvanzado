import React from 'react';
import { getAdverts, getAdvertsTags } from '../../../api/adverts';
import AdvertsList from './AdvertsList';
import EmptyList from './EmptyList';

//REDUX
import { useDispatch, useSelector } from 'react-redux';
import { advertsLoadAction } from '../../../actions/advertsActions';



const AdvertsPage = ({ history } ) => {

    const [adverts, setAdverts] = React.useState([]);
    const [tagsAPI,setTagsAPI] = React.useState([]);

    const dispatch = useDispatch();

    React.useEffect(()=>{

      const loadedAdvert = () => dispatch(advertsLoadAction());
      loadedAdvert();
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