import React from 'react';
import { getAdverts } from '../../../api/adverts';
import AdvertsList from './AdvertsList';


const AdvertsPage = ({history}) => {

    const [adverts, setAdverts] = React.useState([]);
    
    React.useEffect(()=>{
        getAdverts().then(setAdverts);
    },[]);

    
    return (
        <div className="card-columns">
        
            {adverts.map(advert=>(
                
                <AdvertsList
                    key={advert.id}
                    {...advert}
                />
            ))} 
            
        </div>
    )
}
export default AdvertsPage;