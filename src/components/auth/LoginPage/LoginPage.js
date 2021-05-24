import React from 'react';
import Error from '../../error/Error';
import Spinner from '../../shared/Spinner';
import LoginForm from './LoginForm';
import { useDispatch, useSelector } from 'react-redux';
import './LoginPage.css';
import { loginAction } from '../../../store/actions';
import { getUi } from '../../../store/selectors';

const LoginPage = () => {

  
    const [error,setError] = React.useState(null);
    const [isChecked, setIsChecked] = React.useState(false);
    const dispatch = useDispatch();
    const { isLoading } = useSelector(getUi);


    const handleSubmit = async (credentials) =>{
        dispatch(loginAction(credentials,isChecked));
        
    }
    

    return (
        
        <div className="user_form">
           
            <LoginForm 
                onSubmit={handleSubmit}
                setIsChecked={setIsChecked}
               
            />
            {error && <Error message={error.message}/>}

            { isLoading && <Spinner/>}
           

        </div>
            
    )
}

export default LoginPage;