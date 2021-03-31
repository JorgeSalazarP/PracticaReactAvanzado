import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import getAdvertId from '../../../querys/getAdvertId';

const AdvertPage = () => {

    const { id } = useParams();
    const currentAdvert = getAdvertId(id);

    if( !currentAdvert ){

        return <Redirect to='/' />
    }

    const {name,sale,price,tags,photo} = currentAdvert;
    
    
    return (
        <div className="row mt-5">
            <div className="col-4">
                <img 
                    src={ `../uploads/futbol.jpg` }
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>

            <div className="col-8 animate__animated animate__fadeIn">
                <h3> { name } </h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">  { price }€  </li>
                    <li className="list-group-item"> <b> Buy or Sell: </b> { sale } </li>
                    <li className="list-group-item"> <b> Tag: </b> { tags } </li>
                </ul>
                <button 
                    className="btn btn-outline-info"
                   // onClick={ handleReturn }
                >
                    Return
                </button>

            </div>

        </div>
    )
}
export default AdvertPage;