import React from 'react';
import { Link } from 'react-router-dom';


const AdvertsList = ({id,name,sale,price,tags,photo}) => {
    let isBuy = 'buy';
    if(!sale){
     
         isBuy = 'sell';
    }
    return ( 
        <Link to={`./adverts/${id}`}>
            <div className="card ms-3" style={ { maxWidth: 300 } }>
                <div className="row no-gutters">
                    <div className="col-md-4">

                        <img src={ `../uploads/futbol.jpg` } className="card-img" alt={ name } />
                    </div>
                    <div className="col-md-8">

                        <div className="card-body">
                            <h3 className="card-title"> {name}</h3>
                            <p className="card-text"> {price}€ </p>
                            <p className="card-text"> {isBuy} </p>
                            <p className="card-text"> {tags} </p>
                        </div>

                    </div>
                </div>
            </div>
        </Link>
     );
}
 
export default AdvertsList;