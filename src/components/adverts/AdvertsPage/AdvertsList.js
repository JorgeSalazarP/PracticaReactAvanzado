import React from 'react';
import Advert from './Advert';


const AdvertsList = ({ adverts }) => {
    
    return (
        
        <div className="card-columns">
            {adverts.map(advert=>(
                
                <Advert
                    key={advert.id}
                    {...advert}
                />
            ))} 
        </div>
    );
}
 
export default AdvertsList;