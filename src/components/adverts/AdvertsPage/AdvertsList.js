import React from 'react';
import Advert from './Advert';
import FiltersAdverts from '../../../filters/FiltersAdverts';

const AdvertsList = ({ adverts, ...props }) => {

    const [filteredAdverts,setFilteredAdverts] = React.useState(adverts);
    const [priceRange,setPriceRange] = React.useState({})
    
    const filteredPrice = selectedRange =>{
        setPriceRange(selectedRange);
    }

    const clickSearch = selectedFilter =>{
       
        setFilteredAdverts(

            adverts.filter(advert=>{
                
                const filterByName = advert.name.toLowerCase().includes(selectedFilter.name.toLowerCase())

                let filterByTags = true;
                if (selectedFilter.tags.length > 0) {
                  filterByTags = advert.tags.some((tag) => selectedFilter.tags.indexOf(tag) >-1);
                }

                //descartamos en el filtro la opción 'All'
                let filterBySale = true; 
                if (selectedFilter.sale === true) {
                  filterBySale = advert.sale === true;
                }
                if (selectedFilter.sale === false) {
                  filterBySale = advert.sale === false;
                } 

              
                        
        
                return filterByName && filterByTags && filterBySale;
            })



        )
        
    

    }
   
    
    return (
        <React.Fragment>
            <FiltersAdverts 
                clickSearch={clickSearch}
                filteredPrice={filteredPrice}
                {...props}
            />
            <div className="card-columns">
                {filteredAdverts.map(advert=>(
                    
                    <Advert
                        key={advert.id}
                        {...advert}
                    />
                    ))} 
            </div>
        </React.Fragment>
    );
}
 
export default AdvertsList;