import React from 'react';
import Error from '../../error/Error';
import Spinner from '../../shared/Spinner';
import LoginForm from './LoginForm';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../../../store/actions';
import { getUi } from '../../../store/selectors';
import './LoginPage.css';

const LoginPage = () => {

    const [isChecked, setIsChecked] = React.useState(false);
    const dispatch = useDispatch();
    const { isLoading , error} = useSelector(getUi);

    const handleSubmit = async (credentials) => (await dispatch(loginAction(credentials,isChecked)));
        

    return (

        <div className="user_form">
            <LoginForm 
                onSubmit={handleSubmit}
                setIsChecked={setIsChecked}
            />
            {error 
                && 
                <Error 
                    message={error.message}
                />}
            { isLoading && <Spinner/> }
        </div>
            
    )
}

export default LoginPage;