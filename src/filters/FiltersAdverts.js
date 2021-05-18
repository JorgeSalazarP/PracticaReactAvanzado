import React from 'react';
import T from 'prop-types';
import { useHistory } from 'react-router-dom';
import { SelectRange } from '../components/shared/SelectRange';
import './Filter.css';

const FiltersAdverts = ({ clickSearch, tagsAPI, ...props }) => {
    
    const [tagsChecked,setTagsChecked] = React.useState([]);
    const [filter, setFilter] = React.useState({
        name:'',
        sale:'All',
        tags:[],
    });
    
    const history = useHistory();
    const { name } = filter;

    const handleChange = ev =>{
        
        let value = ev.target.value;
        if(ev.target.name === 'sale' && ev.target.value!=='All'){
            value === 'true' ? value=true : value=false;
        }
        setFilter(oldFilter => ({

            ...oldFilter,
            [ev.target.name]: value,
        }));

    }

    const handleChangeChecked = ev =>{
        if(ev.target.checked){
            setTagsChecked((oldTagsChecked)=>[
                ...oldTagsChecked,
                ev.target.value
        ]);

        }else{
            setTagsChecked((oldTagsChecked)=>
                oldTagsChecked.filter((tag)=>tag !== ev.target.value)
            );
        }
       
    }

    const handleResetClick = ev =>{
        ev.preventDefault();
        history.replace('/');
    }

    const handleSubmit = ev =>{
        ev.preventDefault();
        filter.tags = [...tagsChecked];
        clickSearch(filter);
    }
    

    return ( 
        
        
            <div className="container container_search">
                
                <div className="row">
                    <div className="col-12 col-md-8 order-2 order-md-1">
                        <h2 className="mb-3">Search Adverts</h2>
                        <form 
                            onSubmit={handleSubmit}
                        >
                            <div className="row">
                                <div className="col-12 col-sm-6 mb-3 search_field">
                                    <input 
                                        type="text"
                                        placeholder="Find your advert"
                                        className="form-control search_name"
                                        name="name"
                                        value={name}
                                        onChange={handleChange}        
                                    />
                               
                                </div>
                            </div>    
                                <div className="filter-tags form-check-inline">
                                    {tagsAPI.map(tag=>(
                                
                                        <React.Fragment key={tag}>
                                            <label>{tag}</label>
                                            <input 
                                                className="form-check-input" 
                                                type="checkbox"
                                                value={tag}
                                                name="tag"                    
                                                onChange={handleChangeChecked}
                                            />
                                        </React.Fragment>
                                    ))}
                                </div> 

                                <div className="row mt-3">
                                    <div className="col-12 col-sm-6 mb-3">
                                          
                                        <div className="radio_buttons">
                                            <label>All</label>
                                            <input 
                                                type="radio"
                                                name="sale"
                                                value="All"                               
                                                onChange={handleChange}

                                            />
                                            <label>Buy</label>
                                            <input 
                                                type="radio"
                                                name="sale"
                                                value={true}
                                                onChange={handleChange}
                                                
                                                
                                            />
                                            <label>Sell</label>
                                            <input 
                                                type="radio"
                                                name="sale"
                                                value={false}
                                                onChange={handleChange}
                
                                            />               
                                    
                            
                                        </div> 
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <label className="mb-2">
                                            Price
                                        </label>
                                        <SelectRange
                                                {...props}
                                              
                                        />
                                    </div>
                                </div>
                                <div className="row mb-5">
                                    <div className="col container_buttons">
                                        <button
                                            type="submit"
                                            className="btn btn-primary btn_search"
                                        >
                                            Search
                                        </button>

                                        <button
                                            onClick={handleResetClick}
                                            className="btn btn-danger btn_search"
                                        >
                                            Reset
                                        </button>
                                    </div>        
                                </div>
                        </form>
                    </div>                          
                </div>

            </div>


    );
}

FiltersAdverts.propTypes = {
    clickSearch: T.func.isRequired,
    tagsAPI: T.array

};
export default FiltersAdverts;