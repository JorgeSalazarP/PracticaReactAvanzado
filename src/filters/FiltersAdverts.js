import React from 'react';


const FiltersAdverts = ({ clickSearch, tagsAPI }) => {
    
    const [tagsChecked,setTagsChecked] = React.useState([]);
    const [filter, setFilter] = React.useState({
        name:'',
        tags:[]
    });

    const { name,tags } = filter;

    const handleChange = ev =>{

        setFilter(oldFilter => ({
            ...oldFilter,
            [ev.target.name]: ev.target.value,
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
       // const filter = filterByName(name);
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