import React from 'react';
import { getAdverts, getAdvertsTags } from '../../../api/adverts';
import AdvertsList from './AdvertsList';
import EmptyList from './EmptyList';

const AdvertsPage = ({history}) => {

    const [adverts, setAdverts] = React.useState([]);
    const [tagsAPI,setTagsAPI] = React.useState([]);

    React.useEffect(()=>{
        
        getAdverts().then(setAdverts).catch((error)=>{
          history.replace('/404')}
        );
        getAdvertsTags().then(setTagsAPI).catch((error)=>{
          history.replace('/404')}
        );

      
    },[history]);
    
    
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