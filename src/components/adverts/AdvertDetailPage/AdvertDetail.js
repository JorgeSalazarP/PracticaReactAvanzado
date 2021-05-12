import React from 'react';
import T from 'prop-types';
import { useHistory } from 'react-router-dom';

const AdvertDetail = ({ name,price,photo,sale,tags,onClickDeleteAdvert }) => {
    
    const history = useHistory();
        
    return (

            <div className="row mt-5">
                <div className="col-4">
                    <img 
                        src={`${process.env.REACT_APP_API_BASE_URL}${photo}`} alt=""
                        className="img-thumbnail animate__animated animate__fadeInLeft"
                    />
                  
                </div>
    
                <div className="col-8 ">
                    <h3> { name } </h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">  { price }€  </li>
                        <li className="list-group-item"> <b> </b> { sale ? 'Buy':'Sell' } </li>
                        <li className="list-group-item"> <b> Tag: </b> { tags } </li> 
                       
                    </ul>
                    <button 
                        className="btn btn-outline-info"
                        onClick={ ()=>(history.goBack()) }
                    >
                        Return
                    </button>
                    <button 
                        className="btn btn-outline-info" 
                        style={ {backgroundColor: 'red', marginLeft: 20}}
                        onClick={ onClickDeleteAdvert }
                    >
                        Delete
                    </button>
    
                </div>
    
            </div>
    );
}

AdvertDetail.propTypes = {
    photo: T.string,
    name:T.string,
    price:T.number,
    sale:T.bool,
    tags:T.array,
    onClickDeleteAdvert: T.func.isRequired,
};
  
AdvertDetail.defaultProps = {
    photo: null,
};


export default AdvertDetail;