import React from 'react';
import { login } from '../../../api/auth';
import Error from '../../error/Error';
import Spinner from '../../shared/Spinner';
import { AuthContext } from '../../../context/AuthContext';
import { LoadingContext } from '../../../context/LoadingContext';
import LoginForm from './LoginForm';
import './LoginPage.css';



const LoginPage = ({history}) => {

    const {isLogged, setIsLogged} = React.useContext(AuthContext);
    const {isLoading, setIsLoading} = React.useContext(LoadingContext);
    const [error,setError] = React.useState(null);

    const handleSubmit = async credentials =>{

        try {
            setIsLoading(true);
            setError(null);
            await login(credentials);
            history.replace('/');
            setIsLogged(true);
            
        } catch (error) {
            setError(error);
        }finally{
            setIsLoading(false);
            
        }

    }

    return (
        
        <div className="user_form">
               
            <LoginForm onSubmit={handleSubmit} />
            {error && <Error message={error.message}/>}

            { isLoading && <Spinner/>}
           

        </div>
            
    )
}

export default LoginPage;