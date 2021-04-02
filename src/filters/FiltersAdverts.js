import React from 'react';
import queryString from 'query-string';
import AdvertDetailPage from '../components/adverts/AdvertDetailPage'
import AdvertsList from '../components/adverts/AdvertsPage/AdvertsList';
import useForm from '../hooks/useForm';
import { useLocation } from 'react-router-dom';
import { getSearchAdverts } from './getSearchAdverts';
 


const FiltersAdverts = ({ history }) => {
    
    
    const location = useLocation();
    const { q = ''} = queryString.parse(location.search); //Control undefined
    
    const [formValues,handleChange] = useForm({
        searchNameAdvert: q
    });
    
    const { searchNameAdvert } = formValues;
    const filterAdverts = getSearchAdverts(searchNameAdvert);
    
    const handleSubmit = (ev) =>{
        ev.preventDefault();
        history.push(`?q=${searchNameAdvert}`);

    }

    return ( 
        
        <div>
        
            <div className="row">
                <div className="col-5">
                    <h4> Search Form </h4>
                    <hr />

                    <form 
                        onSubmit={ handleSubmit }>
                        <input 
                            type="text"
                            placeholder="Find your advert"
                            className="form-control"
                            name="searchNameAdvert"
                            value={ searchNameAdvert }
                            onChange={ handleChange }
                        />

                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Search
                        </button>
                    </form>


                </div>


                <div className="col-7">

                    <h4> Results </h4>
                    <hr />

                    {
                        filterAdverts.map(advert=>(
                            
                            <AdvertsList
                                key = { advert.id }
                                { ...advert }    
                            />

                        ))
                    }

                    
                    { 
                        (filterAdverts.length === 0 && q!=='' ) 
                            && 
                            <div className="alert alert-danger">
                                There isn't advert with { q }
                            </div>
                    } 
                    

                </div>

            </div>

        </div>


    );
}
 
export default FiltersAdverts;