import React from 'react';
import T from 'prop-types';
import { Link } from 'react-router-dom';

const Advert = ({id,name,sale,price,tags}) => {
    return (  
        <div className="card bg-light mb-3" style={ { maxWidth: 300 } }>
            <div className="card-header">{name}</div>
            <div className="card-body">
                <p className="card-title">{price}€</p>
                <p className="card-text"> {sale ? 'Buy': 'Sell'} </p>
                <p className="card-text"> {tags.join(' - ')} </p>
            </div>
            <Link className="btn btn-block" to={`./advert/${id}`}>
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