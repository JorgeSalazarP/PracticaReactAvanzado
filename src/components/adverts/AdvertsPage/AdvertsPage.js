import React from 'react';
import { getAdverts } from '../../../api/adverts';
import AdvertsList from './AdvertsList';



const AdvertsPage = () => {

    
    
    //const [adverts, setAdverts] = React.useState([]);
    
    // React.useEffect(()=>{
    //     getAdverts(setAdverts);
    // },[]);

    
    return (
        <div className="card-columns">
        
            {getAdverts.map(advert=>(
              
                <AdvertsList
                    key={advert.id}
                    {...advert}
                />
            ))} 
            
        </div>
    )
}
export default AdvertsPage;