import React from 'react';
import { getAdverts } from '../../../api/adverts';
import AdvertsList from './AdvertsList';



const AdvertsPage = () => {

    //console.log(getAdverts).then();
    
    // const [adverts, setAdverts] = React.useState([]);
    // getAdverts(setAdverts).then();
    // console.log(setAverts);
    // React.useEffect(()=>{
    //     
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