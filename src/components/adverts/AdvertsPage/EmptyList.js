import React from 'react';
import { Link } from 'react-router-dom';

const EmptyList = () => (
    <div style={{ textAlign: 'center' }}>
      <p>Be the first advert!</p>
      <Link className="btn" to="/advert" >
        Advert
      </Link>
    
    </div>
);

export default EmptyList;