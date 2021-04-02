import React from 'react';
import { login } from '../../../api/adverts';
import { types } from '../../../types/types';
import { AuthContext } from './AuthContext';
import LoginForm from './LoginForm';

import './LoginPage.css';


const LoginPage = () => {

    // const { dispatch } = React.useContext( AuthContext );
    
    // const handleSubmit = (ev) =>{
        
    //     ev.preventDefault();
        

    //     // dispatch({
    //     //    type: types.login,
    //     //    payload: {
    //     //        name: 'Jorge'
    //     //    }
    //     // })
        
    //     // history.replace('/'); hay que pasar la prop history
    // }
    const handleSubmit = async credentials =>{
        try {
            
            await login(credentials);


        } catch (error) {
            
        }
    }

    return (
        <div className="user_form">

            <LoginForm onSubmit={handleSubmit}/>
        </div>
    )
}

export default LoginPage;