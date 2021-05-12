import React from 'react';
import { login } from '../../../api/auth';
import Error from '../../error/Error';
import Spinner from '../../shared/Spinner';
import { AuthContext } from '../../../context/AuthContext';
import LoginForm from './LoginForm';
import './LoginPage.css';



const LoginPage = () => {

    const { setIsLogged } = React.useContext(AuthContext);
    const [isLoading,setIsLoading] = React.useState(false);
    const [error,setError] = React.useState(null);
    const [isChecked, setIsChecked] = React.useState(false);

   
    const handleSubmit = async (credentials) =>{
    
        try {
            setError(null);
            setIsLoading(true);
            await login(credentials,isChecked);
            setIsLogged(true);
           
            
        } catch (error) {
            setError(error);
        }finally{
            setIsLoading(false);
            
        }

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