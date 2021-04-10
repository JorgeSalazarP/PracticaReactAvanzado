import React from 'react';
import Error from '../../error/Error';

const NewAdvertForm = ({tagsAPI}) => {

    const [contentNewAdvert,setContentNewAdvert] = React.useState({
        name:'',
        price:0,
        sale:'Buy',
        photo:'', 
        
    });
    
    const [selectedTags,setSelectedTags] = React.useState([]);
    const [error,setError] = React.useState(null);
    const {name,price,sale,photo} = contentNewAdvert;

    const handleChange = ev =>{

        setContentNewAdvert(oldContentNewAdvert => ({
            ...oldContentNewAdvert,
            [ev.target.name]: ev.target.value,
          }));

    }
    
    const handleChangeChecked = ev =>{

        
        setSelectedTags(oldSelectedTags => ({
            ...oldSelectedTags,
            [ev.target.value]: ev.target.checked,
    
        }));
    
    }
    const optionsCheckbox = () =>{
        const optionTagsSelected = Object.values(selectedTags);
        return optionTagsSelected.find(isSelected=>isSelected===true);
      
    }
    
    const validationForm = () =>{

        
        if(!optionsCheckbox() ){
            setError('Tags *Obligatory field');
            return false;
        }
        if(name.trim()==='' ){
            setError('Name *Obligatory field');
            return false;
        }
        if(price < 0 || price > 25000){
            setError('Price 0-25000€');
            return false;
        }

        return true;


    }
  
    const handleSubmit = ev =>{

        setError(null);
        ev.preventDefault();
        if(validationForm()){

           

        }
        
       
    }


    return ( 
        
        <form
            onSubmit={handleSubmit}
        >

            <label htmlFor="input_name">Name</label>
            <input 
                type="text" 
                className="form-control" 
                id="input_name"
                name="name"
                value={name}
                onChange={handleChange}
            />
            <label htmlFor="input_price">Price</label>
            <input 
                type="number" 
                className="form-control" 
                id="input_price"
                name="price"
                value={price}
                onChange={handleChange}
            />
            <label htmlFor="buy_sell">Buy or Sell?</label>
            <select 
                className="form-control" 
                id="buy_sell"
                name="sale"
                value={sale}
                onChange={handleChange}
            >
                
                <option>Buy</option>
                <option>Sell</option>
            </select>
            <div className="form-check form-check-inline">
                {tagsAPI.map((tag,index)=>(
                       
                    <React.Fragment key={index}>
                        <label>{tag}</label>
                        <input 
                            className="form-check-input" 
                            type="checkbox"
                            value={tag}
                            onChange={handleChangeChecked}
                            
                        />
                    </React.Fragment>
                ))}
            </div>
            <div className="form_field">
                <input 
                    type="submit" 
                    className="btn btn-primary btn-lg btn-block" 
                    value="Publish" 
                    disabled = {!selectedTags}
                  
                   
                />
            </div>

            {error ? <Error message={error}/>: null}
    
        </form>
         
      
        
     );
}
 
export default NewAdvertForm;