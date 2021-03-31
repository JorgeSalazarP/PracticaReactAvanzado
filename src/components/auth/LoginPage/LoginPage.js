import React from 'react';
import './LoginPage.css';


const LoginPage = () => {
    return (
        <div className="user_form">
            <div className="container container_form">
                <h1>Iniciar Sesión</h1>
                <form
                   // onSubmit={onSubmit}
                >
                    <div className="form_field">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                           // value={email}
                          //  onChange={onChange}
                        />
                    </div>

                    <div className="form_field">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password"
                            id="password"
                            name="password"
                            //value={password}
                          //  onChange={onChange}
                        />
                    </div>

                    <div className="form_field">
                        <input type="submit" className="btn btn-primary btn-lg btn-block" value="Iniciar Sesión" />
                    </div>
                    
                </form>

                
            </div>
        </div>
    )
}

export default LoginPage;