import React from 'react';
import T from 'prop-types';
import Error from '../../error/Error';
import { rangePrice } from '../../shared/rangePrice';


const NewAdvertForm = ({ tagsAPI, saveNewAdvert }) => {


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
        let value = ev.target.value;
        if(value === 'price'){
            value = parseInt(value);
        }
        setContentNewAdvert(oldContentNewAdvert => ({
            ...oldContentNewAdvert,
            [ev.target.name]:value,
        }));
    }

    const handleChangeSale = ev =>{
        let value = false;
        if(ev.target.value === 'true'){
            value = true;
        }       
        setContentNewAdvert(oldContentNewAdvert => ({
            ...oldContentNewAdvert,
            sale:value,
        }));
        

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
        if(price < rangePrice.min || price > rangePrice.max){
            setError(`Price ${rangePrice.min}-${rangePrice.max}`);
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
      <div className="row">
        <div className="col-12 order-2 order-md-1 d-flex align-items-center justify-content-center">
          <form 
            onSubmit={handleSubmit} 
            style={{ height: 700 }}>
              
            <label htmlFor="input_name">Name</label>
            <input
              type="text"
              className="form-control mb-2"
              name="name"
              style={{ fontSize: 15 }}
              value={name}
              onChange={handleChange}
            />

            <label htmlFor="input_price">Price</label>
            <input
              type="number"
              className="form-control mb-2"
              id="input_price"
              name="price"
              style={{ fontSize: 15 }}
              value={price}
              onChange={handleChange}
            />

            <label htmlFor="buy_sell">Buy or Sell?</label>
            <select
              className="form-control mb-2"
              id="buy_sell"
              name="sale"
              onChange={handleChangeSale}
              style={{ fontSize: 15 }}
            >
              <option value={true}>Buy</option>
              <option value={false}>Sell</option>
            </select>
            <div className="form-check form-check-inline mb-2">
              {tagsAPI.map((tag) => (
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
                className="btn btn-primary btn-block mb-2"
                value="Publish"
              />
            </div>
            {error 
              ? 
              <Error 
                message={error} 
              /> 
              : null
            }
          </form>
        </div>
      </div>
    );
}

NewAdvertForm.propTypes = {
    tagsAPI: T.array,
    saveNewAdvert: T.func.isRequired,

};
 
export default NewAdvertForm;