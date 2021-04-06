import React, { Fragment } from 'react';
import { getAdverts } from '../../../api/adverts';
import AdvertsList from './AdvertsList';
import EmptyList from './EmptyList';

const AdvertsPage = () => {

    const [adverts, setAdverts] = React.useState([]);
    
    React.useEffect(()=>{
        getAdverts().then(setAdverts);
       
    },[]);

    
    return (
        
      <Fragment>
            {!adverts.length ? <AdvertsList adverts={adverts} /> : <EmptyList />}
      </Fragment>
        
    )
}
export default AdvertsPage;