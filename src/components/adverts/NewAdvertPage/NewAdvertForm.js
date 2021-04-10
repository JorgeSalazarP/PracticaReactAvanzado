import React from 'react';

const NewAdvertForm = ({tagsAPI}) => {

    console.log(tagsAPI)
    return ( 
        
        <form>
            <div className="form-group">
                <label htmlFor="input_name">Name</label>
                <input type="text" className="form-control" id="input_name"/>
            </div>
            <div className="form-group">
                <label htmlFor="input_price">Price</label>
                <input type="number" className="form-control" id="input_price"/>
            </div>
            <div className="form-group">
                <label htmlFor="buy_sell">Buy or Sell?</label>
                <select className="form-control" id="buy_sell">
                    <option>Buy</option>
                    <option>Sell</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="showTags">Select tags</label>
                <select multiple className="form-control" id="showTags">
                    {tagsAPI.map((tag,index)=>(
                        <option 
                            key={index}
                        >{tag}
                        </option>
                    ))}
                </select>
            </div>

         
            <div className="form-group">
                <label htmlFor="file_photo">Upload Photo</label>
                <input type="file" className="form-control-file" id="file_photo"/>
            </div>

            <div className="form_field">
                        <input 
                            type="submit" 
                            className="btn btn-primary btn-lg btn-block" 
                            value="Publish" 
                      
                        />
            </div>
        </form>
      
        
     );
}
 
export default NewAdvertForm;