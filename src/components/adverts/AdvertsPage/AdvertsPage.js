import React from 'react';
import { getAdverts } from '../../../api/adverts';
import AdvertsList from './AdvertsList';
import EmptyList from './EmptyList';

const AdvertsPage = () => {

    const [adverts, setAdverts] = React.useState([]);
    
    React.useEffect(()=>{
        getAdverts().then(setAdverts);
       
    },[]);

    
    return (
        
      <React.Fragment>
            {adverts.length ? <AdvertsList adverts={adverts} /> : <EmptyList />}
      </React.Fragment>
        
    )
}
export default AdvertsPage;