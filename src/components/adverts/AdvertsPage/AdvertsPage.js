import React from 'react';
import { getAdverts } from '../../../api/adverts';
import AdvertsList from './AdvertsList';
import EmptyList from './EmptyList';

const AdvertsPage = ({history}) => {

    const [adverts, setAdverts] = React.useState([]);
    
    React.useEffect(()=>{
        
        getAdverts().then(setAdverts).catch((error)=>{
          history.replace('/404')}
        );
       
    },[history]);


  
    return (
        
      <React.Fragment >
            {adverts.length ? <AdvertsList adverts={adverts} /> : <EmptyList />}
      </React.Fragment>
        
    )
}
export default AdvertsPage;