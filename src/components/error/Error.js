import React from 'react';
import T from 'prop-types';
import { useDispatch } from 'react-redux';
import { resetError } from '../../store/actions';

const Error = ({ message }) => {

    const dispatch = useDispatch();
    return(

        <div 
            className="loginPage-error"
            onClick={() => dispatch(resetError())}
        >
            {message}
        </div>


    )


};
    


Error.propTypes = {
    message: T.string
};

Error.defaultProps = {
    message: 'Error',
};

 
export default Error; 