import React from 'react';
import T from 'prop-types';
import { Link } from 'react-router-dom';
import './Advert.css';

const Advert = ({id,name,sale,price,tags}) => {
    return (  
        <div className="card card-section bg-light mb-5" style={ { maxWidth: 300 } }>
            <div className="card-header">{name}</div>
            <div className="card-body border rounded">
                <p className="card-title">{`Price ${price}€`}</p>
                <p className="card-text"> {sale ? 'Buy': 'Sell'} </p>
                <p className="card-text"> {`${tags} `} </p>
            </div>
            <Link className="btn-cards" to={`./advert/${id}`}>
                    More...
            </Link>
        </div>
    );
}

Advert.propTypes = {
    name:T.string,
    price:T.number,
    sale:T.bool,
    tags:T.array
};
 
export default Advert;