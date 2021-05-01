import React from 'react';
import Error from '../../error/Error';

const NewAdvertForm = ({tagsAPI, saveNewAdvert}) => {


    const [contentNewAdvert,setContentNewAdvert] = React.useState({
        name:'',
        price: 0,
        sale: true,
        photo: null,
        tags:[]
    });
    
    const [tagsChecked,setTagsChecked] = React.useState([]);
    const [error,setError] = React.useState(null);
    const { name, price } = contentNewAdvert;

    const handleChange = ev =>{
        if(ev.target.name === 'price'){
            setContentNewAdvert(oldContentNewAdvert => ({
                ...oldContentNewAdvert,
                [ev.target.name]:parseInt(ev.target.value)
            }));
        }else{
            setContentNewAdvert(oldContentNewAdvert => ({
                ...oldContentNewAdvert,
                [ev.target.name]:ev.target.value,
            }));
        }

    }

    const handleChangeSale = ev =>{
        if(ev.target.value === 'true'){
            setContentNewAdvert(oldContentNewAdvert => ({
                ...oldContentNewAdvert,
               sale:true,
            }));
        }else{
            
            setContentNewAdvert(oldContentNewAdvert => ({
                ...oldContentNewAdvert,
                sale:false,
            }));
        }

    }
    const handleFile = ev =>{
        setContentNewAdvert(oldContentNewAdvert => ({
            ...oldContentNewAdvert,
            photo: ev.target.files[0],
           
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
  
    const validationForm = () =>{

        if(tagsChecked.length===0){
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
            contentNewAdvert.tags = [...tagsChecked];
            saveNewAdvert(contentNewAdvert);

          
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
                onChange={handleChangeSale}
            >

                <option value={true}>Buy</option>
                <option value={false}>Sell</option>
            </select>
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
                       
            <div className="form_field">
                               
                               
                <label htmlFor="file">Upload image</label>
                <input 
                    type="file"  
                    accept="image/*"
                    name="photo"
                    onChange={handleFile}
                />    
                 
            </div>
                
            <div className="form_field">
                <input 
                    type="submit" 
                    className="btn btn-primary btn-lg btn-block" 
                    value="Publish"     
                />
            </div>


            {error ? <Error message={error}/>: null}
    
        </form>
         
      
        
     );
}
 
export default NewAdvertForm;