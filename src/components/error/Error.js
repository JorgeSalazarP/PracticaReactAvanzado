import React from 'react';
import T from 'prop-types';

const Error = ({ message }) => (
  
    <div className= "loginPage-error">{message}</div>
);

Error.propTypes = {
    message: T.string
};

Error.defaultProps = {
    message: 'Error',
};

 
export default Error; 