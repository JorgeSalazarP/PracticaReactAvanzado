import React from 'react';


const FiltersAdverts = ({ clickSearch, tagsAPI }) => {
    
    const [tagsChecked,setTagsChecked] = React.useState([]);
    const [filter, setFilter] = React.useState({
        name:'',
        sale:'All',
        tags:[]
    });

    const { name,sale } = filter;

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
                oldTagsChecked.filter((tag)=>tag !==ev.target.value)
            );
        }
       
    }

   
    const handleSubmit = ev =>{
        ev.preventDefault();
        filter.tags = [...tagsChecked];
        clickSearch(filter);


    }

    return ( 
        
        <div>
            
            <div className="row p-5">
                <div className="col-5">
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

                        <div className="form-check form-check-inline">
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

                        <div>
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

                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Search
                        </button>
                    </form>


                </div>


                
            </div>

        </div>


    );
}
 
export default FiltersAdverts;