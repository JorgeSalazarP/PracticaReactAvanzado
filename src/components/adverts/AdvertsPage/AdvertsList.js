import React from 'react';
import Advert from './Advert';
import FiltersAdverts from '../../../filters/FiltersAdverts';

const AdvertsList = ({ adverts, ...props }) => {

    const [filteredAdverts,setFilteredAdverts] = React.useState(adverts);

    const clickSearch = selectedFilter =>{
        console.log(selectedFilter.tags)
        setFilteredAdverts(

            adverts.filter(advert=>{
                
                const filterByName = advert.name.toLowerCase().includes(selectedFilter.name.toLowerCase())

                let filterByTags = true;
                if (selectedFilter.tags.length > 0) {
                  filterByTags = advert.tags.some((tag) => selectedFilter.tags.indexOf(tag) >-1);
                }

                return filterByName && filterByTags
            })



        )
        
        
        //console.log(filterTags)
        // console.log(filter)
        // filter = {...filterTags};
        // console.log(filter)

       // setFilteredAdverts(filteredAdverts);

    }
   
    
    return (
        <React.Fragment>
            <FiltersAdverts 
                clickSearch={clickSearch}
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