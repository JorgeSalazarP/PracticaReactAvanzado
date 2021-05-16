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
        
        <div className="mb-5">
            
            <div className="row p-5 filter">
                <div className="col-12">
                    <h4> Search Form </h4>
                    <hr />

                    <form 
                        onSubmit={handleSubmit}
                    >
                        <input 
                            type="text"
                            placeholder="Find your advert"
                            className="form-control"
                            name="name"
                            value={name}
                            onChange={handleChange}
                            
                        />

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
                        
                        <label>
                            Price
                        </label>
                        <SelectRange
                                {...props}
                        />
                        
                        <div className="filter-buttons">
                            <button
                                type="submit"
                                className="btn mt-5 btn-block btn-primary"
                            >
                                Search
                            </button>

                            <button
                                onClick={handleResetClick}
                                className="btn mt-5 btn-block btn-danger"
                            >
                                Reset
                            </button>

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